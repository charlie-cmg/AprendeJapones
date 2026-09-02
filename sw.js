/* Service worker de Aprende Japonés.

   Existe por dos motivos:

     1. Que la web añadida a la pantalla de inicio funcione SIN CONEXIÓN.
        «Funciona sin conexión» era una promesa fundacional del proyecto y se
        perdió sin querer al quitar las descargas; esto la recupera, y sin
        pedirle a nadie que se baje un archivo.
     2. Que kanji-datos.js (1,4 MB) no se baje una y otra vez. GitHub Pages
        solo lo cachea diez minutos.

   LA PARTE DELICADA ES LA INVALIDACIÓN. Un service worker mal hecho sirve
   versiones viejas para siempre, y el usuario no tiene forma de saberlo. Aquí:

     * VERSION la sella tools/publicar.py con un hash del contenido publicado,
       así que cualquier cambio, por pequeño que sea, estrena caché.
     * En `activate` se borra TODA caché que no sea la de esta versión.
     * Las páginas van por RED PRIMERO: estando en línea siempre se ve lo
       último, y la caché solo entra si la red falla. Sin esto, un despliegue
       nuevo tardaría dos visitas en verse.
     * Los datos y los iconos van por CACHÉ PRIMERO: son grandes o no cambian,
       y cuando cambian ya vienen con una VERSION nueva.

   No se precarga kanji-datos.js: son 1,4 MB, y quien solo abre el silabario no
   tiene por qué gastarlos. Se guarda la primera vez que se usa. */

const VERSION = '2159aa058b26';
const CACHE = 'aprende-japones-' + VERSION;

/* El armazón: lo mínimo para que las tres páginas abran sin red. */
const ARMAZON = [
  './',
  './index.html',
  './silabario.html',
  './kanji-trazos.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './apple-touch-icon-kanji.png',
];

self.addEventListener('install', e => {
  // addAll falla entera si un solo archivo falla; se piden de uno en uno para
  // que un fallo suelto no deje la instalación a medias.
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(ARMAZON.map(u => c.add(u).catch(() => null)))
  ).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function esPagina(req){
  return req.mode === 'navigate' ||
         (req.headers.get('accept') || '').includes('text/html');
}

/* SIEMPRE con ignoreVary. GitHub Pages manda `Vary: Accept-Encoding`, y cuando
   una respuesta guardada lleva Vary, caches.match() solo acierta si las
   cabeceras de la peticion coinciden con las de cuando se guardo. Las de una
   navegacion NO son las del precacheo, asi que sin esto la caché estaba llena
   y aun asi no se encontraba nada: sin red, «no estas conectado a internet».
   ignoreSearch ademas evita que un ?loquesea rompa el acierto. */
const BUSCAR = {ignoreVary: true, ignoreSearch: true};

function guarda(req, resp){
  if(resp && resp.status === 200 && resp.type !== 'opaque'){
    const copia = resp.clone();
    caches.open(CACHE).then(c => c.put(req, copia));
  }
  return resp;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;

  const url = new URL(req.url);
  const propio = url.origin === self.location.origin;
  const tipografia = url.hostname === 'fonts.googleapis.com' ||
                     url.hostname === 'fonts.gstatic.com';
  if(!propio && !tipografia) return;

  if(esPagina(req)){
    // Red primero: en linea siempre lo ultimo; sin red, lo guardado.
    e.respondWith(
      fetch(req)
        .then(r => guarda(req, r))
        .catch(() => caches.match(req, BUSCAR)
          .then(r => r || caches.match('./index.html', BUSCAR))
          .then(r => r || caches.match('./', BUSCAR))
          .then(r => r || new Response(
            '<!doctype html><meta charset=utf-8><title>Sin conexion</title>' +
            '<body style="font:16px system-ui;padding:2rem;text-align:center">' +
            '<h1>Sin conexion</h1><p>Esta pagina todavia no se habia guardado. ' +
            'Vuelve a abrirla con conexion una vez y quedara disponible.</p>',
            {headers: {'Content-Type': 'text/html; charset=utf-8'}})))
    );
    return;
  }

  // Lo demas: cache primero; si no esta, red guardando copia.
  e.respondWith(
    caches.match(req, BUSCAR).then(hit =>
      hit || fetch(req).then(r => guarda(req, r)).catch(() => hit || Response.error())
    )
  );
});
