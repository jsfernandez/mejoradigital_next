import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



export async function POST(req: Request) {
  try {
    const { empresa, rut, nombre, cargo, email, telefono, mensaje } = await req.json();

    if (!empresa || !rut || !nombre || !cargo ||  !email || !telefono || !mensaje) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
    }
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS

    console.log({user, pass})
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Cambia a true si usas el puerto 465
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contacto@mejoradigital.cl',
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre} de ${empresa}\nRut: ${rut}\nCargo del contacto: ${cargo}\nCorreo: ${email}\nTelefono: ${telefono}\nMensaje:\n${mensaje}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
  }
}
export async function GET(request: any) {
  return new Response(JSON.stringify({code: 405, message: 'Vaya que te has perdido amigo!' }));
}