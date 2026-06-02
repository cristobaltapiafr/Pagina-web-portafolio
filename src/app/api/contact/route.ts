
// ─────────────────────────────────────────────
//  API Route: POST /api/contact
//  Recibe el formulario y envía un correo
//  usando la API de MailerSend.
// ─────────────────────────────────────────────
 
import { NextRequest, NextResponse } from "next/server";

/** Escapa HTML para prevenir XSS en el cuerpo del correo */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
 
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Coerción a string para evitar inyecciones de tipo
    const nombre  = String(body.nombre  ?? "").trim();
    const correo  = String(body.correo  ?? "").trim();
    const mensaje = String(body.mensaje ?? "").trim();

    // Validación básica
    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Límites de longitud
    if (nombre.length > 100 || correo.length > 254 || mensaje.length > 2000) {
      return NextResponse.json(
        { error: "Uno o más campos exceden la longitud permitida." },
        { status: 400 }
      );
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: "El correo ingresado no es válido." },
        { status: 400 }
      );
    }

    // Escapar para uso seguro en HTML del email
    const safeNombre  = escapeHtml(nombre);
    const safeCorreo  = escapeHtml(correo);
    const safeMensaje = escapeHtml(mensaje);
 
    // Llamada a la API de MailerSend
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERSEND_API_TOKEN}`,
      },
      body: JSON.stringify({
        from: {
          email: process.env.CONTACT_EMAIL_FROM,
          name: "Portafolio de Contacto",
        },
        to: [
          {
            email: process.env.CONTACT_EMAIL_TO,
            name: "Dueño del Portafolio",
          },
        ],
        reply_to: {
          email: correo,
          name: nombre,
        },
        subject: `Nuevo mensaje de contacto — ${safeNombre}`,
        text: `
Nombre:  ${nombre}
Correo:  ${correo}
 
Mensaje:
${mensaje}
        `.trim(),
        html: `
<h2>Nuevo mensaje desde tu portafolio</h2>
<table style="font-family:sans-serif;font-size:15px;line-height:1.6">
  <tr><td><strong>Nombre:</strong></td><td>${safeNombre}</td></tr>
  <tr><td><strong>Correo:</strong></td><td><a href="mailto:${safeCorreo}">${safeCorreo}</a></td></tr>
</table>
<hr/>
<p><strong>Mensaje:</strong></p>
<p style="white-space:pre-wrap">${safeMensaje}</p>
        `.trim(),
      }),
    });
 
    if (!response.ok) {
      const errorData = await response.json();
      console.error("MailerSend error:", errorData);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta más tarde." },
        { status: 500 }
      );
    }
 
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error en /api/contact:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
