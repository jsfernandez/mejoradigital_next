"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter signup logic here
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Mail className="h-12 w-12 text-muted-foreground/50" />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Boletín Informativo</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
          Suscríbete para recibir las últimas noticias y consejos sobre seguridad digital.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement >) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Suscribirse</Button>
      </form>
    </div>
  )
}

