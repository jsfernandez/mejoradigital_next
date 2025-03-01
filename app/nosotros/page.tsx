import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users, Code, Lock, Cog, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Import images
import desarrolloSoftware from "@/assets/images/desarrollo-software.png"
import ciberseguridad from "@/assets/images/ciberseguridad.png"
import automatizacion from "@/assets/images/automatizacion.png"
import transformacionDigital from "@/assets/images/transformacion-digital.png"

export default function AboutPage() {
  const features = [
    {
      icon: Target,
      title: "Experiencia",
      description:
        "Más de 10 años de experiencia en el área nos valida, la innovación, la ciberseguridad y la digitalización está en nuestro ADN",
    },
    {
      icon: Users,
      title: "Acompañamiento",
      description:
        "Durante todo el camino siempre tendrás a tu PO designado en cada momento, viviendo, respirando y velando por tu negocio.",
    },
    {
      icon: Lightbulb,
      title: "Visión",
      description: "Nuestro Core es que consigas tus objetivos y no menos, nuestro éxito es que logres tus metas.",
    },
  ]

  const services = [
    {
      icon: Code,
      title: "Desarrollo de software",
      description:
        "Nuestro equipo de trabajo puede realizar cualquier reto que tengas, nos especializamos en el desarrollo a medida",
      image: desarrolloSoftware,
      color: "from-primary/20 to-accent/20",
    },
    {
      icon: Lock,
      title: "Ciberseguridad",
      description:
        "No dejes tu negocio vulnerable a ataques, nuestros especialistas te pueden asesorar y entregar las mejoras, herramientas en ciberseguridad",
      image: ciberseguridad,
      color: "from-accent/20 to-success/20",
    },
    {
      icon: Cog,
      title: "Automatización de procesos",
      description:
        "Deja las tareas engorrosas o repetitivas en nuestras manos, nuestros expertos desarrollarán procesos automatizados y más eficientes",
      image: automatizacion,
      color: "from-success/20 to-primary/20",
    },
    {
      icon: Rocket,
      title: "Transformación digital e innovación",
      description:
        "¿Tienes una visión de tu empresa que quieres alcanzar?, nuestro equipo trabajara en hacerlo realidad mediante la innovación y transformación digital.",
      image: transformacionDigital,
      color: "from-primary/20 to-success/20",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col gap-12 py-12 md:py-24 lg:py-32">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Quiénes Somos</h1>
                  <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    En Mejora Digital somos un equipo de emprendedores visionarios con experiencia de primera mano en
                    innovación, ciberseguridad y transformación digital.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5" />
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-3">
                          <div className="rounded-lg bg-primary/10 p-2 w-fit">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-bold text-xl">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                      Nuestros Servicios
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Soluciones Integrales para tu Empresa
                    </h2>
                    <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                      Ofrecemos un conjunto completo de servicios diseñados para impulsar tu transformación digital y
                      proteger tu negocio en el mundo digital.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <div key={index} className="group relative overflow-hidden rounded-3xl border bg-background">
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.color}`} />
                        <div className="relative grid gap-4 p-6 sm:grid-cols-[1fr_200px] lg:p-8">
                          <div className="flex flex-col justify-center gap-4">
                            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-2 w-fit">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold">{service.title}</h3>
                              <p className="text-muted-foreground text-sm">{service.description}</p>
                            </div>
                            <Button variant="outline" className="w-fit group" asChild>
                              <Link href="/servicios">
                                Saber más
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                          <div className="hidden sm:block">
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              width={200}
                              height={200}
                              className="aspect-square w-full rounded-xl object-cover"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  ¿Listo para Transformar tu Negocio?
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comienza Tu Viaje Digital
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales a través de la tecnología.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Agenda una Consulta Gratuita</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/servicios">
                      Explorar Servicios
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Card className="relative overflow-hidden border-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-success/10" />
                <CardContent className="relative grid gap-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Contacto Directo</h3>
                    <p className="text-muted-foreground">
                      Estamos aquí para responder tus preguntas y ayudarte a dar el siguiente paso en tu transformación
                      digital.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success" />
                      <span className="text-sm">Respuesta en menos de 24 horas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success" />
                      <span className="text-sm">Consultoría inicial sin costo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-success" />
                      <span className="text-sm">Soluciones personalizadas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

