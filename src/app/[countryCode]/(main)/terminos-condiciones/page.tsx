import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | OBS Jeans",
  description:
    "Términos y condiciones de uso de la tienda en línea de OBS Jeans.",
}

export default function TerminosCondicionesPage() {
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
            Términos y Condiciones
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
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder y utilizar el sitio web de OBS Jeans (en adelante, "el
              Sitio"), aceptas estos términos y condiciones en su totalidad. Si
              no estás de acuerdo con alguna parte de estos términos, te pedimos
              que no utilices nuestro Sitio.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              2. Información de la Empresa
            </h2>
            <p>
              OBS Jeans SA de CV, con domicilio en Av. San Rafael 721,
              Guadalajara, Jalisco, México. Para contacto: teléfono 33 3639 4298.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              3. Uso del Sitio
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                El contenido del Sitio es únicamente para fines informativos y
                de compra de productos.
              </li>
              <li>
                Te comprometes a utilizar el Sitio de manera lícita y a no
                realizar actividades que puedan dañar, deshabilitar o
                sobrecargar el mismo.
              </li>
              <li>
                Queda prohibida la reproducción total o parcial del contenido
                del Sitio sin autorización previa por escrito de OBS Jeans.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              4. Productos y Precios
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Los productos mostrados en el Sitio están sujetos a
                disponibilidad.
              </li>
              <li>
                Los precios están expresados en Pesos Mexicanos (MXN) e incluyen
                IVA, salvo que se indique lo contrario.
              </li>
              <li>
                OBS Jeans se reserva el derecho de modificar precios sin previo
                aviso. Los cambios de precio no afectarán pedidos ya confirmados.
              </li>
              <li>
                Las imágenes de los productos son de referencia. Pueden existir
                variaciones menores de color debido a la configuración de cada
                pantalla.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              5. Proceso de Compra
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Al realizar un pedido, estás haciendo una oferta de compra
                sujeta a confirmación por parte de OBS Jeans.
              </li>
              <li>
                Nos reservamos el derecho de rechazar cualquier pedido por
                motivos de disponibilidad, errores en el precio u otras causas
                justificadas.
              </li>
              <li>
                Recibirás una confirmación de pedido por correo electrónico una
                vez que el pago haya sido procesado exitosamente.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              6. Métodos de Pago
            </h2>
            <p>
              Aceptamos los métodos de pago disponibles en nuestra plataforma de
              pago segura. Toda la información de pago se maneja de forma segura
              y encriptada a través de nuestros proveedores de pago
              certificados.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              7. Envíos y Entregas
            </h2>
            <p>
              Las condiciones de envío y entrega están detalladas en nuestra{" "}
              <a
                href="/politica-envios"
                className="font-medium underline transition-colors duration-200 hover:opacity-70"
                style={{ color: "#b80049" }}
              >
                Política de Envíos
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              8. Devoluciones y Cambios
            </h2>
            <p>
              Las condiciones para devoluciones y cambios están detalladas en
              nuestra{" "}
              <a
                href="/politica-devoluciones"
                className="font-medium underline transition-colors duration-200 hover:opacity-70"
                style={{ color: "#b80049" }}
              >
                Política de Devoluciones
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              9. Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos del Sitio — incluyendo textos, imágenes,
              logotipos, diseños y marcas — son propiedad de OBS Jeans SA de CV
              y están protegidos por las leyes de propiedad intelectual
              aplicables en México.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              10. Limitación de Responsabilidad
            </h2>
            <p>
              OBS Jeans no será responsable por daños indirectos, incidentales o
              consecuentes derivados del uso del Sitio o de la imposibilidad de
              usarlo. Nuestra responsabilidad máxima se limita al valor del
              producto adquirido.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              11. Modificaciones
            </h2>
            <p>
              OBS Jeans se reserva el derecho de modificar estos términos y
              condiciones en cualquier momento. Las modificaciones entrarán en
              vigor a partir de su publicación en el Sitio. Te recomendamos
              revisar periódicamente esta sección.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              12. Legislación Aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes de los Estados Unidos
              Mexicanos. Cualquier controversia será sometida a la jurisdicción
              de los tribunales competentes de Guadalajara, Jalisco.
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
