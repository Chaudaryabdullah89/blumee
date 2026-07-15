"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  ClipboardList,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. HERO SECTION — Premium Dark Banner
      ───────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=1200')`,
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
            Our Technical <span className="text-brand-gold">Process</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed uppercase tracking-wide">
            How We Deliver Flawless Refurbishment &amp; Finishing Quality Across
            Dubai
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. THE STEPS TIMELINE — Alternating Grid
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-32 relative">
          {/* Vertical timeline trace line (Only visible on large screens) */}
          <div className="absolute hidden lg:block left-1/2 top-8 bottom-8 w-[1px] bg-slate-200 -translate-x-1/2 pointer-events-none" />

          {[
            {
              step: "01",
              phase: "Phase One",
              title: "Digital Survey & Estimating",
              icon: ClipboardList,
              desc: "Every premium fit-out starts with absolute physical data. Our engineers inspect the site coordinates using digital rotary lasers, checking levels and angles to calculate exact material requirements. This ensures budget transparency and prevents material waste.",
              actions: [
                "Digital line-and-level audits",
                "Precise block count and plaster calculations",
                "Subfloor flatness checks before stone layouts",
                "Itemized materials quotation within 48 hours",
              ],
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              step: "02",
              phase: "Phase Two",
              title: "Detailed Shop Drawings",
              icon: Compass,
              desc: "Our joinery and design draftspeople create precise workshop drawings for custom doors, ash frames, tile layout matrices, and wall plaster terminations. Every coordinate is cross-verified for code compliance and client approvals.",
              actions: [
                "2D/3D fit-out layout planning",
                "Carpentry workshop drawings for door sets",
                "Tiling grid coordinate maps",
                "Dubai Municipality and developer NOC prep",
              ],
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
              reverse: true,
            },
            {
              step: "03",
              phase: "Phase Three",
              title: "On-Site Execution & Crafts",
              icon: ShieldCheck,
              desc: "Our specialized in-house crews mobilize with laser-guided equipment. Masons align block partitions, finishing teams render plaster to flawless flat profiles, and tiling experts install natural stone with dynamic leveling clips.",
              actions: [
                "Experienced in-house masons & carpenters",
                "Laser-guided wall and floor alignments",
                "Double-coat liquid wet-area waterproofing",
                "Daily project supervisor site audits",
              ],
              img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              step: "04",
              phase: "Phase Four",
              title: "Laser Quality Check & Handover",
              icon: Award,
              desc: "Before handover, we conduct strict internal quality audits. We inspect plaster flatness with laser leveling tools, verify door set seals under pressure, audit joint lippage limits, and sign off the completion certificates.",
              actions: [
                "Laser flatness tests with +/- 0.5mm limits",
                "Pressure tests for plumbing and wet-area seals",
                "Acoustic gasket and door latch balance audits",
                "Full clean-up and handover certificate signing",
              ],
              img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
              reverse: true,
            },
          ].map((phase, idx) => {
            const PhaseIcon = phase.icon;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative group ${
                  phase.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node Indicator (only on large screens) */}
                <div className="absolute hidden lg:flex left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-brand-navy z-20 font-sans font-black text-xs group-hover:border-brand-gold group-hover:text-brand-gold transition-colors duration-300 pointer-events-none">
                  {phase.step}
                </div>

                {/* Left/Right Column: Narrative Column */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-6 ${
                    phase.reverse ? "lg:order-last" : ""
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-full shadow-sm">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="font-sans font-black text-2xl md:text-3xl text-brand-navy uppercase tracking-tight leading-tight">
                      {phase.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {phase.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {phase.actions.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-slate-500 text-xs md:text-sm font-semibold">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left/Right Column: Visual Column */}
                <div className="lg:col-span-6 relative">
                  {/* Gold border backdrop offset */}
                  <div className="absolute -inset-4 border border-brand-gold/15 rounded-3xl -rotate-1 pointer-events-none" />

                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-black/[0.04] shadow-lg group">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[8s]"
                      style={{
                        backgroundImage: `url('${phase.img}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 to-transparent pointer-events-none" />
                    
                    {/* Big numbers watermark backdrop */}
                    <span className="absolute bottom-6 right-8 font-sans font-black text-7xl text-white/10 select-none pointer-events-none">
                      {phase.step}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. CALL TO ACTION SECTION
      ───────────────────────────────────────── */}
      <section className="pb-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-3xl bg-brand-navy p-8 md:p-16 text-center text-white overflow-hidden shadow-xl border border-white/[0.08] group">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 items-center max-w-2xl mx-auto">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Get Started
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
              Ready to Experience Blume Technical Services Precision?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Contact our engineering and technical estimating desk today to
              schedule your detailed on-site laser survey and layout consultation.
            </p>

            <Link
              href="/contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Request Site Inspection
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
