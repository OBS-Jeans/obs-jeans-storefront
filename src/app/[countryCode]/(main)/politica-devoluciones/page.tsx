import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Devoluciones | OBS Jeans",
  description:
    "Conoce nuestra política de devoluciones y cambios. Tu satisfacción es nuestra prioridad.",
}

export default function PoliticaDevolucionesPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <article className="content-container py-20 md:py-28 max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <span
            className="obs-label-tag inline-block mb-4"
            style={{ color: "#b80049" }}
          >
            Políticas
          </span>
          <h1
            className="obs-editorial font-serif font-bold text-3xl md:text-4xl leading-tight mb-4"
            style={{ color: "#1a1c1c" }}
          >
            Política de Devoluciones
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
              Garantía de Satisfacción
            </h2>
            <p>
              En OBS Jeans queremos que estés completamente satisfecho con tu
              compra. Si por alguna razón el producto no cumple con tus
              expectativas, puedes solicitar un cambio o devolución dentro de los
              plazos establecidos.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Plazo para Devoluciones
            </h2>
            <p>
              Cuentas con <strong style={{ color: "#1a1c1c" }}>30 días naturales</strong>{" "}
              a partir de la fecha de recepción del producto para solicitar un
              cambio o devolución.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Condiciones para Devoluciones
            </h2>
            <p className="mb-3">
              Para que tu devolución sea aceptada, el producto debe cumplir con
              las siguientes condiciones:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                El producto debe estar sin uso, en su estado original y con
                todas las etiquetas.
              </li>
              <li>Debe incluir el empaque original completo.</li>
              <li>
                Presentar el comprobante de compra o número de pedido.
              </li>
              <li>
                No aplica para prendas que hayan sido alteradas, lavadas o que
                presenten signos de uso.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Proceso de Devolución
            </h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong style={{ color: "#1a1c1c" }}>Solicita tu devolución:</strong>{" "}
                Contacta a nuestro equipo por WhatsApp al{" "}
                <a
                  href="https://wa.me/523336394298"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline transition-colors duration-200 hover:opacity-70"
                  style={{ color: "#b80049" }}
                >
                  33 3639 4298
                </a>{" "}
                indicando tu número de pedido y el motivo de la devolución.
              </li>
              <li>
                <strong style={{ color: "#1a1c1c" }}>
                  Recibe instrucciones:
                </strong>{" "}
                Te enviaremos las indicaciones para el envío del producto de
                regreso.
              </li>
              <li>
                <strong style={{ color: "#1a1c1c" }}>Envía el producto:</strong>{" "}
                Empaca el producto de forma segura y envíalo siguiendo las
                instrucciones recibidas.
              </li>
              <li>
                <strong style={{ color: "#1a1c1c" }}>
                  Recibe tu reembolso o cambio:
                </strong>{" "}
                Una vez recibido y verificado el producto, procesaremos tu
                reembolso o cambio en un plazo de 5 a 10 días hábiles.
              </li>
            </ol>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Cambios de Talla
            </h2>
            <p>
              Si necesitas cambiar la talla de tu producto, con gusto te
              ayudamos. Los cambios de talla están sujetos a disponibilidad y el
              costo de envío del cambio corre por cuenta del comprador, salvo en
              caso de error de nuestra parte.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Productos con Defecto
            </h2>
            <p>
              Si recibiste un producto con defecto de fabricación, cubrimos el
              costo total de la devolución y te enviamos un reemplazo sin cargo
              adicional. Contáctanos dentro de las primeras 48 horas después de
              recibir tu pedido.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              ¿Necesitas Ayuda?
            </h2>
            <p>
              Para cualquier duda sobre devoluciones, contáctanos por{" "}
              <a
                href="https://wa.me/523336394298"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline transition-colors duration-200 hover:opacity-70"
                style={{ color: "#b80049" }}
              >
                WhatsApp
              </a>{" "}
              o llámanos al{" "}
              <a
                href="tel:+523336394298"
                className="font-medium underline transition-colors duration-200 hover:opacity-70"
                style={{ color: "#b80049" }}
              >
                33 3639 4298
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
