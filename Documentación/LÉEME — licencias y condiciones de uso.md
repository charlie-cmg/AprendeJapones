# LÉEME — qué es esto, qué licencia lleva y qué puedes hacer con ello

Dos aplicaciones libres para estudiar japonés, pensadas para estudiantes
hispanohablantes.

| Archivo | Para qué |
|---|---|
| `silabario.html` | Hiragana y katakana: tabla imprimible, trazos animados, hoja de caligrafía y juego de lectura. |
| `kanji-trazos.html` | 1.306 kanji: fichas, vocabulario, caligrafía progresiva, examen imprimible, buscador, repaso espaciado y juego. |

**Autor:** Carlos Mesonero García.

---

## Cómo se usan

Cada aplicación es **un único archivo**. Se abre haciendo **doble clic**: se
abre en tu navegador (Chrome, Edge, Firefox…) y ya está. No hay que instalar
nada, no hay que registrarse y no hace falta conexión: lo único que se descarga
de internet son las tipografías, y si no hay red se usan las de tu ordenador.

**Tus datos se quedan en tu navegador.** El progreso, tus lecciones, tus notas
y tus ajustes viven en el almacenamiento local de *ese* navegador y de *ese*
ordenador. **No hay servidor**: no se envía nada a ningún sitio, nadie los ve,
y no hay cuentas ni seguimiento de ningún tipo. Dos consecuencias prácticas:

- si borras los datos de navegación, **se borra tu progreso**;
- si quieres llevártelo a otro ordenador, usa el botón **Copia** para bajar un
  archivo y **Cargar** para restaurarlo.

---

## Tú pones el temario

Ésta es la idea central de la app de kanji, y conviene entenderla porque
cambia cómo se usa.

**La aplicación no trae ningún temario.** Viene con los kanji «en general» y,
de fábrica, un reparto por lecciones calculado a partir del nivel JLPT y del
grado escolar japonés — que son listas públicas y oficiales. Eso es solo un
punto de partida para que la app arranque llena.

**Lo bueno lo pones tú.** En el editor **«Mi libro»** escribes tus lecciones,
una por línea:

```
1 | Números            | 一二三四五六七八九十 | 10
2 | Días de la semana  | 月火水木金土日     | 7
```

Número, tema, kanji y —opcional— cuántos kanji debería tener esa lección, que
la app usa para avisarte si te falta alguno al copiarlos. Las líneas que
empiezan por `#` son comentarios.

A partir de ahí la app **mapea tu libro**: construye las fichas, la hoja de
caligrafía, el examen y el juego siguiendo *tu* orden. Y como sabe por dónde
vas, los ejemplos de vocabulario se ordenan poniendo delante los que solo usan
kanji que ya has dado —repaso— y los que traen un kanji que aún no has visto
salen con su significado al lado, para echarte una mano.

Sirve con cualquier manual, con el temario de tu clase, o con el orden que te
dé la gana. Cada uno estudia con su libro.

---

## Créditos y licencias

Las apps incorporan datos de terceros. **Cada hoja impresa lleva un pie que los
cita, y ese pie no se puede quitar**: es justo lo que exigen las licencias.

| Qué | De quién | Licencia |
|---|---|---|
| **Trazos** (dibujos animados y casillas de caligrafía) | KanjiVG, © Ulrich Apel | CC BY-SA 3.0 |
| **Lecturas, significados, trazos, grado y nivel JLPT** | KANJIDIC2, © EDRDG | CC BY-SA 4.0 |
| **Vocabulario de ejemplo** | JMdict, © EDRDG | CC BY-SA 4.0 |
| **El programa, las hojas imprimibles y las traducciones al castellano** | Carlos Mesonero García | CC BY-SA 4.0 |

### La licencia del conjunto: CC BY-SA 4.0

Puedes **compartirlo** (copiarlo y redistribuirlo por cualquier medio) y
**adaptarlo** (remezclarlo, transformarlo y crear a partir de ello), incluso
con fines comerciales. Con dos condiciones:

- **Atribución** — cita la autoría e indica si hiciste cambios.
- **Compartir igual** — si lo transformas, distribuye tu versión bajo esta
  misma licencia.

Texto completo: <https://creativecommons.org/licenses/by-sa/4.0/deed.es>

**Por qué BY-SA y no «no comercial».** Porque no se puede. Los datos que lleva
dentro (KanjiVG, KANJIDIC2, JMdict) son CC BY-SA, y el «Compartir igual» es
contagioso: prohíbe añadir restricciones. La cláusula «no comercial» es una
restricción añadida, y BY-NC-SA no figura entre las licencias compatibles con
BY-SA. Mantenerla habría obligado a quitar los trazos, las lecturas y los
significados, o sea a quedarse sin app.

Tampoco hace falta: el «Compartir igual» ya impide que nadie coja esto, lo
cierre y lo venda como producto propietario — para redistribuirlo tendría que
publicarlo igual de abierto.

---

## Aviso legal

**Sobre los caracteres y las palabras.** Los kanji, sus lecturas y sus
significados no son propiedad de nadie, y el vocabulario de ejemplo procede de
JMdict, un diccionario libre. Las traducciones al castellano son originales de
este proyecto.

**Sobre los manuales.** Esta aplicación **no reproduce el contenido de ningún
libro de texto**. No incluye temarios, ni repartos de kanji por lecciones, ni
listas de vocabulario tomadas de manual alguno: esa organización es obra de
sus autores, y es precisamente lo que aquí pone el usuario. Si cargas tu propio
libro en la app, ese material es tuyo y se queda en tu navegador.

**Independencia.** Desarrollo educativo independiente y sin ánimo de lucro. **No
está afiliado, patrocinado ni vinculado** con ninguna editorial ni con los
autores de ningún manual. Las marcas y títulos que puedan mencionarse pertenecen
a sus respectivos titulares y se citan, en su caso, a título meramente
informativo.

**Sin garantías.** Esto se entrega «tal cual», sin garantía de ningún tipo. Es
material de estudio hecho por un estudiante: puede contener errores, y no
sustituye a un profesor ni a un diccionario. Si encuentras un fallo, dilo.

---

## Si algo va mal

| Síntoma | Qué hacer |
|---|---|
| Los kanji se ven como cuadraditos | Estás sin conexión y tu sistema no tiene tipografía japonesa. La app te avisa; con conexión se arregla solo. |
| Al imprimir salen dos páginas | En el diálogo de impresión: escala **100 %** (no «ajustar»), márgenes **por defecto** y desactiva encabezados y pies del navegador. |
| Ha desaparecido mi progreso | Se habrán borrado los datos del navegador. Restaura con **Cargar** la copia que bajaste con **Copia**. |
| Quiero empezar de cero | En el juego: **Borrar mi progreso**. Para las lecciones, el botón de restaurar deja el reparto de fábrica. |
