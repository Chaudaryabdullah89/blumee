import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, company, service, location } = body;

    // Simple validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone, message)" },
        { status: 400 }
      );
    }

    // Call nodemailer utility to send email
    await sendContactEmail({
      name,
      email,
      phone,
      message,
      company,
      service,
      location,
    });

    return NextResponse.json(
      { success: true, message: "Estimate request successfully routed." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending contact email via Nodemailer:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
