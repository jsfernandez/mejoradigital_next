"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

interface SolutionProps {
  id: string
  title: string
  description: string
  cta: string
  ctaLink: string
}

export function FeaturedSolutions() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const solutions: SolutionProps[] = [
    {
      id: "oj1Tmyh_tpk", // Replace with your actual YouTube video ID
      title: "Automatización de procesos para Empresas",
      description:
        "Optimizamos y digitalizamos los procesos de tu empresa para aumentar la eficiencia, reducir costos y mejorar la experiencia de tus clientes y empleados.",
      cta: "Conoce nuestras soluciones",
      ctaLink: "/servicios",
    },
    {
      id: "FR8YzkJX3JI", // Replace with your actual YouTube video ID
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos aplicaciones y plataformas personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio, con tecnología escalable y segura.",
      cta: "Ver nuestros servicios",
      ctaLink: "/servicios",
    },
  ]

  return (
    <div className="space-y-16">
      {solutions.map((solution, index) => (
        <div
          key={solution.id}
          className={`grid gap-8 items-center ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:grid-flow-dense"}`}
        >
          <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{solution.title}</h2>
            <p className="text-muted-foreground">{solution.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="default" className="w-fit group" onClick={() => setActiveVideo(solution.id)}>
                <Play className="mr-2 h-4 w-4" />
                Ver video
              </Button>
              <Button size="default" className="w-fit group" asChild>
                <Link href={solution.ctaLink}>
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <div className="relative aspect-video w-full h-[300px] rounded-lg overflow-hidden border bg-muted">
              {activeVideo === solution.id ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${solution.id}?autoplay=1`}
                  title={solution.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              ) : (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 flex items-center justify-center cursor-pointer group"
                  onClick={() => setActiveVideo(solution.id)}
                >
                  <div className="rounded-full bg-primary/90 p-4 text-primary-foreground transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

