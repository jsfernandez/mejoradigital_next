import { SiteHeader } from "@/components/site-header"
import { Mail, MapPin } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Política de Privacidad – Agentes Virtuales Mejora Digital
                </h1>
                <p className="text-sm text-muted-foreground">Última actualización: 09 de agosto de 2025</p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  En <strong>Mejora Digital</strong>, valoramos y respetamos la privacidad de los usuarios que
                  interactúan con nuestros <strong>agentes virtuales</strong>. Esta Política de Privacidad describe cómo
                  recopilamos, utilizamos, almacenamos y protegemos la información personal y no personal que nos
                  proporcionas durante el uso de nuestros servicios.
                </p>

                <h2>1. Información que recopilamos</h2>
                <p>
                  Nuestros agentes virtuales pueden recopilar la siguiente información, dependiendo del contexto y la
                  configuración del servicio:
                </p>
                <ul>
                  <li>
                    <strong>Datos de identificación:</strong> nombre, apellido, dirección de correo electrónico, número
                    de teléfono.
                  </li>
                  <li>
                    <strong>Datos de interacción:</strong> preguntas, respuestas, comentarios o cualquier contenido que
                    proporciones durante la conversación.
                  </li>
                  <li>
                    <strong>Datos técnicos:</strong> dirección IP, tipo de dispositivo, navegador, sistema operativo y
                    datos de conexión.
                  </li>
                  <li>
                    <strong>Datos de uso:</strong> fecha y hora de las interacciones, historial de conversación y
                    métricas de uso del agente virtual.
                  </li>
                </ul>
                <p>
                  En algunos casos, podemos solicitar información adicional si el servicio lo requiere (por ejemplo,
                  para agendar una cita, generar un presupuesto o registrar un pedido).
                </p>

                <h2>2. Finalidad del tratamiento de datos</h2>
                <p>La información recopilada se utiliza para:</p>
                <ul>
                  <li>Proporcionar y mejorar la experiencia de uso del agente virtual.</li>
                  <li>Responder a solicitudes, preguntas o requerimientos de los usuarios.</li>
                  <li>Personalizar las respuestas y ofrecer recomendaciones adaptadas.</li>
                  <li>Realizar análisis estadísticos y de rendimiento del agente virtual.</li>
                  <li>Cumplir con obligaciones legales y normativas.</li>
                </ul>

                <h2>3. Base legal para el tratamiento de datos</h2>
                <p>Procesamos la información del usuario sobre la base de:</p>
                <ul>
                  <li>
                    <strong>Consentimiento:</strong> cuando el usuario acepta explícitamente esta política antes de
                    interactuar.
                  </li>
                  <li>
                    <strong>Ejecución de un contrato o servicio:</strong> cuando el uso del agente virtual forma parte
                    de un servicio contratado.
                  </li>
                  <li>
                    <strong>Interés legítimo:</strong> para mejorar, optimizar y proteger el funcionamiento de los
                    agentes virtuales.
                  </li>
                </ul>

                <h2>4. Conservación de los datos</h2>
                <ul>
                  <li>
                    Los datos personales se almacenarán únicamente durante el tiempo necesario para cumplir con la
                    finalidad para la que fueron recopilados.
                  </li>
                  <li>
                    El historial de conversaciones puede conservarse para mejorar el servicio, siempre que no incluya
                    datos personales, o previa anonimización.
                  </li>
                  <li>
                    Una vez cumplido el plazo de conservación, los datos se eliminarán o anonimizarán de forma segura.
                  </li>
                </ul>

                <h2>5. Compartición de la información</h2>
                <p>No vendemos ni compartimos tu información personal con terceros, salvo en los siguientes casos:</p>
                <ul>
                  <li>
                    Proveedores tecnológicos que prestan servicios de infraestructura, almacenamiento o procesamiento de
                    datos.
                  </li>
                  <li>Cumplimiento de obligaciones legales o requerimientos judiciales.</li>
                  <li>
                    Integraciones solicitadas por el usuario (por ejemplo, Google Calendar, CRM, etc.), previa
                    autorización explícita.
                  </li>
                </ul>

                <h2>6. Seguridad de la información</h2>
                <p>
                  Implementamos medidas técnicas, administrativas y organizativas para proteger los datos contra accesos
                  no autorizados, alteraciones, divulgaciones o destrucciones indebidas.
                </p>
                <p>
                  Sin embargo, ningún sistema es 100% seguro, por lo que no podemos garantizar la seguridad absoluta de
                  la información.
                </p>

                <h2>7. Derechos del usuario</h2>
                <p>
                  De acuerdo con la <strong>Ley 19.628</strong> y, cuando aplique, el <strong>GDPR</strong>, el usuario
                  puede ejercer los siguientes derechos:
                </p>
                <ul>
                  <li>Acceder a sus datos personales.</li>
                  <li>Solicitar la rectificación de datos inexactos o incompletos.</li>
                  <li>Solicitar la eliminación de sus datos (“derecho al olvido”).</li>
                  <li>Limitar u oponerse al tratamiento de sus datos.</li>
                  <li>Solicitar la portabilidad de sus datos a otro proveedor.</li>
                </ul>
                <p>
                  Para ejercer estos derechos, envía un correo a:{" "}
                  <a href="mailto:contacto@mejoradigital.com">contacto@mejoradigital.com</a>
                </p>

                <h2>8. Uso de cookies y tecnologías similares</h2>
                <p>
                  Algunos agentes virtuales pueden emplear cookies o tecnologías similares para recordar preferencias y
                  mejorar la experiencia. El usuario puede configurar su navegador para bloquearlas, aunque esto podría
                  limitar ciertas funciones.
                </p>

                <h2>9. Menores de edad</h2>
                <p>
                  Nuestros agentes virtuales no están dirigidos a menores de 14 años sin la autorización de sus padres o
                  tutores. Si detectamos que hemos recopilado datos de un menor sin dicha autorización, procederemos a
                  su eliminación.
                </p>

                <h2>10. Cambios a esta política</h2>
                <p>
                  Podemos actualizar esta Política de Privacidad en cualquier momento. La fecha de última actualización
                  se indicará al inicio del documento. Te recomendamos revisarla periódicamente.
                </p>

                <h2>11. Contacto</h2>
                <p>Si tienes dudas o inquietudes sobre esta política, puedes contactarnos en:</p>
                <div className="space-y-2 not-prose">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contacto@mejoradigital.com">contacto@mejoradigital.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Mejora Digital SpA – Santiago, Chile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
