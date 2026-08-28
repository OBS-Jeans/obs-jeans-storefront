# Plan de Lanzamiento a Produccion - OBS Jeans Storefront

> Ultima actualizacion: 2026-04-23

## Estado actual

El storefront tiene todo el codigo listo para produccion. Los siguientes PRs ya estan mergeados en `main`:

| PR | Descripcion | Estado |
|----|-------------|--------|
| #1 | Floral Denim Editorial design system | Mergeado |
| #2 | Main page redesign con product photography | Mergeado |
| #3 | Stripe card + OXXO payment integration | Mergeado |
| #4 | Traducciones a espanol, favicon, tipografia | Mergeado |
| #5 | Filtros de productos y badges de stock en PLP | Mergeado |

---

## Pendientes

### 1. Configurar Stripe para produccion

> Referencia completa: `obs-jeans-platform/docs/deployment/stripe-production-checklist.md`

- [ ] **1.1** Obtener Live API Keys de Stripe (modo Production, no Test)
  - Secret key (`sk_live_...`) para el backend
  - Publishable key (`pk_live_...`) para el storefront

- [ ] **1.2** Configurar backend (VPS)
  - Agregar `STRIPE_API_KEY=sk_live_...` al `.env` en `/opt/obs-jeans-platform/.env`
  - Agregar `STRIPE_WEBHOOK_SECRET=whsec_...` (se obtiene en paso 1.4)
  - Reiniciar Medusa: `systemctl restart medusa`

- [ ] **1.3** Configurar storefront (Vercel)
  - Agregar variable de entorno `NEXT_PUBLIC_STRIPE_KEY=pk_live_...`
  - Hacer redeploy

- [ ] **1.4** Crear webhooks en Stripe Dashboard → Developers → Webhooks
  - **Webhook tarjetas**: `https://api.jeansobs.com/hooks/payment/stripe_stripe`
  - **Webhook OXXO**: `https://api.jeansobs.com/hooks/payment/stripe-oxxo_stripe`
  - Eventos para ambos:
    - `payment_intent.amount_capturable_updated`
    - `payment_intent.succeeded`
    - `payment_intent.payment_failed`
    - `payment_intent.partially_funded`
  - Copiar el Signing secret (`whsec_...`) y agregarlo al backend (paso 1.2)

- [ ] **1.5** Habilitar providers en Medusa Admin
  - Ir a Settings → Regions → Mexico
  - Habilitar: Stripe (tarjetas) y Stripe Oxxo (efectivo)

- [ ] **1.6** Habilitar OXXO en Stripe Dashboard → Settings → Payment Methods

> **Nota importante**: Los webhooks son opcionales para tarjetas (el pago se confirma en tiempo real via `confirmCardPayment`), pero son **obligatorios** para OXXO (el cliente paga despues en tienda fisica y Stripe notifica via webhook).

### 2. Deploy del storefront a Vercel

- [ ] **2.1** Verificar que las variables de entorno en Vercel estan actualizadas:
  - `NEXT_PUBLIC_MEDUSA_BACKEND_URL` → URL del backend de produccion
  - `NEXT_PUBLIC_STRIPE_KEY` → Publishable key de produccion
  - `NEXT_PUBLIC_BASE_URL` → URL del storefront de produccion

- [ ] **2.2** Hacer deploy a produccion desde `main`

- [ ] **2.3** Verificar que el storefront carga correctamente

### 3. Verificacion post-deploy

- [ ] **3.1** Verificar pagina principal (hero, productos destacados, badges de stock)
- [ ] **3.2** Verificar que las traducciones a espanol estan activas (carrito, checkout, confirmacion)
- [ ] **3.3** Verificar filtros en paginas de categorias (talla, color)
- [ ] **3.4** Verificar badges de stock: "Agotado", "Ultimas piezas" se muestran correctamente
- [ ] **3.5** Probar flujo completo de compra con tarjeta
  - Hacer un cobro pequeno con tarjeta real y reembolsarlo desde Stripe Dashboard
  - Verificar que la orden aparece en Medusa Admin
- [ ] **3.6** Probar flujo de OXXO
  - Generar voucher OXXO en el checkout
  - Verificar que se muestra el voucher correctamente
  - No es necesario pagar — solo verificar que se genera
- [ ] **3.7** Verificar webhooks en Stripe Dashboard → Developers → Webhooks
  - Endpoints muestran status Enabled
  - Despues de prueba de pago, eventos muestran status 200

### 4. Mejoras pendientes (no bloquean el lanzamiento)

- [ ] **4.1** Tallas agotadas en pagina de detalle de producto: actualmente las tallas sin stock se muestran en gris (PR #4), pero se podria mejorar el UX deshabilitando el click y mostrando tooltip
- [ ] **4.2** Imagenes de productos: varios productos no tienen imagenes cargadas (se ve el icono de imagen rota en las cards)
- [ ] **4.3** "Cart (0)" en el header sigue en ingles — traducir a "Carrito (0)"
- [ ] **4.4** Optimizar filtros: actualmente se cargan hasta 100 productos para filtrar client-side. Para catalogos grandes considerar filtrado server-side

---

## Orden de ejecucion recomendado

1. Cargar imagenes de productos en Medusa Admin (4.2)
2. Configurar Stripe produccion (1.1 → 1.6)
3. Deploy a Vercel (2.1 → 2.3)
4. Verificacion completa (3.1 → 3.7)
5. Mejoras iterativas post-lanzamiento (4.x)
