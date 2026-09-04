<!-- Generado por tools/gen_manual.py — no editar a mano. -->

# LÉEME — qué es esto, qué licencia lleva y qué puedes hacer con ello

Dos aplicaciones libres para estudiar japonés, pensadas para estudiantes
hispanohablantes.

| Archivo | Para qué sirve |
|---|---|
| `silabario.html` | Hiragana y katakana: tabla imprimible, trazos animados, hoja de caligrafía y juego de lectura. |
| `kanji-trazos.html` | 1.306 kanji: fichas por lección, vocabulario, caligrafía, examen imprimible, buscador, repaso espaciado y juego. Las lecciones las pones tú. |

**Autor:** Carlos Mesonero García.

El manual completo, con cada botón explicado, está en `Manual de usuario.html`
— se abre en cualquier navegador, sin Word.

---

## Cómo se usan

Cada aplicación es **un único archivo**. Se abre haciendo **doble clic**: se
abre en tu navegador (Chrome, Edge, Firefox…) y ya está. No hay que instalar
nada, no hay que registrarse y no hace falta conexión: lo único que se
descarga de internet son las tipografías, y si no hay red se usan las de tu
ordenador.

### Dónde se guardan tus datos

Todo lo que haces —el progreso del juego, tus notas, tus ajustes— se guarda
**en tu navegador, en tu ordenador**. No se envía nada a ningún servidor y
nadie más lo ve. Eso tiene dos consecuencias prácticas:

- si borras los datos de navegación, **se borra tu progreso**;
- si abres el archivo en otro ordenador o en otro navegador, empiezas de cero.

> **Haz copias.** El botón **Copia** baja un archivo con tus cosas y
> **Cargar** lo restaura. En la app de kanji esa copia incluye también el
> progreso del juego, que es lo único que no se puede rehacer a mano.

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

Las apps incorporan datos de terceros. **Cada hoja impresa lleva un pie que
los cita, y ese pie no se puede quitar**: es justo lo que exigen las
licencias.

| Qué | De quién | Licencia |
|---|---|---|
| Los trazos (animación y casillas) | KanjiVG, © Ulrich Apel | CC BY-SA 3.0 |
| Lecturas, significados, trazos y nivel | KANJIDIC2, © EDRDG | CC BY-SA 4.0 |
| Vocabulario de ejemplo | JMdict, © EDRDG | CC BY-SA 4.0 |
| El programa, el diseño, las hojas y las traducciones al castellano | Carlos Mesonero García | CC BY-SA 4.0 |

### La licencia del conjunto: CC BY-SA 4.0

Puedes **compartirlo** —copiarlo y redistribuirlo por cualquier medio— y
**adaptarlo** —remezclarlo, transformarlo y crear a partir de ello—, incluso
con fines comerciales. En corto:

#### Qué puedes hacer

- Usarlo todo lo que quieras para estudiar.
- Imprimir las hojas que necesites para ti.
- Guardar copias de tu progreso.
- Compartirlo con quien quieras, y también modificarlo.

#### Qué se pide a cambio

- **Cita la autoría** e indica si hiciste cambios.
- **Comparte igual**: si lo transformas, publica tu versión con esta misma
  licencia, CC BY-SA 4.0.
- **No le quites el pie** con los créditos de KanjiVG, KANJIDIC2 y JMdict: eso
  lo exigen sus licencias, no yo.

Texto completo de la licencia:
`https://creativecommons.org/licenses/by-sa/4.0/deed.es`

> **Por qué BY-SA y no «no comercial».** Porque no se puede. Los datos que
> lleva dentro —KanjiVG, KANJIDIC2, JMdict— son CC BY-SA, y su «Compartir
> igual» es contagioso: prohíbe añadir restricciones. La cláusula «no
> comercial» es una restricción añadida, y BY-NC-SA no figura entre las
> licencias compatibles con BY-SA; mantenerla habría obligado a quitar los
> trazos, las lecturas y los significados, o sea a quedarse sin app. Tampoco
> hace falta: ese mismo «Compartir igual» ya impide que nadie coja esto, lo
> cierre y lo venda como producto propietario — para redistribuirlo tendría
> que publicarlo igual de abierto.

---

## Aviso legal

**Sobre los caracteres y las palabras.** Los kanji, sus lecturas y sus
significados no son propiedad de nadie, y el vocabulario de ejemplo procede de
JMdict, un diccionario libre. Las traducciones al castellano son originales de
este proyecto.

**Sobre los manuales.** Esta aplicación **no reproduce el contenido de ningún
libro de texto**. No incluye temarios, ni repartos de kanji por lecciones, ni
listas de vocabulario tomadas de manual alguno: esa organización es obra de
sus autores, y es precisamente lo que aquí pone el usuario. Si cargas tu
propio libro en la app, ese material es tuyo y se queda en tu navegador.

**Independencia.** Desarrollo educativo independiente y sin ánimo de lucro.
**No está afiliado, patrocinado ni vinculado** con ninguna editorial ni con
los autores de ningún manual. Las marcas y títulos que puedan mencionarse
pertenecen a sus respectivos titulares y se citan, en su caso, a título
meramente informativo.

**Sin garantías.** Esto se entrega «tal cual», sin garantía de ningún tipo. Es
material de estudio hecho por un estudiante: puede contener errores, y no
sustituye a un profesor ni a un diccionario. Si encuentras un fallo, dilo.

> Esto es una explicación entre compañeros, no asesoramiento legal.

---

## Si algo va mal

| Qué te pasa | Qué hacer |
|---|---|
| Los caracteres japoneses salen como cuadraditos | Estás sin conexión y tu sistema no trae tipografía japonesa. La app te avisa. Con conexión se arregla solo. |
| Al imprimir salen dos páginas | Escala 100 %, márgenes por defecto y sin encabezados del navegador (capítulo «Imprimir bien»). |
| Ha desaparecido mi progreso | Se han borrado los datos del navegador. Restaura con **Cargar** la última copia que bajaste con **Copia**. |
| Quiero empezar el juego de cero | Dentro del juego, **Borrar mi progreso**. |
| He liado la tabla o las lecciones | El botón de restaurar (la flecha circular) las deja como venían de fábrica. |
| La letra sale muy pequeña en la hoja de fichas | Apaga **Ejemplos** o cambia a **2 columnas**: cuanto menos contenido, más grande sale todo lo demás. |
