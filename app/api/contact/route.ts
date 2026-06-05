import { NextResponse } from "next/server";
import { sendFormEmails, type FormEmailData } from "@/lib/email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, company, service, location, source } =
      body as FormEmailData;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials are not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us by phone." },
        { status: 503 }
      );
    }

    await sendFormEmails({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      company: company?.trim(),
      service: service?.trim(),
      location: location?.trim(),
      source: source?.trim() || "contact-page",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your request was sent successfully. Check your email for a confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending form emails:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
