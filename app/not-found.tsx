import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Browse our services and completed projects instead.",
  robots: { index: false, follow: true },
};

const SUGGESTIONS = [
  { href: "/services", label: "Our Services", desc: "Screeding, block work, plastering, gypsum, fit-out and MEP" },
  { href: "/projects", label: "Our Projects", desc: "21+ completed and ongoing works across the UAE" },
  { href: "/contact", label: "Contact Us", desc: "Request a site survey or quotation" },
];

export default function NotFound() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD] min-h-[80vh] flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-6">
        <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
          Error 404
        </span>

        <h1 className="font-sans font-black text-5xl md:text-7xl text-brand-navy uppercase tracking-tighter leading-none">
          Page Not Found
        </h1>

        <p className="text-slate-500 text-sm md:text-base max-w-lg leading-relaxed">
          The page you are looking for has been moved, renamed, or never
          existed. Let us point you back to solid ground.
        </p>

        <Link
          href="/"
          className="px-6 py-3.5 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-navy rounded-full shadow-lg hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center gap-2 mt-2"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8 pt-8 border-t border-black/[0.06]">
          {SUGGESTIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl border border-black/[0.06] p-6 flex flex-col gap-2 text-left shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all duration-300"
            >
              <span className="font-sans font-black text-sm text-brand-navy group-hover:text-brand-gold transition-colors flex items-center justify-between gap-2">
                {item.label}
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
