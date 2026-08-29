"use client";

import React, { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Layers,
  ArrowRight,
  Award,
} from "lucide-react";
import { findService } from "@/lib/services";


export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = findService(slug);

  if (!service) {
    return (
      <div className="flex-1 w-full bg-[#FCFCFD] min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-sans font-black text-3xl text-brand-navy">
          Service Not Found
        </h1>
        <p className="text-slate-500 text-sm max-w-md text-center">
          The technical service line you requested is not listed in our
          corporate folder.
        </p>
        <Link
          href="/services"
          className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. PARALLAX HERO BANNER
      ───────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('${service.heroImg}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFD] via-[#0A1128]/75 to-[#0A1128]/45" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-10 flex flex-col gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all duration-300 text-xs font-bold uppercase tracking-wider max-w-fit shadow-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/30">
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-sans font-black text-xs text-brand-gold uppercase tracking-widest">
              {service.subtitle}
            </span>
          </div>

          <h1 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-brand-navy uppercase tracking-tight leading-none drop-shadow-md">
            {service.title}
          </h1>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. METHODOLOGY & TECHNICAL AUDIT CARD
      ───────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Extensive Operational Methodology */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-sans font-black text-2xl md:text-3xl text-brand-navy uppercase tracking-tight border-l-4 border-brand-gold pl-4">
                Service Overview & Scope
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2">
                {service.desc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy uppercase">
                Technical Execution & Materials Used
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {service.technicalGuide}
              </p>
            </div>

            {/* Scope of Work Bulletpoints */}
            <div className="flex flex-col gap-4 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
              <h4 className="font-sans font-black text-xs uppercase tracking-widest text-brand-navy mb-1 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-gold" />
                Operational Milestones Checklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.milestones.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-slate-600 text-xs md:text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Project Facts Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white border border-black/[0.06] shadow-lg p-8 flex flex-col gap-6">
              <h3 className="font-sans font-black text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-4">
                Technical Tolerances
              </h3>

              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Regulatory Compliance",
                    value: service.compliance,
                    icon: ShieldCheck,
                  },
                  {
                    label: "Technical Standard",
                    value: service.standard,
                    icon: Award,
                  },
                  {
                    label: "Estimated Duration",
                    value: service.timeframe,
                    icon: Clock,
                  },
                ].map((fact, idx) => {
                  const FactIcon = fact.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                        <FactIcon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          {fact.label}
                        </span>
                        <span className="font-sans font-black text-xs md:text-sm text-brand-navy">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technical key metrics boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100 pt-6 mt-2">
                {service.keyMetrics.map((km, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100"
                  >
                    <span className="text-[9px] font-bold text-slate-400 uppercase leading-none">
                      {km.label}
                    </span>
                    <span className="font-sans font-black text-[10px] md:text-xs text-brand-navy leading-none mt-1">
                      {km.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. CALL TO ACTION — Sleek Card
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-3xl bg-brand-navy p-8 md:p-16 text-center text-white overflow-hidden shadow-xl border border-white/[0.08] group">
          {/* Subtle gold decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 items-center max-w-2xl mx-auto">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Get an Estimate
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
              Ready to Mobilize Our Specialized Crews?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Submit your property details or drawing specification file today.
              Our engineers provide detailed screed build-up recommendations,
              material estimates, and complete turnkey fit-out proposals.
            </p>

            <Link
              href="/#contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Consult Our Specialists
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
