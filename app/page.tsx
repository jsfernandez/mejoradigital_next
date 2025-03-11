import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Laptop,
  Cog,
  Shield,
  BarChart,
  Cloud,
  Smartphone,
  Building,
  ArrowRight,
  CheckCircle,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Testimonials } from "@/components/testimonials";
import { ClientLogos } from "@/components/client-logos";
//import { NewsletterSignup } from "@/components/newsletter-signup"

import appImage from "@/assets/images/dev.webp";
import { FeaturedSolutions } from "@/components/fetured-solutions";

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos plataformas y aplicaciones personalizadas para que tu negocio funcione mejor y más rápido.",
      color: "from-primary/20 to-accent/20",
    },
    {
      icon: Laptop,
      title: "Transformación Digital Empresarial",
      description:
        "Digitalizamos tus procesos, eliminamos tareas manuales y hacemos tu empresa más eficiente.",
      color: "from-accent/20 to-success/20",
    },
    {
      icon: Cog,
      title: "Integración y Automatización de Sistemas",
      description:
        "Hacemos que todos tus sistemas y herramientas trabajen juntos de forma automática.",
      color: "from-success/20 to-primary/20",
    },
    {
      icon: Shield,
      title: "Ciberseguridad y Protección de Datos",
      description:
        "Protegemos la información de tu empresa con auditorías de seguridad y buenas prácticas.",
      color: "from-primary/20 to-success/20",
    },
    {
      icon: BarChart,
      title: "Inteligencia de Negocios y Análisis de Datos",
      description:
        "Transformamos tus datos en información valiosa para que tomes mejores decisiones.",
      color: "from-accent/20 to-primary/20",
    },
    {
      icon: Cloud,
      title: "Desarrollo de Productos SaaS",
      description:
        "Si tienes una idea de software como servicio, la hacemos realidad con tecnología escalable.",
      color: "from-success/20 to-accent/20",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles y Web",
      description:
        "Creamos apps modernas y fáciles de usar para conectar mejor con tus clientes.",
      color: "from-primary/20 to-accent/20",
    },
    {
      icon: Building,
      title: "Plataformas para Empresas",
      description:
        "Diseñamos software especializado para optimizar la gestión de tu negocio.",
      color: "from-accent/20 to-success/20",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0">
            <div className="animate-pulse-slow absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="animate-pulse-slow absolute right-1/4 top-3/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 py-12 md:py-24 lg:grid-cols-2 lg:py-32">
              {/* Hero Section */}
              <div className="flex flex-col justify-center space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-success animate-gradient">
                    Soluciones Digitales y Desarrollo de Software para Hacer
                    Crecer tu Negocio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Transformamos ideas en software a medida, optimizamos
                    procesos y protegemos tu empresa con tecnología de
                    vanguardia.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="animate-fade-in" asChild>
                    <Link href="/servicios">Conoce Nuestros Servicios</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="animate-fade-in"
                    asChild
                  >
                    <Link href="/contacto">Agenda una Consulta</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>+10 años desarrollando soluciones digitales</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>
                      Empresas en América y Europa confían en nosotros
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Tecnología escalable y segura para tu negocio</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 rounded-3xl" />
                  <Image
                    src={appImage}
                    alt="Digital Platform Illustration"
                    width={600}
                    height={600}
                    className="relative rounded-3xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explora nuestros servicios
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Ofrecemos soluciones tecnológicas integrales para impulsar y
                  proteger tu negocio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="group relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity group-hover:opacity-100`}
                    />
                    <CardContent className="relative p-6">
                      <div className="flex flex-col gap-4">
                        <div className="rounded-lg bg-primary/10 p-2.5 w-fit">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="/servicios">
                  Ver Todos los Servicios
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section - Replaces Video Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Soluciones Destacadas
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Descubre cómo nuestras soluciones tecnológicas pueden
                  transformar tu negocio
                </p>
              </div>
            </div>
            <FeaturedSolutions />
          </div>
        </section>

        {/* Clients Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Empresas que han trabajado con nosotros
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Nuestros clientes incluyen empresas de tecnología, banca y
                  retail
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <ClientLogos />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Lo que dicen nuestros clientes
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Historias de éxito de quienes ya han transformado su negocio
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para llevar tu empresa al siguiente nivel con
                  tecnología de vanguardia?
                </h2>
                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Agenda una consulta gratuita y descubre cómo podemos ayudarte
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contacto">
                    Escríbenos Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container flex flex-col gap-6 px-4 py-12 md:px-6 lg:gap-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Sobre Nosotros</h3>
                <p className="text-sm text-muted-foreground">
                  Expertos en desarrollo de software, transformación digital y
                  tecnologías innovadoras para empresas.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
                  <nav className="flex flex-col gap-2 text-sm">
                    <Link href="/servicios" className="hover:underline">
                      Servicios
                    </Link>
                    <Link href="/nosotros" className="hover:underline">
                      Quiénes Somos
                    </Link>
                    <Link href="/contacto" className="hover:underline">
                      Contacto
                    </Link>
                  </nav>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Contacto</h3>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>contacto@mejoradigital.cl</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t pt-6 text-center text-sm text-muted-foreground">
              <p>© 2025 Mejora Digital. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
