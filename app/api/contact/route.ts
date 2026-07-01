import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Xavion Tech <onboarding@resend.dev>",
      to: "zeeraksworkspace@gmail.com",
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Message from Website</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}