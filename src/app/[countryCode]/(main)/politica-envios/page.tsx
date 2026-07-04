import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Envíos | OBS Jeans",
  description:
    "Consulta nuestra política de envíos. Envíos a toda la República Mexicana con las mejores tarifas.",
}

export default function PoliticaEnviosPage() {
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
            Política de Envíos
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
              Cobertura de Envíos
            </h2>
            <p>
              Realizamos envíos a toda la República Mexicana. Trabajamos con las
              principales paqueterías del país para garantizar que tu pedido
              llegue de forma segura y en el menor tiempo posible.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Tiempos de Entrega
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong style={{ color: "#1a1c1c" }}>
                  Zona Metropolitana de Guadalajara:
                </strong>{" "}
                1 a 3 días hábiles.
              </li>
              <li>
                <strong style={{ color: "#1a1c1c" }}>
                  Resto de la República Mexicana:
                </strong>{" "}
                3 a 7 días hábiles.
              </li>
              <li>
                <strong style={{ color: "#1a1c1c" }}>Zonas extendidas:</strong>{" "}
                Pueden requerir hasta 10 días hábiles.
              </li>
            </ul>
            <p className="mt-3">
              Los tiempos de entrega comienzan a contar a partir de la
              confirmación del pago de tu pedido.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Costos de Envío
            </h2>
            <p>
              El costo de envío se calcula al momento de realizar tu compra y
              depende del destino y el peso del paquete. En temporadas especiales
              podemos ofrecer envío gratuito en compras que superen un monto
              mínimo — consulta las promociones vigentes en nuestra tienda.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Seguimiento de Pedidos
            </h2>
            <p>
              Una vez que tu pedido sea enviado, recibirás un correo electrónico
              con el número de guía y un enlace para rastrear tu paquete en
              tiempo real. También puedes consultar el estado de tu pedido desde
              tu cuenta en nuestra tienda en línea.
            </p>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              Consideraciones Importantes
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                OBS Jeans no se hace responsable por retrasos ocasionados por la
                paquetería, eventos de fuerza mayor o información de envío
                incorrecta proporcionada por el comprador.
              </li>
              <li>
                Asegúrate de que la dirección de envío sea correcta y esté
                completa al momento de realizar tu pedido.
              </li>
              <li>
                En caso de que el paquete no pueda ser entregado por dirección
                incorrecta, el reenvío tendrá un costo adicional.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="font-serif font-bold text-xl mb-3"
              style={{ color: "#1a1c1c" }}
            >
              ¿Necesitas Ayuda?
            </h2>
            <p>
              Si tienes dudas sobre tu envío, contáctanos por{" "}
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
