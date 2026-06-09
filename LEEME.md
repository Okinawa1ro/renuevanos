# 🛍️ Tu Tienda Virtual — Guía fácil

Una tienda simple y elegante para vender tus productos artesanales (cerámica,
figuras religiosas, mazos de cartas, cuadros, telas botánicas y más).

No hace falta saber programar. Todo lo que tenés que cambiar está en **un solo
archivo**: `productos.js`.

---

## ✅ Lo primero que tenés que hacer (3 pasos)

Abrí el archivo **`productos.js`** con cualquier editor de texto (sirve hasta el
Bloc de notas) y cambiá estos datos:

1. **Tu número de WhatsApp** — para recibir los pedidos.
   Buscá la línea que dice `whatsapp:` y escribí tu número con código de país,
   sin el 15, sin espacios ni guiones.
   Ejemplo (celular de Buenos Aires): `whatsapp: "5491122334455",`

2. **El nombre de tu tienda** — buscá `nombre:` y `eslogan:` y poné lo tuyo.

3. **(Opcional) Cobro con tarjeta o transferencia:**
   - **Tarjeta:** entrá a tu Mercado Pago → *Cobrar → Link de pago*, copiá el
     link y pegalo en `mercadoPagoLink: "..."`.
   - **Transferencia:** poné tu `alias`, y si querés tu `cbu` y el `titular`.

Si dejás la tarjeta o la transferencia vacías, esos botones simplemente no
aparecen. El pedido por WhatsApp funciona siempre.

---

## ⚖️ Datos legales (OBLIGATORIO completar)

Por la Ley 24.240 de Defensa del Consumidor, una tienda online debe mostrar los
datos del vendedor. En `productos.js`, dentro del bloque **`legal:`**, completá:

```js
legal: {
  titular:   "María Regina Petazzi",  // ya cargado
  cuit:      "",   // ⚠️ poné tu CUIT/CUIL
  domicilio: "",   // ⚠️ poné tu domicilio legal (calle y número)
  email:     "",   // ⚠️ poné tu email de contacto
  ...
},
```

Estos datos aparecen automáticamente en el pie del sitio y en las páginas
legales. Mientras estén vacíos, se muestran como **"a completar"**.

La tienda ya incluye estas páginas legales (no hace falta editarlas):

- `terminos-y-condiciones.html` — Términos y Condiciones
- `politica-de-privacidad.html` — Política de Privacidad (Ley 25.326)
- `boton-de-arrepentimiento.html` — Botón de Arrepentimiento (10 días, Ley 24.240)

> Importante: estas páginas son **modelos** preparados para un emprendimiento de
> cerámica artesanal. Antes de publicar, conviene que un profesional las revise
> según tu situación impositiva (monotributo, etc.).

---

## 🛒 ¿Cómo agregar o cambiar productos?

Todo en `productos.js`, en la lista de **PRODUCTOS**. Cada producto es un
bloque como este:

```js
{
  id: 13,                                  // un número que no se repita
  nombre: "Maceta de cerámica",
  categoria: "ceramica",                   // ceramica, religioso, mazos, cuadros, telas u otros
  precio: 9500,                            // solo el número
  descripcion: "Hecha a mano, 15 cm.",
  foto: "",                                // ver abajo cómo poner fotos
  destacado: false,                        // true para resaltarlo
  agotado: false                           // true si no hay stock
},
```

- **Para agregar uno nuevo:** copiá un bloque entero, pegalo abajo del último y
  cambiá los datos. Ojo: cada bloque termina con una **coma** `,`.
- **Para cambiar el precio:** cambiá el número en `precio`.
- **Para marcar sin stock:** poné `agotado: true`.

---

## 📷 ¿Cómo poner fotos a los productos?

Tenés 3 opciones en el campo `foto`:

1. **Dejarlo vacío** (`foto: ""`) → se muestra un dibujo lindo automático.
2. **Una foto tuya:** poné las fotos en una carpeta `fotos` junto a estos
   archivos y escribí, por ejemplo: `foto: "fotos/jarron.jpg"`.
3. **Un link de internet:** pegá la dirección de la imagen.

Consejo: usá fotos cuadradas (mismo ancho y alto) para que se vean prolijas.

---

## 🌐 ¿Cómo poner la tienda online (gratis)?

La forma más fácil y gratuita es **GitHub Pages**:

1. Subí estos archivos a un repositorio de GitHub.
2. En el repositorio: *Settings → Pages*.
3. En "Branch" elegí tu rama y la carpeta raíz, y guardá.
4. En unos minutos te da un link público (algo como
   `https://tuusuario.github.io/tu-tienda/`). ¡Ese es el link para compartir!

También funciona en Netlify (arrastrás la carpeta y listo) o cualquier hosting.

---

## 📁 Archivos del proyecto

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La tienda. **No hace falta tocarlo.** |
| `productos.js` | **Acá editás todo:** datos, pagos y productos. |
| `manifest.json` | Para que se pueda "instalar" como app en el celular. |
| `icon-512.png` | El ícono de la app. Podés reemplazarlo por tu logo. |
| `terminos-y-condiciones.html` | Página de Términos y Condiciones. |
| `politica-de-privacidad.html` | Página de Política de Privacidad. |
| `boton-de-arrepentimiento.html` | Página del Botón de Arrepentimiento. |
| `legal.css` / `pie-legal.js` | Estilos y datos del pie legal (no hace falta tocar). |

---

¿Dudas? Probá la tienda abriendo `index.html` en tu navegador y hacé un pedido
de prueba a tu propio WhatsApp para ver cómo llega. 💛
