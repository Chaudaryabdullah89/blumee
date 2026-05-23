import nodemailer from "nodemailer";

// Retrieve environment variables
const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === "true";
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@blume.ae";

// Initialize transporter
export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: smtpUser && smtpPass ? {
    user: smtpUser,
    pass: smtpPass,
  } : undefined,
});

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  service?: string;
  location?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, phone, message, company, service, location } = data;

  const mailOptions = {
    from: smtpUser ? `Blume Web Inquiry <${smtpUser}>` : `"Blume Web Inquiry" <info@blume.ae>`,
    to: receiverEmail,
    replyTo: email,
    subject: `[Estimate Request] ${service || "General Inquiry"} - ${name}`,
    text: `
Estimate Request Details:
----------------------------------------
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone}
Service: ${service || "N/A"}
Site Location: ${location || "N/A"}

Message/Specifications:
${message}
----------------------------------------
Sent from Blume Technical Services Contact Form.
    `,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #334155;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f8fafc;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    .header {
      background-color: #0A1128;
      padding: 32px;
      text-align: center;
      border-bottom: 3px solid #D4AF37;
    }
    .header h1 {
      color: #ffffff;
      font-size: 20px;
      font-weight: 800;
      margin: 0;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .header p {
      color: #D4AF37;
      font-size: 11px;
      font-weight: 600;
      margin: 8px 0 0 0;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    .content {
      padding: 32px;
    }
    .blueprint-badge {
      display: inline-block;
      background-color: #f1f5f9;
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      padding: 4px 8px;
      font-family: monospace;
      font-size: 11px;
      color: #64748b;
      margin-bottom: 24px;
      text-transform: uppercase;
    }
    .section-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 8px;
      margin-top: 24px;
      margin-bottom: 16px;
    }
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .spec-table td {
      padding: 10px 0;
      border-bottom: 1px solid #f1f5f9;
      font-size: 14px;
      vertical-align: top;
    }
    .spec-label {
      width: 35%;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.05em;
    }
    .spec-value {
      color: #0F172A;
      font-weight: 500;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #0A1128;
      border-radius: 4px;
      padding: 16px;
      font-size: 14px;
      line-height: 1.6;
      color: #334155;
      white-space: pre-wrap;
      font-style: italic;
    }
    .footer {
      background-color: #f8fafc;
      padding: 24px 32px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
    }
    .footer p {
      font-size: 12px;
      color: #94a3b8;
      margin: 0;
    }
    .footer a {
      color: #0A1128;
      text-decoration: none;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>Blume Technical</h1>
        <p>Estimation & Specifications Desk</p>
      </div>
      <div class="content">
        <div class="blueprint-badge">SPEC_ESTIMATE_REQ_${Date.now()}</div>
        
        <div class="section-title">Client Specifications</div>
        <table class="spec-table">
          <tr>
            <td class="spec-label">Client Name</td>
            <td class="spec-value">${name}</td>
          </tr>
          <tr>
            <td class="spec-label">Company</td>
            <td class="spec-value">${company || "—"}</td>
          </tr>
          <tr>
            <td class="spec-label">Email</td>
            <td class="spec-value"><a href="mailto:${email}" style="color: #0A1128; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td class="spec-label">Phone</td>
            <td class="spec-value"><a href="tel:${phone}" style="color: #0A1128; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td class="spec-label">Required Service</td>
            <td class="spec-value" style="color: #D4AF37; font-weight: 700;">${service || "—"}</td>
          </tr>
          <tr>
            <td class="spec-label">Site Location</td>
            <td class="spec-value">${location || "—"}</td>
          </tr>
        </table>
        
        <div class="section-title">Message & Specifications Summary</div>
        <div class="message-box">${message}</div>
      </div>
      <div class="footer">
        <p>This inquiry was generated from the <a href="https://blume.ae">Blume Technical Services</a> portal.</p>
        <p style="margin-top: 8px;">&copy; ${new Date().getFullYear()} Blume Technical. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `,
  };

  return await transporter.sendMail(mailOptions);
}
