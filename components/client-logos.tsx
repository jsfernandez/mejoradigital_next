import Image from "next/image"

// Import images
import cencosud from "@/assets/images/cencosud.png"
import startup from "@/assets/images/startup.png"
import transparente from "@/assets/images/gob-transparente.png"
import labs from "@/assets/images/labs.svg"
import minsal from "@/assets/images/minsal.png"
import climatizacion from "@/assets/images/climatizacion.jpg"
import inacap from "@/assets/images/inacap.png"


export function ClientLogos() {
  const logos = [
    { src: climatizacion, alt: "Climatización Solar" },
    { src: cencosud, alt: "Cencosud" },
    { src: startup, alt: "Startup Chile" },
    { src: transparente, alt: "Gobierno Transparente" },
    { src: labs, alt: "BCI Labs" },
    { src: minsal, alt: "MINSAL" },
    //{ src: inacap, alt: "INACAP" },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center grayscale transition-all hover:grayscale-0">
          <Image
            src={logo.src || "/placeholder.svg"}
            alt={logo.alt}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}

