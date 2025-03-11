import type React from "react"
import Head from "next/head"
import Script from "next/script";
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/Montserrat-Bold.woff2",
  variable: "--font-heading",
})

export const metadata = {
    title: "Mejora Digital - Soluciones Digitales",
    description: "Descubre nuestras soluciones digitales para tu empresa. Transformación digital a tu medida.",
    keywords: ["desarrollo de software", "transformación digital", "tecnología", "innovación"],
    authors: [{ name: "Mejora Digital", url: "https:www//mejoradigital.cl" }],
    robots: "index, follow",
    openGraph: {
      title: "Mejora Digital - Soluciones Digitales",
      description: "Descubre nuestras soluciones digitales para tu empresa.",
      url: "https:www//mejoradigital.cl",
      siteName: "Mejora Digital",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mejora Digital - Soluciones Digitales",
      description: "Descubre nuestras soluciones digitales para tu empresa.",
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1MFJ8TZ69R"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1MFJ8TZ69R');
            `,
          }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}

