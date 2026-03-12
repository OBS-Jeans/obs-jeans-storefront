import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ScrollReveal from "@modules/common/components/scroll-reveal"

const categories = [
  {
    name: "Hombre",
    href: "/store",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #1C1917 100%)",
    span: "col-span-2 row-span-2",
    titleSize: "text-5xl",
  },
  {
    name: "Mujer",
    href: "/store",
    gradient: "linear-gradient(135deg, #D4A853 0%, #B8903D 100%)",
    span: "col-span-1 row-span-1",
    titleSize: "text-3xl",
  },
  {
    name: "Ninos",
    href: "/store",
    gradient: "linear-gradient(135deg, #E85A4F 0%, #B8903D 100%)",
    span: "col-span-1 row-span-1",
    titleSize: "text-3xl",
  },
]

const CategoryShowcase = () => {
  return (
    <section className="content-container py-16">
      {/* Section title */}
      <ScrollReveal>
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-obs-charcoal uppercase tracking-[0.1em]">
            Explora por Categor&iacute;a
          </h2>
          <div className="w-16 h-[2px] bg-obs-gold mt-4" />
        </div>
      </ScrollReveal>

      {/* Asymmetric grid */}
      <ScrollReveal delay={0.2} scale>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:min-h-[620px]">
        {categories.map((cat) => (
          <LocalizedClientLink
            key={cat.name}
            href={cat.href}
            className={`group relative overflow-hidden ${cat.span} min-h-[300px]`}
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0"
              style={{ background: cat.gradient }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/60 group-hover:via-black/10" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3
                className={`font-display ${cat.titleSize} font-bold text-white transition-transform duration-500 group-hover:-translate-y-1`}
              >
                {cat.name}
              </h3>
              <span className="text-sm text-obs-gold uppercase tracking-widest mt-2 transition-transform duration-500 group-hover:-translate-y-1">
                Ver Colecci&oacute;n &rarr;
              </span>
            </div>
          </LocalizedClientLink>
        ))}
      </div>
      </ScrollReveal>
    </section>
  )
}

export default CategoryShowcase
