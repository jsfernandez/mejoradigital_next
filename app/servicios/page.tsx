import { SiteHeader } from "@/components/site-header"
import { ServiceCard } from "@/components/service-card"
import { Shield, Code, Laptop, Zap, BarChart, LinkIcon, Users, Layout } from "lucide-react"

export const metadata = {
    title: "Nuestros Servicios - Mejora Digital",
    description: "Descubre nuestros servicios de desarrollo de software y transformación digital.",
    robots: "index, follow",
  };

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Creamos Software a la Medida de tu Empresa",
      description:
        "Desarrollamos plataformas digitales personalizadas que se ajustan a tus necesidades, ya sea que necesites un sistema de gestión, una aplicación móvil, una tienda en línea o cualquier otra solución.",
      benefits: [
        "Automatización de procesos para reducir costos y tiempos",
        "Soluciones intuitivas y fáciles de usar",
        "Adaptadas a cualquier tipo de negocio, desde startups hasta grandes empresas",
      ],
    },
    {
      icon: Laptop,
      title: "Digitalizamos tu Empresa para que Ahorres Tiempo y Dinero",
      description: "Convertimos esos procesos manuales en sistemas digitales más rápidos y eficientes.",
      benefits: [
        "Acceso a tu información desde cualquier lugar y dispositivo",
        "Reducción de errores y mayor organización",
        "Ahorro de tiempo en tareas repetitivas",
      ],
    },
    {
      icon: Shield,
      title: "Protegemos tu Negocio contra Hackeos y Fraudes Digitales",
      description:
        "Evaluamos la seguridad de tu empresa, encontramos vulnerabilidades y reforzamos tus sistemas para que estén protegidos ante cualquier ataque.",
      benefits: [
        "Seguridad para tu información y la de tus clientes",
        "Evitas pérdidas económicas por ataques cibernéticos",
        "Cumples con normativas de seguridad digital",
      ],
    },
    {
      icon: Zap,
      title: "Hacemos que tus Sistemas sean Más Rápidos y Seguros",
      description: "Migramos tus sistemas a tecnologías más modernas y rápidas para que trabajes sin interrupciones.",
      benefits: [
        "Velocidad y estabilidad para tu plataforma",
        "Mayor capacidad de respuesta ante el crecimiento de tu negocio",
        "Reducción de costos operativos en tecnología",
      ],
    },
    {
      icon: BarChart,
      title: "Analizamos tus Datos para que Tomes Mejores Decisiones",
      description:
        "Implementamos herramientas de análisis que transforman esos datos en información útil y fácil de entender.",
      benefits: [
        "Identificación de oportunidades de crecimiento",
        "Predicción de tendencias en tu mercado",
        "Toma de decisiones basada en datos reales y no en suposiciones",
      ],
    },
    {
      icon: LinkIcon,
      title: "Conectamos tus Sistemas para que Todo Funcione en Automático",
      description:
        "Integramos todas tus herramientas y aplicaciones para que trabajen juntas, evitando duplicación de trabajo y errores manuales.",
      benefits: [
        "Sincronización automática de datos en todas tus plataformas",
        "Mayor productividad y eficiencia en tu empresa",
        "Menos tiempo dedicado a tareas repetitivas",
      ],
    },
    {
      icon: Users,
      title: "Ayudamos a tu Equipo a Trabajar de Forma Ágil y Productiva",
      description:
        "Aplicamos metodologías ágiles para mejorar la organización y aumentar la productividad de tu equipo.",
      benefits: [
        "Trabajo más organizado y eficiente",
        "Tiempos de entrega más rápidos",
        "Mayor satisfacción de clientes y empleados",
      ],
    },
    {
      icon: Layout,
      title: "Creamos Plataformas Digitales para Vender tus Servicios Online",
      description:
        "Creamos la plataforma que necesitas para vender tus productos o servicios en línea de forma segura y escalable.",
      benefits: [
        "Ventas 24/7 sin limitaciones geográficas",
        "Gestión automatizada de pedidos y pagos",
        "Escalabilidad para crecer sin problemas",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Soluciones Digitales para Impulsar tu Negocio
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En la era digital, la tecnología puede hacer que tu empresa sea más eficiente, rentable y segura. Pero
                  sabemos que no todos son expertos en informática, por eso ofrecemos soluciones simples, prácticas y
                  efectivas para ayudarte a crecer sin complicaciones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

