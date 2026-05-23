"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Parallax Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 via-[#0A1128]/85 to-[#FCFCFD]" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 w-full z-10 text-center flex flex-col gap-4 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-sans font-black text-3xl md:text-5xl text-white uppercase drop-shadow-md tracking-tight">
            Privacy <span className="text-brand-gold">Policy</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 tracking-wide uppercase">
            Effective Date: May 23, 2026 — Dubai, UAE
          </p>
        </div>
      </section>

      {/* Editorial Content Layout */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-10 bg-white border border-black/[0.05] p-8 md:p-12 rounded-3xl shadow-sm">
          
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-sans font-black text-lg text-brand-navy uppercase tracking-tight">
                Corporate Data Security
              </h2>
              <p className="text-slate-400 text-xs font-semibold">
                Compliant with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              At <strong>Blume Technical Services</strong>, we are committed to safeguarding the privacy and security of our clients, partners, and visitors. This policy outlines how we collect, store, utilize, and protect design blueprints, property specifications, on-site safety footage, and correspondence details.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase flex items-center gap-2 text-sm md:text-base">
                <FileText className="w-5 h-5 text-brand-gold" />
                1. Information We Collect
              </h3>
              <p>
                To provide premium custom interior fit-out, precise masonry, and tiling estimations, we collect:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1 text-slate-500 text-xs md:text-sm">
                <li>Professional Contact Details (Name, company email, corporate phone number).</li>
                <li>Design Blueprints, interior architectural CAD layouts, and project site coordinates.</li>
                <li>Site Safety Footage captured during construction monitoring and progress updates.</li>
                <li>Cookies and website usage statistics collected dynamically through our online estimate request forms.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase flex items-center gap-2 text-sm md:text-base">
                <Lock className="w-5 h-5 text-brand-gold" />
                2. How We Safeguard Your Designs
              </h3>
              <p>
                All design specs, custom carpentry outlines, and door placement layouts are stored on secure cloud-encrypted environments. We enforce strict internal Non-Disclosure Agreements (NDAs) with all subcontracted engineers and in-house project managers, ensuring zero data leakage of luxury residences or private corporate headquarters.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase flex items-center gap-2 text-sm md:text-base">
                <Eye className="w-5 h-5 text-brand-gold" />
                3. On-Site Safety Surveillance
              </h3>
              <p>
                To comply with the strict health and safety frameworks (ISO 45001) enforced across Dubai Municipality building sites, our active locations (including Al Quoz, Palm Jumeirah, and DIFC sites) utilize secure close-circuit television (CCTV) cameras. Footage is retained purely for security, safety compliance reviews, and incident audits, and is auto-deleted every 30 days.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase text-sm md:text-base">
                4. Data Sharing & Third-Party Disclosure
              </h3>
              <p>
                Blume Technical Services does not sell, barter, or lease your private information or blueprints. We share contact coordinates exclusively with verified regulatory authorities (such as the Dubai Civil Defense, Dubai Municipality, and DEWA) during standard project approval or utilities connection phases.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4 border-t border-slate-100 pt-6">
              <h3 className="font-sans font-black text-brand-navy uppercase text-sm md:text-base">
                5. Contact Privacy Officers
              </h3>
              <p>
                If you have questions regarding personal data records, drawing files retention, or wish to invoke your rights under the UAE Data Protection laws, please contact our compliance desk:
              </p>
              <p className="text-brand-navy font-bold text-xs md:text-sm mt-1">
                Blume Technical Services Compliance<br />
                Plot 45-B, Al Quoz Industrial Area 3, Dubai, UAE<br />
                Email: <a href="mailto:privacy@blume.ae" className="text-brand-gold hover:underline">privacy@blume.ae</a>
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
