/* ==========================================================================
   Pie legal compartido + relleno de datos del vendedor.
   Lee los datos desde CONFIG (productos.js). Incluir DESPUÉS de productos.js.
   - Rellena cualquier elemento con  data-legal="cuit" | "domicilio" | ...
   - Si existe un contenedor con id="pie-legal", arma el pie con los datos
     del vendedor y los enlaces legales.
   ========================================================================== */
(function(){
  function L(){ return (typeof CONFIG!=="undefined" && CONFIG.legal) ? CONFIG.legal : {}; }
  function cfg(k){ return (typeof CONFIG!=="undefined" && CONFIG[k]!=null) ? CONFIG[k] : ""; }

  // Devuelve el valor legal, o un texto "a completar" si falta.
  function legalValue(key, plain){
    const l=L();
    const map={
      titular:      l.titular || cfg("nombre") || "",
      cuit:         l.cuit || "",
      domicilio:    l.domicilio || "",
      localidad:    l.localidad || "Ciudad Autónoma de Buenos Aires",
      email:        l.email || "",
      plazoEntrega: l.plazoEntrega || "",
      garantiaMeses:(l.garantiaMeses!=null ? l.garantiaMeses : 6),
      nombre:       cfg("nombre"),
      whatsapp:     cfg("whatsapp"),
    };
    let v = map[key];
    if(v==="" || v==null){ return plain ? "" : "(a completar)"; }
    return v;
  }
  window.legalValue = legalValue;

  // Completa <span data-legal="cuit"></span>, etc.
  function fillLegal(root){
    (root||document).querySelectorAll("[data-legal]").forEach(function(el){
      el.textContent = legalValue(el.getAttribute("data-legal"));
    });
  }
  window.fillLegal = fillLegal;

  function esc(s){ return String(s).replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c];}); }

  function pendOr(val){ return val ? esc(val) : '<span class="pend">a completar</span>'; }

  function renderPieLegal(el){
    if(!el) return;
    const l=L();
    const wa = cfg("whatsapp");
    const waLink = wa ? `https://wa.me/${encodeURIComponent(wa)}` : "";
    const email = l.email || "";
    const datos = [
      `Titular: <b>${pendOr(l.titular || cfg("nombre"))}</b>`,
      `CUIT: ${pendOr(l.cuit)}`,
      `Domicilio: ${pendOr([l.domicilio, l.localidad].filter(Boolean).join(", "))}`,
      email ? `Email: <a href="mailto:${esc(email)}">${esc(email)}</a>` : `Email: <span class="pend">a completar</span>`,
      wa ? `WhatsApp: <a href="${waLink}" target="_blank" rel="noopener">+${esc(wa)}</a>` : "",
    ].filter(Boolean).join("<br>");

    el.innerHTML = `
      <div class="legal-datos">
        <div class="legal-title">Datos del vendedor</div>
        ${datos}
      </div>
      <nav class="legal-links">
        <a href="terminos-y-condiciones.html">Términos y Condiciones</a>
        <a href="politica-de-privacidad.html">Política de Privacidad</a>
        <a href="boton-de-arrepentimiento.html">Botón de Arrepentimiento</a>
      </nav>
      <div class="legal-iva">
        Todos los precios publicados son finales, en pesos argentinos.<br>
        Compra protegida por la Ley 24.240 de Defensa del Consumidor.
      </div>`;
  }
  window.renderPieLegal = renderPieLegal;

  function init(){
    fillLegal(document);
    var el = document.getElementById("pie-legal");
    if(el) renderPieLegal(el);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
