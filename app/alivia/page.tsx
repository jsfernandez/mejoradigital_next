import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Calendar,
  Users,
  BarChart3,
  FileText,
  Mic,
  Bell,
  Activity,
  TrendingUp,
  UserCheck,
  ArrowRight,
  Quote,
} from "lucide-react"
import Link from "next/link"

export default function AliviaPage() {
  const features = [
    {
      icon: Mic,
      title: "Registro Multimodal Diario",
      description: "Captura síntomas y estado de ánimo a través de voz, texto e imágenes de forma natural e intuitiva.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Bell,
      title: "Recordatorios Automáticos",
      description:
        "Seguimiento personalizado con recordatorios inteligentes adaptados al ritmo de vida de cada paciente.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Users,
      title: "Foros Inteligentes",
      description: "Comunidades moderadas por IA que conectan pacientes con experiencias similares de forma segura.",
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      icon: Activity,
      title: "Dashboard Clínico",
      description: "Panel profesional con alertas automáticas y trazabilidad completa del progreso del paciente.",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: FileText,
      title: "Reportes Automáticos",
      description: "Generación inteligente de informes médicos con priorización automática de casos críticos.",
      color: "from-teal-500/20 to-blue-500/20",
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo",
      description: "Identificación temprana de patrones y tendencias para optimizar el tratamiento del dolor crónico.",
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ]

  const metrics = [
    {
      value: "+75%",
      label: "Adherencia a tratamientos",
      description: "Mejora significativa en el seguimiento de terapias",
      icon: TrendingUp,
    },
    {
      value: "-30%",
      label: "Reconsultas innecesarias",
      description: "Reducción en visitas médicas no programadas",
      icon: Calendar,
    },
    {
      value: "+85%",
      label: "Satisfacción de usuarios",
      description: "Pacientes y profesionales altamente satisfechos",
      icon: UserCheck,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-950/20 dark:via-background dark:to-green-950/20">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 py-12 md:py-24 lg:grid-cols-2 lg:py-32 items-center">
              <div className="flex flex-col justify-center space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                    Innovación en Salud Digital
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      AlivIA
                    </span>
                    <br />
                    Tu Compañero Digital en el Manejo del Dolor Crónico
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Transformamos la experiencia del dolor crónico a través de inteligencia artificial empática,
                    conectando pacientes y profesionales para un cuidado más humano y efectivo.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-6 border">
                  <p className="text-muted-foreground mb-4">
                    En Chile, más de 3 millones de personas viven con dolor crónico, enfrentando largos tiempos de
                    espera, tratamientos fragmentados y falta de seguimiento continuo. AlivIA revoluciona este panorama
                    ofreciendo un agente virtual que acompaña, comprende y optimiza el cuidado las 24 horas del día.
                  </p>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Desarrollado por Mejora Digital • Liderado por Constanza Elizondo
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg">
                    <Link href="#funcionalidades">Ver Funcionalidades</Link>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-green-400/20 rounded-3xl blur-3xl" />
                  <Card className="relative overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center h-96">
                        <div className="text-center space-y-4">
                          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Heart className="h-12 w-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">AlivIA</h3>
                          <p className="text-muted-foreground">Inteligencia Artificial Empática</p>
                          <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75" />
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funcionalidades" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Funcionalidades Inteligentes
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Tecnología avanzada diseñada para humanizar el cuidado del dolor crónico
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 transition-opacity group-hover:opacity-100`}
                    />
                    <CardContent className="relative p-6">
                      <div className="flex flex-col gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 w-fit">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-lg">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/10 dark:to-green-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Impacto Proyectado</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Resultados esperados que transformarán la atención del dolor crónico
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {metrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-primary">{metric.value}</div>
                        <div className="font-semibold">{metric.label}</div>
                        <p className="text-sm text-muted-foreground">{metric.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Card className="mx-auto max-w-4xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5" />
              <CardContent className="relative p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Quote className="h-12 w-12 text-muted-foreground/30" />
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                    "AlivIA ha transformado completamente la forma en que acompañamos a nuestros pacientes con dolor
                    crónico. La capacidad de tener un seguimiento continuo y empático, combinado con alertas
                    inteligentes, nos permite brindar una atención más personalizada y oportuna. Es como tener un
                    asistente clínico que nunca duerme y siempre está disponible para nuestros pacientes."
                  </blockquote>
                  <footer className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">CE</span>
                    </div>
                    <div>
                      <cite className="not-italic font-semibold">Constanza Elizondo</cite>
                      <p className="text-sm text-muted-foreground">Líder de Proyecto AlivIA • Mejora Digital</p>
                    </div>
                  </footer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para Revolucionar el Cuidado del Dolor Crónico?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed">
                  Únete a la transformación digital de la salud. Descubre cómo AlivIA puede mejorar la calidad de vida
                  de tus pacientes y optimizar tu práctica clínica.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" asChild>
                  <Link href="/contacto">
                    Solicitar Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  asChild
                >
                  <Link href="/proyectos">Ver Más Proyectos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
