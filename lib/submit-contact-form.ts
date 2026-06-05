export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  service?: string;
  location?: string;
  source?: string;
}

export async function submitContactForm(payload: ContactFormPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to send your message.");
  }

  return data as { success: boolean; message: string };
}
