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

  // Inyecta (una sola vez) el estilo del pie legal colapsable.
  function injectStyleOnce(){
    if(document.getElementById("pie-legal-style")) return;
    const s=document.createElement("style");
    s.id="pie-legal-style";
    s.textContent = ""
      + ".legal-details{margin:0 auto 12px;max-width:560px;text-align:center;}"
      + ".legal-details>summary{cursor:pointer;font-size:13px;opacity:.7;list-style:none;display:inline-flex;"
      + "align-items:center;gap:6px;padding:6px 14px;border:1px solid currentColor;border-radius:50px;transition:opacity .15s;}"
      + ".legal-details>summary:hover{opacity:.95;}"
      + ".legal-details>summary::-webkit-details-marker{display:none;}"
      + ".legal-details>summary::before{content:'🔒';}"
      + ".legal-details[open]>summary{opacity:.9;margin-bottom:10px;}"
      + ".legal-datos{font-size:13px;line-height:1.75;opacity:.85;text-align:left;display:inline-block;}"
      + ".legal-datos .legal-title{font-weight:700;margin-bottom:4px;opacity:.9;}";
    document.head.appendChild(s);
  }

  function renderPieLegal(el){
    if(!el) return;
    injectStyleOnce();
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

    // Los datos del vendedor van dentro de un <details> colapsado: hay que
    // hacer clic en "Datos del vendedor" para verlos (siguen accesibles,
    // como exige la Ley 24.240, pero no quedan expuestos a la vista).
    el.innerHTML = `
      <details class="legal-details">
        <summary>Datos del vendedor</summary>
        <div class="legal-datos">
          <div class="legal-title">Información fiscal del vendedor</div>
          ${datos}
        </div>
      </details>
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
