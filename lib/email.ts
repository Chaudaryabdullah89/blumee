import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === "true";
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "blumetec0@gmail.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blumtec.com";

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth:
    smtpUser && smtpPass
      ? {
          user: smtpUser,
          pass: smtpPass,
        }
      : undefined,
});

export interface FormEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  service?: string;
  location?: string;
  source?: string;
}

const emailStyles = `
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #334155; background-color: #f8fafc; margin: 0; padding: 0; }
  .wrapper { width: 100%; background-color: #f8fafc; padding: 40px 20px; box-sizing: border-box; }
  .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
  .header { background-color: #0A1128; padding: 32px; text-align: center; border-bottom: 3px solid #D4AF37; }
  .header h1 { color: #ffffff; font-size: 20px; font-weight: 800; margin: 0; letter-spacing: 0.1em; text-transform: uppercase; }
  .header p { color: #D4AF37; font-size: 11px; font-weight: 600; margin: 8px 0 0 0; letter-spacing: 0.2em; text-transform: uppercase; }
  .content { padding: 32px; }
  .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; margin-bottom: 16px; }
  .spec-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  .spec-table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
  .spec-label { width: 35%; font-weight: 600; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
  .spec-value { color: #0F172A; font-weight: 500; }
  .message-box { background-color: #f8fafc; border-left: 4px solid #0A1128; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
  .footer { background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; text-align: center; }
  .footer p { font-size: 12px; color: #94a3b8; margin: 0; }
  .footer a { color: #0A1128; text-decoration: none; font-weight: 500; }
  .intro { font-size: 15px; line-height: 1.7; color: #334155; margin: 0 0 16px 0; }
  .highlight { color: #D4AF37; font-weight: 700; }
`;

function getFromAddress() {
  return smtpUser
    ? `Blume Technical Services <${smtpUser}>`
    : `"Blume Technical Services" <blumetec0@gmail.com>`;
}

function getSourceLabel(source?: string) {
  if (source === "home-estimate") return "Homepage Estimate Form";
  if (source === "contact-page") return "Contact Page";
  return source || "Website Form";
}

function buildAdminHtml(data: FormEmailData) {
  const { name, email, phone, message, company, service, location, source } = data;
  const sourceLabel = getSourceLabel(source);

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>${emailStyles}</style></head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>Blume Technical</h1>
        <p>New Inquiry — ${sourceLabel}</p>
      </div>
      <div class="content">
        <div class="section-title">Client Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Client Name</td><td class="spec-value">${name}</td></tr>
          <tr><td class="spec-label">Company</td><td class="spec-value">${company || "—"}</td></tr>
          <tr><td class="spec-label">Email</td><td class="spec-value"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td class="spec-label">Phone</td><td class="spec-value"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td class="spec-label">Required Service</td><td class="spec-value" style="color:#D4AF37;font-weight:700;">${service || "—"}</td></tr>
          <tr><td class="spec-label">Site Location</td><td class="spec-value">${location || "—"}</td></tr>
          <tr><td class="spec-label">Form Source</td><td class="spec-value">${sourceLabel}</td></tr>
        </table>
        <div class="section-title">Message & Specifications</div>
        <div class="message-box">${message}</div>
      </div>
      <div class="footer">
        <p>Submitted via <a href="${siteUrl}">Blume Technical Services</a></p>
      </div>
    </div>
  </div>
</body></html>`;
}

function buildUserConfirmationHtml(data: FormEmailData) {
  const { name, service, location } = data;
  const firstName = name.trim().split(/\s+/)[0] || name;

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>${emailStyles}</style></head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>Blume Technical</h1>
        <p>Request Received</p>
      </div>
      <div class="content">
        <p class="intro">Dear <span class="highlight">${firstName}</span>,</p>
        <p class="intro">Thank you for contacting Blume Technical Services. We have received your inquiry and our engineering desk will review your specifications shortly.</p>
        <div class="section-title">Your Submission Summary</div>
        <table class="spec-table">
          <tr><td class="spec-label">Service</td><td class="spec-value">${service || "General inquiry"}</td></tr>
          <tr><td class="spec-label">Location</td><td class="spec-value">${location || "—"}</td></tr>
        </table>
        <p class="intro">A member of our team typically responds within <strong>1–2 business days</strong>. For urgent matters, call us at <a href="tel:+971585252114">+971 58 525 2114</a> or email <a href="mailto:blumetec0@gmail.com">blumetec0@gmail.com</a>.</p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Blume Technical Services. All rights reserved.</p>
        <p style="margin-top:8px;"><a href="${siteUrl}">Visit our website</a></p>
      </div>
    </div>
  </div>
</body></html>`;
}

function buildAdminText(data: FormEmailData) {
  const { name, email, phone, message, company, service, location, source } = data;
  return `
New inquiry (${getSourceLabel(source)}):
----------------------------------------
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone}
Service: ${service || "N/A"}
Location: ${location || "N/A"}

Message:
${message}
----------------------------------------
`;
}

function buildUserConfirmationText(data: FormEmailData) {
  const firstName = data.name.trim().split(/\s+/)[0] || data.name;
  return `
Dear ${firstName},

Thank you for contacting Blume Technical Services. We have received your inquiry and our engineering desk will review your specifications shortly.

Service: ${data.service || "General inquiry"}
Location: ${data.location || "N/A"}

We typically respond within 1–2 business days.

Blume Technical Services
+971 58 525 2114 | blumetec0@gmail.com
`;
}

async function sendAdminNotification(data: FormEmailData) {
  const sourceLabel = getSourceLabel(data.source);

  return transporter.sendMail({
    from: getFromAddress(),
    to: receiverEmail,
    replyTo: data.email,
    subject: `[${sourceLabel}] ${data.service || "General Inquiry"} — ${data.name}`,
    text: buildAdminText(data),
    html: buildAdminHtml(data),
  });
}

async function sendUserConfirmation(data: FormEmailData) {
  return transporter.sendMail({
    from: getFromAddress(),
    to: data.email,
    replyTo: receiverEmail,
    subject: "We received your inquiry — Blume Technical Services",
    text: buildUserConfirmationText(data),
    html: buildUserConfirmationHtml(data),
  });
}

/** Sends notification to admin and confirmation to the submitter. */
export async function sendFormEmails(data: FormEmailData) {
  const [adminResult, userResult] = await Promise.all([
    sendAdminNotification(data),
    sendUserConfirmation(data),
  ]);
  return { adminResult, userResult };
}

/** @deprecated Use sendFormEmails */
export async function sendContactEmail(data: FormEmailData) {
  return sendFormEmails(data);
}
