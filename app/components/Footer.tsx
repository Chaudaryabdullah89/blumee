"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#050A18] text-[#f1f5f9] pt-16 pb-10 border-t border-white/[0.04]">
      {/* Subtle Golden Glow Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10 flex flex-col gap-12">
        
        {/* Main 4-Column Detailed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/[0.05]">
          
          {/* Col 1: Brand & Slogan (4 columns wide) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-sans font-black text-xl tracking-tight text-white uppercase">
                Blume<span className="text-brand-gold font-black">TS</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs font-medium">
              Blume Technical Services L.L.C. delivers end-to-end floor screeding, interior fit-out and MEP solutions for commercial offices, residential developments and hospitality spaces across the UAE. Floor screeding is our core specialisation — flat, sound, correctly cured floors, delivered at volume and to programme.
            </p>
            <div className="flex flex-col gap-1 mt-1 text-[10px] uppercase font-bold tracking-wider text-slate-500">
              <span>Our Promise</span>
              <span className="text-brand-gold">Specialist Screeding • Technical Precision • On Programme</span>
            </div>
          </div>

          {/* Col 2: Technical Services Links (3 columns wide) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-sans font-black text-xs uppercase tracking-widest text-slate-500 border-l-2 border-brand-gold pl-2.5">
              Our Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "Floor Screeding", slug: "screeding" },
                { name: "Interior Fit-Out", slug: "fit-out" },
                { name: "Renovation Works", slug: "renovation" },
                { name: "Block Work & Gypsum", slug: "block-work" },
                { name: "Plastering & Painting", slug: "plastering" },
                { name: "MEP Services", slug: "mep" }
              ].map((l) => (
                <Link 
                  key={l.name} 
                  href={`/services/${l.slug}`} 
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Company Page Links (2 columns wide) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans font-black text-xs uppercase tracking-widest text-slate-500 border-l-2 border-brand-gold pl-2.5">
              Company
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "Home Page", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Selected Projects", href: "/projects" },
                { name: "Our Process", href: "/process" },
                { name: "Technical FAQs", href: "/faq" }
              ].map((l) => (
                <Link 
                  key={l.name} 
                  href={l.href} 
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Address and Coordinates (3 columns wide) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-sans font-black text-xs uppercase tracking-widest text-slate-500 border-l-2 border-brand-gold pl-2.5">
              HQ Coordinates
            </h4>
            <div className="flex flex-col gap-3.5 text-slate-400 text-xs font-bold">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Al Zarooni Building, Office 412,<br />
                  Frij Murar, Deira, Dubai, UAE
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+971585252114" className="text-white hover:text-brand-gold transition-colors font-black">
                  +971 58 525 2114
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:blumetec0@gmail.com" className="hover:text-white transition-colors">
                  blumetec0@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Legal Compliance Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Blume Technical Services. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-0.5">
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-0.5">
              <span>Terms of Service</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="/specs" className="hover:text-white transition-colors flex items-center gap-0.5">
              <span>Technical Spec</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
