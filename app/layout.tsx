import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Preloader from "./components/Preloader";

export const metadata: Metadata = {
  title: "Blume Technical Services — Premium Construction & Development",
  description:
    "We provide premier commercial construction and fit-out solutions for modern enterprises. Blume Technical Services — redefining urban interiors with structural integrity across Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFCFD]">
        <Preloader />
        <SmoothScrollProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
