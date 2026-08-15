# 🚀 Guía para publicar la tienda en renuevanos.com.ar

Este archivo es el "instructivo del día del lanzamiento".
Cuando las fotos estén listas, seguimos estos pasos y la tienda sale online.
Todo lo del lado del sitio ya está preparado.

---

## ✅ Lo que YA está listo
- Dominio **renuevanos.com.ar** registrado en nic.ar.
- Tienda completa (precios, WhatsApp, pago, envíos, textos legales).
- Archivo **CNAME** preparado (ya le dice al hosting cuál es el dominio).
- Hosting elegido: **GitHub Pages** (gratis).

## ⏸️ Lo que falta (el día que digas "publicá")
1. Cargar las fotos finales de los productos.
2. Activar GitHub Pages (lo hace Claude / o desde Settings del repo).
3. Cargar los registros DNS en nic.ar (paso de María — abajo está el detalle).
4. Esperar unas horas a que el dominio se "acomode" (propagación, es automático).

---

## 🔗 Datos DNS para cargar en nic.ar

En el panel de **nic.ar** → tu dominio **renuevanos.com.ar** → sección **DNS**,
agregar estos registros (copiar y pegar):

### Registros tipo "A" (para renuevanos.com.ar)
Crear 4 registros A, todos con el mismo nombre (el dominio raíz, a veces se pone "@"):

| Tipo | Nombre | Valor (dirección) |
|------|--------|-------------------|
| A    | @      | 185.199.108.153   |
| A    | @      | 185.199.109.153   |
| A    | @      | 185.199.110.153   |
| A    | @      | 185.199.111.153   |

### Registro tipo "CNAME" (para www.renuevanos.com.ar)
| Tipo  | Nombre | Valor                 |
|-------|--------|-----------------------|
| CNAME | www    | okinawa1ro.github.io. |

> Nota: el usuario de GitHub es **okinawa1ro**, por eso el destino del CNAME
> es `okinawa1ro.github.io`. Si el repositorio o el usuario cambian, este valor
> hay que ajustarlo.

---

## ⏳ Después de cargar los DNS
- Puede tardar de **un par de horas hasta 24/48 hs** en verse (es normal).
- En GitHub → repo → **Settings → Pages**, debería aparecer el dominio
  con un tilde verde de **"DNS check successful"** y la opción
  **"Enforce HTTPS"** activada (candado de seguridad 🔒).

## 🎉 Resultado final
- **renuevanos.com.ar** muestra la tienda, con candado de seguridad.
- Las fotos y precios se pueden cambiar cuando quieras, sin bajar el sitio.
