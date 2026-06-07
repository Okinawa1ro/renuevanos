/* ==========================================================================
   ⚙️  CONFIGURACIÓN DE LA TIENDA
   --------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitás tocar para administrar tu tienda.
   Cambiá los datos de abajo y guardá. No hace falta saber programar.

   👉 Consejo: hacé una copia de seguridad de este archivo antes de editar.
   ========================================================================== */

const CONFIG = {

  // ── Datos de tu tienda ──────────────────────────────────────────────
  nombre:      "Taller Artesanal",          // Nombre que aparece arriba
  eslogan:     "Cerámica, arte y objetos con alma",  // Frase debajo del nombre
  moneda:      "$",                          // Símbolo de la moneda

  // ── WhatsApp (para recibir los pedidos) ─────────────────────────────
  // Escribí tu número CON código de país y SIN signos, espacios ni el 15.
  // Ejemplo Argentina (Buenos Aires): 5491122334455
  whatsapp:    "5491100000000",

  // ── Pago con tarjeta (Mercado Pago) ─────────────────────────────────
  // Pegá acá tu "Link de pago" de Mercado Pago (opcional).
  // Cómo crearlo: entrá a Mercado Pago → "Cobrar" → "Link de pago".
  // Si lo dejás vacío (""), el botón de tarjeta no aparece.
  mercadoPagoLink: "",

  // ── Transferencia bancaria (opcional) ───────────────────────────────
  // Si no querés ofrecer transferencia, dejá el alias vacío ("").
  transferencia: {
    alias:   "TU.ALIAS.MP",
    cbu:     "",                  // CBU o CVU (opcional)
    titular: "Nombre del Titular"
  },

  // ── Envíos ──────────────────────────────────────────────────────────
  envioTexto:  "Envíos a todo el país. Coordinamos el costo por WhatsApp.",

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
    nombre: "Jarrón de cerámica esmaltada",
    categoria: "ceramica",
    precio: 18500,
    descripcion: "Hecho y pintado a mano. Pieza única, ideal para decoración. Alto 24 cm.",
    foto: "",
    destacado: true,
    agotado: false
  },
  {
    id: 2,
    nombre: "Cuenco decorativo artesanal",
    categoria: "ceramica",
    precio: 7800,
    descripcion: "Cerámica esmaltada en tonos tierra. Perfecto para frutas o como centro de mesa.",
    foto: "",
    destacado: false,
    agotado: false
  },
  {
    id: 3,
    nombre: "Virgen de cerámica pintada a mano",
    categoria: "religioso",
    precio: 14200,
    descripcion: "Figura religiosa modelada y pintada artesanalmente. Alto 20 cm.",
    foto: "",
    destacado: true,
    agotado: false
  },
  {
    id: 4,
    nombre: "Ángel de la guarda en cerámica",
    categoria: "religioso",
    precio: 9600,
    descripcion: "Pieza delicada ideal para regalo de bautismo o comunión.",
    foto: "",
    destacado: false,
    agotado: false
  },
  {
    id: 5,
    nombre: "Mazo de cartas – Santos y Vírgenes",
    categoria: "mazos",
    precio: 11900,
    descripcion: "Mazo temático religioso ilustrado. 52 cartas con imágenes y oraciones. Edición limitada.",
    foto: "",
    destacado: true,
    agotado: false
  },
  {
    id: 6,
    nombre: "Mazo de cartas – Arcángeles",
    categoria: "mazos",
    precio: 11900,
    descripcion: "Cartas ilustradas de los arcángeles, con guía de uso incluida.",
    foto: "",
    destacado: false,
    agotado: false
  },
  {
    id: 7,
    nombre: "Cuadro botánico enmarcado",
    categoria: "cuadros",
    precio: 22000,
    descripcion: "Lámina de impresión botánica con marco de madera natural. 30 x 40 cm.",
    foto: "",
    destacado: false,
    agotado: false
  },
  {
    id: 8,
    nombre: "Cuadro religioso – Sagrado Corazón",
    categoria: "cuadros",
    precio: 19500,
    descripcion: "Reproducción artística enmarcada. Ideal para living o dormitorio.",
    foto: "",
    destacado: false,
    agotado: false
  },
  {
    id: 9,
    nombre: "Tela de impresión botánica – Helechos",
    categoria: "telas",
    precio: 8400,
    descripcion: "Tela 100% algodón con estampa botánica natural. 50 x 70 cm. Para cuadros, almohadones o decoración.",
    foto: "",
    destacado: true,
    agotado: false
  },
  {
    id: 10,
    nombre: "Tela de impresión botánica – Flores secas",
    categoria: "telas",
    precio: 8400,
    descripcion: "Estampado artesanal con flores prensadas. Pieza irrepetible.",
    foto: "",
    destacado: false,
    agotado: true
  },
  {
    id: 11,
    nombre: "Portavelas de cerámica",
    categoria: "otros",
    precio: 5600,
    descripcion: "Set de 2 portavelas artesanales en tonos neutros.",
    foto: "",
    destacado: false,
    agotado: false
  },
  {
    id: 12,
    nombre: "Rosario artesanal",
    categoria: "otros",
    precio: 6900,
    descripcion: "Rosario hecho a mano con cuentas de cerámica.",
    foto: "",
    destacado: false,
    agotado: false
  },

];
