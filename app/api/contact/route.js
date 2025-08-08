import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // Corrected to use 'services' instead of 'referral'
    const { name, email, phone, services, message } = body;

    const data = await resend.emails.send({
      from: "Your Brand <onboarding@resend.dev>",
      to: ["glassmateweb@gmail.com"], // where you want to receive the message
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}