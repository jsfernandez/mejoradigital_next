import Image, { StaticImageData } from "next/image"
import { Card } from "@/components/ui/card"

import css from "@/assets/images/ccs.png"

interface Associate {
  id: string
  name: string
  image: StaticImageData
  width?: number
  height?: number
}

export function AssociatesShowcase() {
  // This array can be expanded as more associates are added
  const associates: Associate[] = [
    {
      id: "1",
      name: "Camara de Comercio de Santiago",
      image: css,
      width: 421,
      height: 239,
    },
    // Add more associates here as needed
  ]

  // Determine if we should center the single item
  const isSingleAssociate = associates.length === 1

  return (
    <div className="space-y-4">
      <div
        className={`flex justify-center ${!isSingleAssociate ? "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" : ""}`}
      >
        {associates.map((associate) => (
          <div key={associate.id} className={isSingleAssociate ? "w-48 sm:w-64 md:w-80" : ""}>
            <Card className="group relative overflow-hidden transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div
                className="relative"
                style={{
                  aspectRatio: `${associate.width || 1}/${associate.height || 1}`,
                }}
              >
                <Image
                  src={associate.image || "/placeholder.svg"}
                  alt={associate.name}
                  fill
                  className="object-contain p-2 rounded-md"
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}


