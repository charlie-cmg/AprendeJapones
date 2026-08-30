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

const VERSION = '0fae01b51351';
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

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;

  const url = new URL(req.url);
  const propio = url.origin === self.location.origin;
  const tipografia = url.hostname === 'fonts.googleapis.com' ||
                     url.hostname === 'fonts.gstatic.com';
  if(!propio && !tipografia) return;

  if(esPagina(req)){
    // Red primero: en línea siempre lo último; sin red, lo guardado.
    e.respondWith(
      fetch(req)
        .then(r => {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(req, copia));
          return r;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Todo lo demás: caché primero, y si no está, red guardando copia.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      // Las respuestas opacas (tipografías sin CORS) no se pueden inspeccionar
      // ni sirven para nada guardadas: se dejan pasar sin cachear.
      if(r && r.status === 200 && r.type !== 'opaque'){
        const copia = r.clone();
        caches.open(CACHE).then(c => c.put(req, copia));
      }
      return r;
    }).catch(() => hit))
  );
});
