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
    nombre: "Nido de Kerith",
    categoria: "ceramica",
    precio: 170000,
    descripcion: "Cuenco escultural de bordes rasgados y ondulados, como la cáscara de un fruto ancestral. Interior blanco satinado con fino craquelé; por fuera, chorreaduras de negro humo caen desde la boca carbonizada. Cerámica raku. Redonda, 30 cm de diámetro × 9 cm.",
    foto: "fotos/raku-nido-de-kerith.jpeg",
    destacado: true,
    unica: true,
    vendida: false
  },
  {
    id: 2,
    nombre: "Batea Espiga",
    categoria: "ceramica",
    precio: 270000,
    descripcion: "Batea alargada en blanco cremoso y craquelé fino. En su interior, trazos de negro humo como pinceladas de sumi-e o espigas de carbón. Bordes orgánicos, huella pura del modelado a mano. Cerámica raku. Ovalada, 54 × 28 × 9 cm.",
    foto: "fotos/raku-batea-espiga.jpeg",
    destacado: true,
    unica: true,
    vendida: false
  },
  {
    id: 3,
    nombre: "Sendero de Zin",
    categoria: "ceramica",
    precio: 110000,
    descripcion: "Batea baja y primitiva, casi a ras de la mesa. Blanco cremoso con craquelé y motas de ceniza; en el centro, trazos horizontales de negro ahumado como estratos de roca o tierra seca. Cerámica raku. Ovalada, 35 × 20 × 9 cm.",
    foto: "fotos/raku-sendero-de-zin.jpeg",
    destacado: true,
    unica: true,
    vendida: false
  },
  {
    id: 4,
    nombre: "Camino de Canaán",
    categoria: "ceramica",
    precio: null,
    descripcion: "Bandeja monumental de 56 cm: un lienzo cerámico donde el fuego escribe. Fondo marfil con craquelé geométrico en los bordes y potentes trazos verticales de negro carbón recorriendo el centro. Cerámica raku. Ovalada, 56 × 30 × 9 cm.",
    foto: "fotos/raku-camino-de-canaan.png",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 5,
    nombre: "Zarza de Horeb",
    categoria: "ceramica",
    precio: null,
    descripcion: "Vasija globular de boca rasgada. Sobre una base clara y craquelada trepan ramificaciones de negro carbón, como raíces o fuego petrificado. Aire ancestral y sagrado. Cerámica raku.",
    foto: "fotos/raku-zarza-de-horeb.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 6,
    nombre: "Dúo Luz y Ceniza",
    categoria: "ceramica",
    precio: null,
    descripcion: "Conjunto de dos piezas que muestran los dos extremos del fuego: el Cuenco de Luz, blanco con craquelé y chorreos de humo; y la Vasija de Ceniza, globular y mate, ahumada en negro profundo. Luz y sombra en diálogo. Cerámica raku.",
    foto: "fotos/raku-duo-luz-y-ceniza.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 7,
    nombre: "Granada de Rimón",
    categoria: "ceramica",
    precio: null,
    descripcion: "Vasija globular dividida en dos mundos: una franja de negro mate que asciende y un manto blanco de craquelé denso. Su boca dentada y rasgada evoca la corona de una granada silvestre. Cerámica raku.",
    foto: "fotos/raku-granada-de-rimon.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 8,
    nombre: "Tiendas de Cedar",
    categoria: "ceramica",
    precio: null,
    descripcion: "Vasija de fuerza tribal: sobre fondo marfil craquelado se imponen anchas franjas verticales de negro humo que trepan hasta una boca carbonizada. Gráfica, primitiva y elegante. Cerámica raku.",
    foto: "fotos/raku-tiendas-de-cedar.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 9,
    nombre: "Estrella de Jacob",
    categoria: "ceramica",
    precio: null,
    descripcion: "Vasija robusta y achatada: el esmalte claro dibuja un destello o estrella en el frente, rodeado de masas de negro humo aterciopelado. Boca corta, asimétrica, sumergida en carbón. Cerámica raku.",
    foto: "fotos/raku-estrella-de-jacob.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 10,
    nombre: "Noche de Horeb",
    categoria: "ceramica",
    precio: null,
    descripcion: "Cuenco de negro absoluto: el centro vitrificado brilla como azabache líquido; los bordes se disuelven en una pátina mate de humo y carbón. Monocromía pura con reflejos minerales. Cerámica raku.",
    foto: "fotos/raku-noche-de-horeb.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 11,
    nombre: "Tablas de Sinaí",
    categoria: "ceramica",
    precio: null,
    descripcion: "Plato ceremonial plano: un lienzo marfil de craquelé denso surcado por trazos de negro humo, como caligrafía de tinta china sobre piedra. Bordes ondulados e irregulares. Cerámica raku.",
    foto: "fotos/raku-tablas-de-sinai.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 12,
    nombre: "Cisterna de Hebrón",
    categoria: "ceramica",
    precio: null,
    descripcion: "Vasija cilíndrica de paredes gruesas en turquesa menta / verde celadón, con moteado de ceniza negra y craquelé fino. Parece una reliquia submarina o una piedra desgastada por el tiempo. Cerámica raku.",
    foto: "fotos/raku-cisterna-de-hebron.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 13,
    nombre: "Caldera de Moab",
    categoria: "ceramica",
    precio: null,
    descripcion: "Vaso escultural con degradado de óxidos: de la base ahumada sube hacia verdes de pátina metálica e irisaciones que cambian con la luz. Borde rasgado y sin pulir, de carácter geológico. Cerámica raku.",
    foto: "fotos/raku-caldera-de-moab.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 14,
    nombre: "Cáliz de Salem",
    categoria: "ceramica",
    precio: null,
    descripcion: "Recipiente en blanco marfil recorrido por finas grietas negras y motas de ceniza, como un mapa antiguo o piedra caliza. Boca asimétrica de espíritu sereno y wabi-sabi. Cerámica raku.",
    foto: "fotos/raku-caliz-de-salem.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 15,
    nombre: "Columnas de Salem",
    categoria: "ceramica",
    precio: null,
    descripcion: "Par de vasos complementarios: uno de tierra y óxido (verdes metálicos a carbón), otro de luz y pergamino (marfil con craquelé negro). Dos caras del fuego en una sola armonía. Cerámica raku.",
    foto: "fotos/raku-columnas-de-salem.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 16,
    nombre: "Oasis de Meribá",
    categoria: "ceramica",
    precio: null,
    descripcion: "Fuente cóncava en azul turquesa egipcio, con craquelé deslumbrante que converge al centro, donde emergen texturas basálticas gris piedra. Un oasis atrapado en la materia. Cerámica raku.",
    foto: "fotos/raku-oasis-de-meriba.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 17,
    nombre: "Vasijas de Edén",
    categoria: "ceramica",
    precio: null,
    descripcion: "Par de cuencos globulares en arcilla clara, blanco hueso con brillo vítreo y bordes desbastados como cáscaras naturales. Serenos, luminosos, puramente orgánicos. Modelado a mano.",
    foto: "fotos/raku-vasijas-de-eden.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },
  {
    id: 18,
    nombre: "Manantial de En-Gadi",
    categoria: "ceramica",
    precio: null,
    descripcion: "Fuente de contraste extremo: paredes rugosas y áridas en tono piedra rodean un estanque central esmaltado en turquesa cristalino. Agua brotando en la roca del desierto. Cerámica modelada a mano.",
    foto: "fotos/raku-manantial-de-en-gadi.jpeg",
    destacado: false,
    unica: true,
    vendida: false
  },

];
