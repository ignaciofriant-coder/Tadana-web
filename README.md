# Tadana · sitio web

Sitio estático de Tadana (yoga Hatha y masaje tradicional tailandés). Sin build, sin dependencias:
HTML, CSS y JavaScript plano. Se sube tal cual.

## Estructura

```
index.html              Home completa (única página por ahora)
site.webmanifest        Iconos e identidad para instalación en móvil
robots.txt / sitemap.xml
vercel.json             Cabeceras de caché y seguridad
assets/
  css/style.css         Todos los estilos + tokens de la paleta
  css/fonts.css         @font-face de las fuentes auto-alojadas
  js/main.js            Idioma ES/EN, menú, parallax, formulario
  fonts/                woff2 (subconjuntos latin y latin-ext)
  img/                  Fotos en .jpg + .webp, logo e iconos
```

## Cómo verlo en local

Con Python instalado, desde esta carpeta:

```bash
python -m http.server 8790
```

Y abrir http://localhost:8790 — hace falta un servidor, no basta con abrir el archivo,
porque las fuentes y el manifest se piden por HTTP.

## Producción: el VPS

El sitio vive en **https://tadana.cl**, servido por nginx desde `/var/www/tadana` en el VPS
de Hostinger (Brasil, `187.77.54.138`), con Cloudflare por delante y certificado de
Let's Encrypt que certbot renueva solo.

Para publicar un cambio: `git push` a `main` y después, en el servidor, correr

    deploy-tadana

que hace `git fetch` + `git reset --hard origin/main` sobre `/var/www/tadana`.

La configuración de nginx está en `/etc/nginx/sites-available/tadana.cl` y replica lo que
hacía `vercel.json`: un año de caché para `/assets/img` y `/assets/fonts`, una hora para
`/assets/css` y `/assets/js`, las cuatro cabeceras de seguridad, `www` redirigido al apex y
HTTP redirigido a HTTPS. Ojo: en nginx un `add_header` dentro de un `location` **descarta**
todos los heredados, por eso las cabeceras de seguridad están repetidas en cada bloque.

DNS en Cloudflare: dos registros A (`@` y `www`) a la IP del VPS. El modo SSL tiene que
estar en **Full (strict)**; con Flexible se entra en loop de redirecciones contra el
redirect a HTTPS de nginx.

## Vercel: copia de staging

El proyecto `tadana-web` sigue conectado al repo y publica cada push en
`https://tadana-web.vercel.app`. Se usa para previews de ramas antes de tocar producción.
Lleva `X-Robots-Tag: noindex` en `vercel.json` para que esa copia no le compita en Google
al dominio real.

## Decisiones que conviene recordar

- **Formulario → WhatsApp.** No hay backend: al enviar, se arma el mensaje con los datos
  y se abre el chat de WhatsApp de Rocío (`+56 9 3442 7797`). El número está en
  `assets/js/main.js`, constante `WHATSAPP`.
- **Idioma.** ES por defecto, EN opcional. Todos los textos viven en el objeto `DICT`
  de `assets/js/main.js`; el HTML solo los referencia con `data-i18n="ruta.a.la.clave"`.
  Para cambiar un texto se edita `DICT` **y** el texto por defecto del HTML (que es el que
  se ve antes de que cargue el JS y el que leen los buscadores).
- **Sin referencias a una ciudad.** El sitio no menciona Pucón ni el volcán, y no lleva mapa.
- **Precios.** Todavía no existe la página; los botones de precios abren WhatsApp.
  Cuando haya valores definidos se crea `precios.html` y se apuntan ahí esos botones
  más un enlace nuevo en el menú.
- **Caché.** Las imágenes y fuentes se cachean un año (nginx en producción, `vercel.json`
  en la copia de Vercel). El CSS y el JS llevan
  `?v=N` en `index.html` (hoy `v=4`): **subir ese número al editarlos** para que los visitantes
  recurrentes reciban la versión nueva.

## Origen del diseño

La maqueta aprobada es `Tadana Yoga (Terracota) - v4.html` (Claude Design, paleta Terracota).
Este repositorio es esa maqueta convertida a un sitio real: fotos optimizadas a `.webp`/`.jpg`,
fuentes auto-alojadas, estilos en hojas propias y marcado accesible.
