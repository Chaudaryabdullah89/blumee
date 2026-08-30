import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import Preloader from "./components/Preloader";
import WhatsAppButton from "./components/WhatsAppButton";
import { COMPANY, SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

const TITLE =
  "Blume Technical Services — Screeding, Block Work, Plastering, Gypsum & MEP, Dubai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Sub-pages supply only their own name; this appends the brand.
    template: "%s | Blume Technical Services",
  },
  description: COMPANY.description,
  applicationName: COMPANY.name,
  keywords: [
    "floor screeding Dubai",
    "screeding contractor UAE",
    "block work contractor Dubai",
    "plastering and painting Dubai",
    "gypsum false ceiling Dubai",
    "interior fit-out Dubai",
    "MEP contractor Dubai",
    "epoxy flooring Dubai",
    "specialist trade contractor UAE",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  alternates: { canonical: "/" },
  category: "Construction",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "en_AE",
    url: SITE_URL,
    title: TITLE,
    description: COMPANY.description,
    images: [
      {
        url: "/img/screeding-powerfloat.jpg",
        width: 1600,
        height: 1067,
        alt: "Blume Technical Services — power screeding a floor slab on site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: COMPANY.description,
    images: ["/img/screeding-powerfloat.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/**
 * schema.org markup so search engines can render the business as a local
 * result (name, address, phone, hours, service catalogue).
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: SITE_URL,
  description: COMPANY.description,
  telephone: COMPANY.phoneE164,
  email: COMPANY.email,
  image: `${SITE_URL}/img/screeding-powerfloat.jpg`,
  logo: `${SITE_URL}/img/screeding-powerfloat.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COMPANY.address.street}, ${COMPANY.address.district}`,
    addressLocality: COMPANY.address.city,
    addressCountry: COMPANY.address.countryCode,
  },
  areaServed: COMPANY.areaServed.map((name) => ({
    "@type": "City",
    name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Trade Licence",
      value: COMPANY.tradeLicense,
    },
    { "@type": "PropertyValue", name: "VAT TRN", value: COMPANY.vatTrn },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Specialised Trade Works",
    itemListElement: Object.entries(services).map(([slug, service]) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        url: `${SITE_URL}/services/${slug}`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content={COMPANY.address.city} />
        <script
          type="application/ld+json"
          // Static, developer-authored JSON — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFCFD]">
        <Preloader />
        <SmoothScrollProvider>
          <ScrollToTopOnNavigate />
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
