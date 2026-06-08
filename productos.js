/* ==========================================================================
   ⚙️  CONFIGURACIÓN DE LA TIENDA
   --------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitás tocar para administrar tu tienda.
   Cambiá los datos de abajo y guardá. No hace falta saber programar.

   👉 Consejo: hacé una copia de seguridad de este archivo antes de editar.
   ========================================================================== */

const CONFIG = {

  // ── Datos de tu tienda ──────────────────────────────────────────────
  nombre:      "Proyecto ReNuevaNos",        // Nombre que aparece arriba
  eslogan:     "Creciendo en el amor",       // Frase debajo del nombre
  moneda:      "$",                          // Símbolo de la moneda

  // ── WhatsApp (para recibir los pedidos) ─────────────────────────────
  // Escribí tu número CON código de país y SIN signos, espacios ni el 15.
  // Ejemplo Argentina (Buenos Aires): 5491122334455
  whatsapp:    "5491160136432",

  // ── Pago con tarjeta (Mercado Pago) ─────────────────────────────────
  // Pegá acá tu "Link de pago" de Mercado Pago (opcional).
  // Cómo crearlo: entrá a Mercado Pago → "Cobrar" → "Link de pago".
  // Si lo dejás vacío (""), el botón de tarjeta no aparece.
  mercadoPagoLink: "",

  // ── Transferencia bancaria (opcional) ───────────────────────────────
  // Si no querés ofrecer transferencia, dejá el alias vacío ("").
  transferencia: {
    alias:   "renuevanos",          // Alias de Mercado Pago
    cbu:     "0000003100043605425614",  // CVU
    titular: "María Regina Petazzi"
  },

  // ── Envíos ──────────────────────────────────────────────────────────
  // Frase que aparece arriba, en la portada.
  envioTexto:  "Envíos a todo el país. Elegí el costo al finalizar la compra.",

  // Opciones de envío: el cliente elige una al pagar y se SUMA al total.
  //   costo: poné el número (ej: 5000). Usá 0 para "sin cargo".
  //   costo: null  → "a coordinar" (no suma monto; lo arreglás por WhatsApp).
  // ⚠️ Los montos de abajo son EJEMPLOS: cambialos por tus precios reales.
  envios: [
    { nombre: "Retiro en persona",            costo: 0 },
    { nombre: "Envío dentro de tu ciudad",    costo: 5000 },
    { nombre: "Envío al resto del país",      costo: 9000 },
    { nombre: "A coordinar por WhatsApp",     costo: null },
  ],

  // ── Redes / contacto (opcional, dejá "" para ocultar) ───────────────
  instagram:   "",   // Ej: "https://instagram.com/tu_taller"
};


/* ==========================================================================
   🗂️  CATEGORÍAS
   --------------------------------------------------------------------------
   Podés cambiar los nombres. El "id" se usa para clasificar cada producto.
   ========================================================================== */

const CATEGORIAS = [
  { id: "ceramica",  nombre: "Cerámica",        emoji: "🏺" },
  { id: "religioso", nombre: "Figuras religiosas", emoji: "🕊️" },
  { id: "mazos",     nombre: "Mazos de cartas", emoji: "🃏" },
  { id: "cuadros",   nombre: "Cuadros",         emoji: "🖼️" },
  { id: "telas",     nombre: "Telas botánicas", emoji: "🌿" },
  { id: "otros",     nombre: "Otros",           emoji: "✨" },
];


/* ==========================================================================
   🛍️  PRODUCTOS
   --------------------------------------------------------------------------
   Para AGREGAR un producto: copiá un bloque { ... } completo, pegalo abajo
   y cambiá los datos. ¡No te olvides de la coma al final de cada bloque!

   Campos de cada producto:
     id          → un número único (no se repite con otro producto)
     nombre      → el nombre del producto
     categoria   → uno de los "id" de las categorías de arriba
     precio      → solo el número, sin símbolos (ej: 12500)
     descripcion → texto que describe el producto
     foto        → dirección de la foto. Podés:
                     • dejarla vacía ("") y se muestra un dibujo lindo, o
                     • poner el nombre de una imagen tuya (ej: "fotos/jarron.jpg"), o
                     • pegar un link de una imagen de internet.
     destacado   → true para que aparezca con una etiqueta "Destacado"
     agotado     → true si no hay stock (se muestra como "Agotado")
   ========================================================================== */

const PRODUCTOS = [

  {
    id: 1,
    nombre: "Florero de cerámica raku — blanco craquelado",
    categoria: "ceramica",
    precio: 60000,
    descripcion: "Pieza única hecha a mano con técnica raku. Acabado blanco con craquelado natural: cada grieta es irrepetible. Ideal como florero o pieza decorativa.",
    foto: "fotos/florero-blanco.jpg",
    destacado: true,
    agotado: false
  },
  {
    id: 2,
    nombre: "Florero de cerámica raku — verde y cobre",
    categoria: "ceramica",
    precio: 75000,
    descripcion: "Pieza única realizada con técnica raku. Tonos verdes con reflejos cobrizos y craquelado. Perfecta como florero o como objeto decorativo.",
    foto: "fotos/florero-verde.jpg",
    destacado: true,
    agotado: false
  },
  {
    id: 3,
    nombre: "Vasija decorativa de cerámica — crema",
    categoria: "ceramica",
    precio: 85000,
    descripcion: "Forma orgánica modelada a mano en tono crema natural. Objeto decorativo artesanal, pieza única.",
    foto: "fotos/vasija-crema.jpg",
    destacado: false,
    agotado: false
  },

];
