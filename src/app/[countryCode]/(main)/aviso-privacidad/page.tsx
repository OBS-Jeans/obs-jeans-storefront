import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | OBS Jeans",
  description:
    "Aviso de privacidad de OBS Jeans. Conoce cómo protegemos y tratamos tus datos personales.",
}

export default function AvisoPrivacidadPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <article className="content-container py-20 md:py-28 max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Legal
          </span>
          <h1
            className="obs-editorial font-serif font-bold text-3xl md:text-4xl leading-tight mb-4"
            style={{ color: "#1a1c1c" }}
          >
            Aviso de Privacidad
          </h1>
          <div
            className="mx-auto w-16 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b80049, transparent)",
            }}
          />
        </header>

        <div
          className="prose-obs space-y-8 text-sm leading-relaxed"
          style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
        >
          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Responsable del Tratamiento
            </h2>
            <p>
              OBS Jeans SA de CV (en adelante, "OBS Jeans"), con domicilio en
              Av. San Rafael 721, Guadalajara, Jalisco, México, es responsable
              del tratamiento de tus datos personales conforme a la Ley Federal
              de Protección de Datos Personales en Posesión de los Particulares
              (LFPDPPP).
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Datos Personales que Recopilamos
            </h2>
            <p className="mb-3">
              Para brindarte nuestros servicios, podemos recopilar los
              siguientes datos personales:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nombre completo</li>
              <li>Dirección de envío y facturación</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información de pago (procesada de forma segura por nuestros proveedores de pago)</li>
              <li>Historial de compras</li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Finalidad del Tratamiento
            </h2>
            <p className="mb-3">Tus datos personales serán utilizados para:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Procesar y dar seguimiento a tus pedidos.</li>
              <li>Gestionar envíos y entregas.</li>
              <li>Atender solicitudes de servicio al cliente.</li>
              <li>Procesar devoluciones y cambios.</li>
              <li>Enviar información sobre promociones y nuevos productos (con tu consentimiento).</li>
              <li>Cumplir con obligaciones legales y fiscales.</li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Transferencia de Datos
            </h2>
            <p>
              OBS Jeans podrá compartir tus datos personales con terceros
              proveedores de servicios (paqueterías, procesadores de pago)
              únicamente para cumplir con las finalidades descritas en este
              aviso. Estos proveedores están obligados a mantener la
              confidencialidad de tus datos.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Derechos ARCO
            </h2>
            <p className="mb-3">
              Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al
              tratamiento de tus datos personales (derechos ARCO). Para
              ejercerlos, contacta a nuestro departamento de datos personales:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong style={{ color: "#1a1c1c" }}>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/523336394298"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline transition-colors duration-200 hover:opacity-70"
                  style={{ color: "#b80049" }}
                >
                  33 3639 4298
                </a>
              </li>
              <li>
                <strong style={{ color: "#1a1c1c" }}>Dirección:</strong> Av.
                San Rafael 721, Guadalajara, Jalisco, México
              </li>
            </ul>
            <p className="mt-3">
              Tu solicitud será atendida en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Uso de Cookies
            </h2>
            <p>
              Nuestro Sitio utiliza cookies y tecnologías similares para mejorar
              tu experiencia de navegación, analizar el tráfico del sitio y
              personalizar el contenido. Puedes configurar tu navegador para
              rechazar cookies, aunque esto podría afectar la funcionalidad del
              Sitio.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Seguridad de los Datos
            </h2>
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y
              físicas para proteger tus datos personales contra acceso no
              autorizado, pérdida, alteración o destrucción. La información de
              pago se procesa a través de proveedores certificados con
              encriptación de nivel bancario.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Modificaciones al Aviso
            </h2>
            <p>
              OBS Jeans se reserva el derecho de modificar este aviso de
              privacidad en cualquier momento. Las modificaciones serán
              publicadas en esta página. Te recomendamos revisarlo
              periódicamente.
            </p>
          </section>

          <p className="text-xs mt-12" style={{ color: "rgba(128,80,98,0.55)" }}>
            Última actualización: Julio 2026
          </p>
        </div>
      </article>
    </div>
  )
}
