/**
 * Canonical company + site constants.
 *
 * Single source of truth for NAP (name / address / phone) data, which must stay
 * identical across the site, metadata, structured data and outbound email —
 * search engines treat inconsistent NAP as a negative local-SEO signal.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.blumtec.com";

export const COMPANY = {
  legalName: "Blume Technical Services L.L.C.",
  name: "Blume Technical Services",
  shortName: "BlumeTS",
  tagline: "Specialist Trade Contractor — Dubai, U.A.E.",
  description:
    "Blume Technical Services L.L.C. is a specialist trade contractor delivering floor screeding, block work, plastering, gypsum and false ceilings, interior fit-out and MEP for developers, main contractors and private clients across Dubai, Abu Dhabi and Fujairah.",

  // Contact — mirrored in the footer, contact page and email templates.
  phone: "+971 58 525 2114",
  phoneHref: "tel:+971585252114",
  phoneE164: "+971585252114",
  whatsapp: "971585252114",
  email: "blumetec0@gmail.com",

  address: {
    street: "Al Zarooni Building, Office No. 412",
    district: "Frij Murar, Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  // Statutory registrations, as recorded on the trade licence.
  tradeLicense: "959319",
  licenseAuthority: "Dubai Department of Economy and Tourism",
  vatTrn: "100564723300003",

  areaServed: ["Dubai", "Abu Dhabi", "Fujairah"],
  foundingCountry: "AE",
} as const;

/** Full postal address on one line. */
export const ADDRESS_ONE_LINE = `${COMPANY.address.street}, ${COMPANY.address.district}, ${COMPANY.address.city}, ${COMPANY.address.country}`;

/**
 * Builds a WhatsApp click-to-chat link with a prefilled enquiry.
 * WhatsApp is the primary inbound channel for trade contractors in the UAE.
 */
export function whatsappLink(message?: string): string {
  const text =
    message ??
    `Hello Blume Technical Services, I would like to request a quotation.`;
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}
