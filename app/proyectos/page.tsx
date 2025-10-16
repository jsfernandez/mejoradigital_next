import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProyectosPage() {
  const projects = [
    {
      id: "allcrane",
      title: "All Crane",
      description:
        "Solución desarrollada a medida para optimizar la administración, trazabilidad y control operativo de maquinaria pesada. Integra módulos de bitácora, planificación y mantención, digitalizando procesos críticos en terreno y elevando la eficiencia y seguridad operacional",
      client: "Particular",
      tags: [
        "NextJS",
        "NestJS",
        "TypeScript",
        "Prisma",
        "Integraciones",
        "API",
        "Desarrollo web",
        "PostgreSQL",
      ],
    },
    {
      id: "agentes-virtuales-n8n",
      title: "Agentes Virtuales Inteligentes",
      description:
        "Desarrollo a medida de agentes virtuales inteligentes basados en n8n, diseñados para automatizar la gestión de correos, coordinación de reuniones y manejo documental. Estas soluciones integran inteligencia conversacional con flujos de trabajo personalizados, permitiendo una gestión eficiente de clientes y procesos internos.",
      client: "Mejora Digital",
      tags: [
        "n8n",
        "IA",
        "Automatización",
        "Integraciones",
        "Google Workspace",
        "Desarrollo a medida",
        "Workflows Inteligentes",
      ],
    },
    {
      id: "advisor",
      title: "Advisor",
      description:
        "Sistema de alertas proactivas que, ante la caída de servidores físicos, servicios o UPS, notifica vía WhatsApp al equipo técnico y al cliente final. Informa oportunamente sobre las acciones correctivas en curso, brindando tranquilidad y mejorando la fidelización del cliente.",
      client: "Cencosud",
      tags: [
        "PHP",
        "Ionic",
        "JavaScript",
        "WhatsApp",
        "Integraciones",
        "API",
        "Desarrollo web",
        "MySQL",
      ],
    },
    {
      id: "careband",
      title: "Careband",
      description:
        "Pulsera pediátrica inteligente que mide constantes vitales (presión arterial, frecuencia cardíaca, oxigenación y temperatura), enviando alertas en tiempo real al smartphone de los padres y generando automáticamente una ficha clínica en la nube. Diseñada para monitorear a menores de 0 a 5 años, ofreciendo seguridad y tranquilidad a sus cuidadores.",
      client: "Careband (Startup Chile G17)",
      tags: [
        "Node.js",
        "JavaScript",
        "Ionic",
        "Integraciones",
        "API",
        "Desarrollo web",
        "Desarrollo móvil",
        "HL7",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Mongoose",
      ],
    },
    {
      id: "gestiona",
      title: "Gestiona",
      description:
        "Plataforma de evaluación financiera que automatiza el análisis de datos, reduciendo los tiempos de procesamiento de 27 a solo 3 días. Incluye formularios personalizables, interfaz intuitiva y generación de resultados instantáneos para decisiones financieras rápidas y seguras.",
      client: "BCI",
      tags: [
        "Node.js",
        "JavaScript",
        "Angular",
        "TypeScript",
        "Integraciones",
        "API",
        "Desarrollo web",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      id: "workflow",
      title: "Workflow",
      description:
        "Sistema de gestión de disponibilidad para personal en faena minera. Permite registrar y visualizar estados de disponibilidad (disponible, con permiso, inhabilitado) y sus motivos, integrando flujos de aprobación y centralización de la información para una toma de decisiones eficiente en terreno.",
      client: "Minera",
      tags: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "Desarrollo web",
        "Integraciones",
        "API",
        "PostgreSQL",
        "ReactJS",
      ],
    },
    {
      id: "alpha-cronos",
      title: "Alpha Cronos",
      description:
        "Plataforma de mensajería programada que permite enviar mensajes de texto o multimedia a uno mismo u otros en el futuro, funcionando como cápsulas del tiempo digitales para preservar recuerdos o mensajes significativos.",
      client: "Persona natural",
      tags: [
        "PHP",
        "JavaScript",
        "MySQL",
        "Desarrollo web",
        "Integraciones",
        "API",
      ],
    },
    {
      id: "axeon",
      title: "Axeon",
      description:
        "Plataforma inteligente de licitaciones basada en la API de Mercado Público. Facilita la gestión eficiente de propuestas mediante el análisis de datos históricos y la generación de ofertas competitivas que cumplen con los estándares requeridos por el sistema de compras públicas.",
      client: "Mercado Público",
      tags: [
        "PHP",
        "JavaScript",
        "Bootstrap",
        "JQuery",
        "MySQL",
        "Desarrollo web",
        "Integraciones",
        "API",
      ],
    },
    {
      id: "maket-me",
      title: "Maket Me",
      description:
        "Marketplace geolocalizado que permite a los usuarios crear tiendas virtuales visibles en un mapa, facilitando la compra y reserva de productos o servicios por parte de clientes cercanos.",
      client: "Persona natural",
      tags: [
        "Node.js",
        "ReactJS",
        "TypeScript",
        "Ionic",
        "API",
        "Desarrollo web",
        "Desarrollo móvil",
        "Integraciones",
      ],
    },
    {
      id: "non-stop",
      title: "Non-stop",
      description:
        "Plataforma para la venta y promoción de bebidas alcohólicas. Muestra en un mapa los locales cercanos, junto con sus promociones activas, permitiendo a los usuarios descubrir fácilmente nuevas ofertas en su entorno.",
      client: "Persona natural",
      tags: [
        "ElectronJS",
        "Node.js",
        "TypeScript",
        "Ionic",
        "API",
        "Desarrollo web",
        "Desarrollo móvil",
        "Integraciones",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nuestro Portafolio
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Descubre algunos de los proyectos que hemos desarrollado para
                  nuestros clientes, transformando sus ideas en soluciones
                  tecnológicas de alto impacto.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="/contacto">
                  ¿Tienes un proyecto en mente? Contáctanos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
