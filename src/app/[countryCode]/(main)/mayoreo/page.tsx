import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mayoreo | OBS Jeans",
  description:
    "Compra jeans al mayoreo directo de fábrica. Precios especiales para distribuidores, tiendas y negocios.",
}

export default function MayoreoPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0c0c14" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184,0,73,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="content-container relative z-10 py-24 md:py-36 text-center">
          <span
            className="obs-label-tag inline-block mb-6"
            style={{ color: "#e2165f" }}
          >
            Mayoreo
          </span>
          <h1
            className="obs-editorial font-serif font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Directo de{" "}
            <span style={{ color: "#e2165f" }}>Fábrica</span>
          </h1>
          <div
            className="mx-auto w-16 h-[2px] mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />
          <p
            className="obs-editorial font-serif italic font-light text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Precios especiales para distribuidores, tiendas y negocios.
            Mezclilla de calidad con los mejores márgenes del mercado.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="content-container py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Ventajas del Mayoreo
          </span>
          <h2
            className="obs-editorial font-serif font-bold text-3xl md:text-4xl leading-tight mb-10"
            style={{ color: "#1a1c1c" }}
          >
            ¿Por Qué Elegir OBS Jeans?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Precios de Fábrica",
                description:
                  "Sin intermediarios. Comprando directo a nosotros obtienes los mejores precios y márgenes de ganancia para tu negocio.",
              },
              {
                title: "Amplio Catálogo",
                description:
                  "Más de 156 modelos en nuestras líneas Classic y Trendy, para dama y caballero, en tallas del 1 al 25.",
              },
              {
                title: "Pedidos Flexibles",
                description:
                  "Armamos pedidos según las necesidades de tu negocio. Combinaciones de tallas, modelos y estilos sin restricciones.",
              },
              {
                title: "Calidad Garantizada",
                description:
                  "Mezclilla de primera calidad con acabados profesionales. Más de 15 años de experiencia respaldan cada prenda.",
              },
              {
                title: "Envíos a Todo México",
                description:
                  "Enviamos a toda la República Mexicana con las principales paqueterías. Cotización de envío incluida.",
              },
              {
                title: "Atención Personalizada",
                description:
                  "Un asesor dedicado te guía en la selección de modelos, tallas y cantidades ideales para tu mercado.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(228,189,194,0.15)",
                }}
              >
                <h3
                  className="font-serif font-bold text-lg mb-3"
                  style={{ color: "#1a1c1c" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#805062",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="content-container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="obs-label-tag inline-block mb-4"
              style={{ color: "#b80049" }}
            >
              Proceso
            </span>
            <h2
              className="obs-editorial font-serif font-bold text-3xl md:text-4xl"
              style={{ color: "#1a1c1c" }}
            >
              ¿Cómo Funciona?
            </h2>
          </div>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Contáctanos",
                description:
                  "Escríbenos por WhatsApp o llámanos para conocer tus necesidades y el tipo de negocio que manejas.",
              },
              {
                step: "02",
                title: "Selecciona tu Pedido",
                description:
                  "Te enviamos nuestro catálogo actualizado con precios de mayoreo. Elige modelos, tallas y cantidades.",
              },
              {
                step: "03",
                title: "Cotización y Pago",
                description:
                  "Recibe tu cotización personalizada con costo de envío incluido. Aceptamos transferencia y depósito bancario.",
              },
              {
                step: "04",
                title: "Recibe tu Mercancía",
                description:
                  "Preparamos y enviamos tu pedido. Recibes tu mercancía lista para vender con toda la documentación fiscal.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span
                  className="obs-editorial font-serif font-bold text-3xl flex-shrink-0 w-14 text-right"
                  style={{ color: "#b80049" }}
                >
                  {item.step}
                </span>
                <div
                  className="flex-1 pb-10"
                  style={{
                    borderBottom: "1px solid rgba(228,189,194,0.2)",
                  }}
                >
                  <h3
                    className="font-serif font-bold text-xl mb-2"
                    style={{ color: "#1a1c1c" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#805062",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-container py-20 md:py-28 text-center">
        <h2
          className="obs-editorial font-serif font-bold text-3xl md:text-4xl mb-4"
          style={{ color: "#1a1c1c" }}
        >
          ¿Listo para Surtir tu Negocio?
        </h2>
        <p
          className="text-base mb-10 max-w-lg mx-auto"
          style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
        >
          Contáctanos hoy y recibe una cotización personalizada para tu primer
          pedido de mayoreo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/523336394298?text=Hola%2C%20me%20interesa%20información%20sobre%20mayoreo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-white text-xs uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              boxShadow: "0 12px 32px rgba(37,211,102,0.25)",
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Mayoreo
          </a>
          <a
            href="tel:+523336394298"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 hover:opacity-80"
            style={{
              color: "#b80049",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              border: "1px solid rgba(184,0,73,0.3)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Llamar: 33 3639 4298
          </a>
        </div>
      </section>
    </div>
  )
}
