import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | OBS Jeans",
  description:
    "Contáctanos. Visítanos en nuestra fábrica en Guadalajara, Jalisco o comunícate por WhatsApp, teléfono o correo.",
}

export default function ContactoPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      {/* Hero */}
      <section className="content-container py-20 md:py-28 text-center">
        <span
          className="obs-label-tag inline-block mb-4"
          style={{ color: "#b80049" }}
        >
          Contacto
        </span>
        <h1
          className="obs-editorial font-serif font-bold text-4xl md:text-5xl leading-tight mb-4"
          style={{ color: "#1a1c1c" }}
        >
          Estamos Para Ayudarte
        </h1>
        <div
          className="mx-auto w-16 h-[2px] mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, #b80049, transparent)",
          }}
        />
        <p
          className="text-base max-w-xl mx-auto"
          style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
        >
          ¿Tienes alguna pregunta sobre nuestros productos, pedidos o mayoreo?
          Contáctanos por el medio que prefieras.
        </p>
      </section>

      {/* Contact Info Grid */}
      <section className="content-container pb-20 md:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/523336394298"
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(228,189,194,0.15)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{
                background:
                  "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              }}
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3
              className="obs-editorial font-serif font-bold text-xl mb-2"
              style={{ color: "#1a1c1c" }}
            >
              WhatsApp
            </h3>
            <p
              className="text-sm mb-3"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
            >
              La forma más rápida de comunicarte con nosotros.
            </p>
            <span
              className="text-sm font-medium group-hover:underline"
              style={{ color: "#b80049", fontFamily: "Inter, sans-serif" }}
            >
              33 3639 4298
            </span>
          </a>

          {/* Teléfono */}
          <a
            href="tel:+523336394298"
            className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(228,189,194,0.15)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(184,0,73,0.1)" }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b80049"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <h3
              className="obs-editorial font-serif font-bold text-xl mb-2"
              style={{ color: "#1a1c1c" }}
            >
              Teléfono
            </h3>
            <p
              className="text-sm mb-3"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
            >
              Llámanos en horario de atención.
            </p>
            <span
              className="text-sm font-medium group-hover:underline"
              style={{ color: "#b80049", fontFamily: "Inter, sans-serif" }}
            >
              33 3639 4298
            </span>
          </a>

          {/* Ubicación */}
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(228,189,194,0.15)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(184,0,73,0.1)" }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b80049"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <h3
              className="obs-editorial font-serif font-bold text-xl mb-2"
              style={{ color: "#1a1c1c" }}
            >
              Visítanos
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
            >
              Av. San Rafael 721
              <br />
              Guadalajara, Jalisco, México
            </p>
          </div>
        </div>

        {/* Hours */}
        <div
          className="mt-12 p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "#f3f3f3",
            border: "1px solid rgba(228,189,194,0.15)",
          }}
        >
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Horario de Atención
          </span>
          <div
            className="flex flex-col sm:flex-row justify-center gap-8 text-sm"
            style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
          >
            <div>
              <p className="font-medium mb-1" style={{ color: "#1a1c1c" }}>
                Lunes a Viernes
              </p>
              <p>10:00 – 18:00</p>
            </div>
            <div
              className="hidden sm:block w-px"
              style={{ backgroundColor: "rgba(228,189,194,0.3)" }}
            />
            <div>
              <p className="font-medium mb-1" style={{ color: "#1a1c1c" }}>
                Sábado
              </p>
              <p>9:30 – 15:00</p>
            </div>
            <div
              className="hidden sm:block w-px"
              style={{ backgroundColor: "rgba(228,189,194,0.3)" }}
            />
            <div>
              <p className="font-medium mb-1" style={{ color: "#1a1c1c" }}>
                Domingo
              </p>
              <p>Cerrado</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
