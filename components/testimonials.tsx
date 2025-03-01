"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import juanRuz from '@/assets/images/juan.jpeg'
import mauroSemmler from '@/assets/images/mauro.jpeg'
import jaquelineSilve from '@/assets/images/jaqueline.png'

const testimonials = [
  {
    quote: "Es una gran empresa, que está ligada  a la innovación, estoy feliz ya que me han ayudado mucho a entender cómo mejorar los procesos en mi empresa, son unos jóvenes responsables y muy profesionales por lo que recomiendo 100% su trabajo",
    author: "Jaqueline Silva",
    role: "CEO de Empresa Climatización Solar SPA",
    image: jaquelineSilve,
  },
  {
    quote: "Son una empresa creativa y responsable. Se involucran en los desarrollos de proyectos como si fuera propio",
    author: "Juan Ruz",
    role: "Director de Carreras de Tecnologías Aplicadas en INACAP",
    image: juanRuz,
  },
  {
    quote: "Gracias a su experiencia en transformación digital, logramos optimizar nuestros procesos y mejorar nuestra competitividad.",
    author: "Mauro Semmler",
    role: "Director de “Canales Digitales” Laboratorio Bagó.",
    image: mauroSemmler,
  },
]

export function Testimonials() {
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <div className="relative mx-auto max-w-2xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="relative overflow-hidden">
                <div className="absolute right-6 top-6">
                  <Quote className="h-6 w-6 text-muted-foreground/20" />
                </div>
                <CardContent className="pt-12">
                  <blockquote className="space-y-6">
                    <p className="text-muted-foreground">{testimonial.quote}</p>
                    <footer className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <cite className="not-italic font-medium">{testimonial.author}</cite>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              active === index ? "bg-primary" : "bg-muted-foreground/20",
            )}
            onClick={() => setActive(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

