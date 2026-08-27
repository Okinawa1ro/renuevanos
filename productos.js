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
  mercadoPagoLink: "https://link.mercadopago.com.ar/renuevanos",

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
  envios: [
    { nombre: "Retiro en persona",                  costo: 0 },
    { nombre: "Tigre y alrededores",                costo: 5000 },
    { nombre: "Capital Federal",                    costo: 6000 },
    { nombre: "San Isidro",                         costo: 6000 },
    { nombre: "Pilar",                              costo: 7000 },
    { nombre: "Otras zonas (cotizar por WhatsApp)", costo: null },
  ],

  // ── Redes / contacto (opcional, dejá "" para ocultar) ───────────────
  instagram:   "",   // Ej: "https://instagram.com/tu_taller"

  // ── Datos legales del vendedor ──────────────────────────────────────
  // Obligatorios para vender online (Ley 24.240 de Defensa del Consumidor
  // y Ley 25.326 de Datos Personales). Aparecen en el pie del sitio y en
  // las páginas legales. ⚠️ Completá los que dicen "" — son obligatorios.
  legal: {
    titular:      "María Regina Petazzi",   // Nombre y apellido de la titular
    cuit:         "27-18284811-0",   // CUIT / CUIL de la titular
    domicilio:    "Corredor Bancalari 3901, Troncos del Talar",   // domicilio legal
    localidad:    "Provincia de Buenos Aires",
    email:        "info.renuevanos@gmail.com",   // email de contacto
    // Plazo de entrega estimado (se muestra en cada producto y en T&C).
    plazoEntrega: "Entre 3 y 10 días hábiles según la zona de envío.",
    // Garantía legal mínima (Art. 11, Ley 24.240).
    garantiaMeses: 6,
  },
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
     precio      → solo el número, sin símbolos (ej: 12500).
                   👉 Poné  null  y se muestra "Consultar" (el cliente
                      pregunta el precio por WhatsApp). Útil hasta que lo definas.
     descripcion → texto que describe el producto
     foto        → dirección de la foto. Podés:
                     • dejarla vacía ("") y se muestra un dibujo lindo, o
                     • poner el nombre de una imagen tuya (ej: "fotos/jarron.jpg"), o
                     • pegar un link de una imagen de internet.
     destacado   → true para que aparezca con una etiqueta "Destacado"
     unica       → true si es una pieza única (1 de 1). Muestra el sello
                   "Pieza única" y no deja comprar más de 1.
     vendida     → true cuando ya se vendió (se muestra como "Vendida").
   ========================================================================== */

const PRODUCTOS = [

  {
    id: 1,
    nombre: "Ánfora",
    categoria: "ceramica",
    precio: 80000,
    descripcion: "Ánfora de cuerpo amplio en turquesa menta, con moteado de ceniza y fino craquelé, como una reliquia rescatada del agua y el tiempo. Cerámica raku. Medidas: 18 alto × 13 ancho cm.",
    foto: "",
    unica: true,
    disponible: false,
    vendida: false
  },
  {
    id: 2,
    nombre: "Batea Espiga",
    categoria: "ceramica",
    precio: 230000,
    descripcion: "Batea alargada y grande en blanco cremoso y craquelé fino, con trazos de negro humo como espigas de carbón. Bordes orgánicos, hecha a mano. Cerámica raku. Medidas: 54 × 28 × 9 cm.",
    foto: "fotos/prod-batea-espiga.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 3,
    nombre: "Batea Palma",
    categoria: "ceramica",
    precio: 150000,
    descripcion: "Batea alargada mediana de raku transparente, con la textura y las grietas naturales del fuego. Serena y luminosa. Medidas: 44 × 21 × 9 cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 4,
    nombre: "Batea Canaán",
    categoria: "ceramica",
    precio: 320000,
    descripcion: "Batea monumental de gran formato en raku transparente: un lienzo cerámico de craquelé y trazos de humo, de presencia imponente. Medidas: 56 × 30 × 9 cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 5,
    nombre: "Batea Wadi",
    categoria: "ceramica",
    precio: 120000,
    descripcion: "Batea alargada chica de raku transparente, de bordes orgánicos y craquelé delicado. Ideal como pieza de centro. Medidas: 35 × 20 × 9 cm.",
    foto: "fotos/prod-batea-wadi.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 6,
    nombre: "Batea Terra",
    categoria: "ceramica",
    precio: 140000,
    descripcion: "Batea ovalada y profunda en tono salmón claro, de superficie cálida y modelado a mano. Cerámica artesanal.",
    foto: "fotos/prod-batea-terra.jpg",
    unica: true,
    disponible: false,
    vendida: false
  },
  {
    id: 7,
    nombre: "Fuente En Gadi",
    categoria: "ceramica",
    precio: 180000,
    descripcion: "Fuente redonda de contraste: paredes rugosas en manganeso y un centro esmaltado en vidrio turquesa, como agua brotando en la roca del desierto. Medidas: 40 diámetro × 10 alto cm.",
    foto: "fotos/prod-fuente-en-gadi.jpg",
    unica: true,
    disponible: false,
    vendida: false
  },
  {
    id: 8,
    nombre: "Fuente Hermón",
    categoria: "ceramica",
    precio: 70000,
    descripcion: "Fuente redonda chica de raku transparente, de craquelé fino y bordes irregulares. Delicada y luminosa. Medidas: 22 × 5 cm.",
    foto: "fotos/prod-fuente-hermon.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 9,
    nombre: "Fuente Kerith",
    categoria: "ceramica",
    precio: 170000,
    descripcion: "Cuenco redondo de bordes rasgados, interior blanco satinado con craquelé y chorreaduras de negro humo. Cerámica raku. Medidas: 30 diámetro × 9 alto cm.",
    foto: "fotos/prod-fuente-kerith.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 10,
    nombre: "Fuente Onix",
    categoria: "ceramica",
    precio: 70000,
    descripcion: "Fuente redonda chica en negro y humo, de brillo profundo como azabache y bordes ahumados. Monocromía elegante. Medidas: 22 × 6 cm.",
    foto: "fotos/prod-fuente-onix.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 11,
    nombre: "Fuente Meribá",
    categoria: "ceramica",
    precio: 150000,
    descripcion: "Fuente redonda en turquesa vibrante con craquelé deslumbrante que converge al centro. Un oasis atrapado en la materia. Medidas: 34 × 7 cm.",
    foto: "fotos/prod-fuente-meriba.jpg",
    unica: true,
    disponible: false,
    vendida: false
  },
  {
    id: 12,
    nombre: "Recipiente Moab",
    categoria: "ceramica",
    precio: 70000,
    descripcion: "Vaso escultural tipo florero en verde óxido, con degradado de humo e irisaciones metálicas. Carácter mineral. Medidas: 24 alto × 13 diámetro cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 13,
    nombre: "Recipiente Salem",
    categoria: "ceramica",
    precio: 70000,
    descripcion: "Vaso tipo florero en raku transparente, blanco marfil recorrido por finas grietas negras, como un mapa antiguo. Medidas: 24 alto × 13 diámetro cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 14,
    nombre: "Vasija Horeb",
    categoria: "ceramica",
    precio: 90000,
    descripcion: "Vasija mediana de raku transparente, con ramificaciones de negro carbón sobre base clara craquelada. Aire ancestral. Medidas: 18 base × 15 alto cm.",
    foto: "fotos/prod-vasija-horeb.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 15,
    nombre: "Vasija Cedar",
    categoria: "ceramica",
    precio: 90000,
    descripcion: "Vasija mediana de fuerza tribal: anchas franjas de negro humo sobre fondo marfil craquelado. Medidas: 23 base × 17 alto cm.",
    foto: "fotos/prod-vasija-cedar.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 16,
    nombre: "Vasija Granada",
    categoria: "ceramica",
    precio: 80000,
    descripcion: "Vasija mediana de raku transparente, cuerpo globular dividido entre negro mate y manto blanco craquelado, con boca dentada como una granada. Medidas: 20 base × 13 alto cm.",
    foto: "fotos/prod-vasija-granada.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 17,
    nombre: "Vasija Edén grande",
    categoria: "ceramica",
    precio: 50000,
    descripcion: "Vasija grande en arcilla clara con esmalte transparente, forma globular y bordes desbastados. Serena y orgánica. Medidas: 24 base × 15 alto cm.",
    foto: "fotos/prod-vasija-eden-grande.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 18,
    nombre: "Vasija Edén mediana",
    categoria: "ceramica",
    precio: 30000,
    descripcion: "Vasija mediana en arcilla clara y esmalte transparente, de forma orgánica y luminosa. Medidas: 20 × 17 cm.",
    foto: "fotos/prod-vasija-eden-mediana.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 19,
    nombre: "Vasija Humo mediana",
    categoria: "ceramica",
    precio: 35000,
    descripcion: "Vasija mediana en negro humo profundo, mate y aterciopelada, de silueta globular. Medidas: 17 base × 14 alto cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 20,
    nombre: "Vasija Humo chica",
    categoria: "ceramica",
    precio: 25000,
    descripcion: "Vasija chica en negro humo, mate y ahumada, ideal como pieza pequeña de acento. Medidas: 10 base × 10 alto cm.",
    foto: "fotos/prod-vasija-humo-chica.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 21,
    nombre: "Vasija Edóm",
    categoria: "ceramica",
    precio: 75000,
    descripcion: "Vasija mediana de raku transparente con tres trazos de humo verticales sobre fondo claro craquelado. Medidas: 18 base × 13 alto cm.",
    foto: "fotos/prod-vasija-edom.jpg",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 22,
    nombre: "Sagrado Corazón I",
    categoria: "religioso",
    precio: 70000,
    descripcion: "Sagrado Corazón en raku transparente, modelado a mano con craquelé y matices de humo. Pieza devocional única. Medidas: 14 × 9 cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 23,
    nombre: "Sagrado Corazón II",
    categoria: "religioso",
    precio: 70000,
    descripcion: "Sagrado Corazón en raku transparente, modelado a mano con craquelé y matices de humo. Pieza devocional única. Medidas: 14 × 9 cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 24,
    nombre: "Inmaculado Corazón I",
    categoria: "religioso",
    precio: 70000,
    descripcion: "Inmaculado Corazón en raku transparente, hecho a mano con craquelé y humo. Pieza devocional única. Medidas: 14 × 9 cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 25,
    nombre: "Inmaculado Corazón II",
    categoria: "religioso",
    precio: 70000,
    descripcion: "Inmaculado Corazón en raku transparente, hecho a mano con craquelé y humo. Pieza devocional única. Medidas: 14 × 9 cm.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 26,
    nombre: "San Francisco",
    categoria: "religioso",
    precio: 150000,
    descripcion: "Imagen de San Francisco en raku transparente, modelada a mano, de textura serena y espíritu contemplativo. Medidas: 29 cm de alto.",
    foto: "fotos/prod-san-francisco.jpg",
    unica: true,
    disponible: false,
    vendida: false
  },
  {
    id: 27,
    nombre: "Virgen de Fátima",
    categoria: "religioso",
    precio: 140000,
    descripcion: "Imagen de la Virgen de Fátima en raku transparente, modelada a mano. Pieza devocional. Medidas: 26 cm de alto.",
    foto: "",
    unica: true,
    disponible: true,
    vendida: false
  },
  {
    id: 28,
    nombre: "Mará, Santuario Vivo",
    categoria: "religioso",
    precio: 150000,
    descripcion: "Imagen «Mará, Santuario Vivo» en raku transparente, modelada a mano, de presencia serena y sagrada. Medidas: 30 cm de alto.",
    foto: "fotos/prod-mara-santuario-vivo.jpg",
    unica: true,
    disponible: true,
    vendida: false
  }

];
