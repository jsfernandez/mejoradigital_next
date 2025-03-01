import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  ¿Listo para transformar tu negocio? Contáctanos.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Estamos aquí para ayudarte con soluciones innovadoras en desarrollo de software, tecnología y
                  transformación digital. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-12 py-12 lg:grid-cols-[1fr_400px]">
              <ContactForm />
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 text-primary" />
                        <div className="grid gap-1">
                          <h3 className="font-bold">Email</h3>
                          <p className="text-sm text-muted-foreground">contacto@mejoradigital.cl</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-5 w-5 text-primary" />
                        <div className="grid gap-1">
                          <h3 className="font-bold">Teléfono</h3>
                          <p className="text-sm text-muted-foreground">+56 9 2943 7567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div className="grid gap-1">
                          <h3 className="font-bold">Ubicación</h3>
                          <p className="text-sm text-muted-foreground">Santiago, Chile</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <h3 className="font-bold">Síguenos en redes sociales</h3>
                      <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/company/mejoradigital/about/" target="_blank" className="rounded-lg border p-2 text-muted-foreground hover:text-foreground">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://x.com/ContactoMejora" target="_blank" className="rounded-lg border p-2 text-muted-foreground hover:text-foreground">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

