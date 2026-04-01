import { StaggerContainer, StaggerItem } from "@modules/common/components/stagger-children"

const trustItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-3.375m0 0V10.5a1.125 1.125 0 0 0-1.125-1.125h-1.5a1.125 1.125 0 0 0-1.125 1.125v5.625m4.5-4.5L16.5 6.375a1.125 1.125 0 0 0-1.125-1.125H13.5m-12 4.5h1.5m0 0h8.25M3 14.25h8.25" />
      </svg>
    ),
    title: "Envío a Todo México",
    subtitle: "Entrega en 3–5 días hábiles",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Calidad Garantizada",
    subtitle: "Directo de nuestra fábrica",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
      </svg>
    ),
    title: "Cambios y Devoluciones",
    subtitle: "30 días para cambios",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
    title: "Precio de Fábrica",
    subtitle: "Sin intermediarios",
  },
]

const TrustStrip = () => {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="content-container py-14">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {trustItems.map((item, i) => (
            <StaggerItem key={item.title}>
              <div
                className="flex flex-col gap-4 py-8 px-6"
                style={{
                  borderRight: i < trustItems.length - 1 ? "1px solid rgba(228,189,194,0.25)" : "none",
                }}
              >
                {/* Rose icon container */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(184,0,73,0.07)",
                    color: "#b80049",
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p
                    className="text-sm font-medium leading-snug"
                    style={{ color: "#1a1c1c", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs mt-1 leading-relaxed"
                    style={{ color: "#805062", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default TrustStrip
