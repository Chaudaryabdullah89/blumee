"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ClipboardList, ShieldCheck, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Hero Header */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200')`,
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
            How We Deliver Flawless Construction & Finishing Quality Across Dubai
          </p>
        </div>
      </section>

      {/* Steps Timeline Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-20">
          {[
            {
              step: "Phase 01",
              title: "Digital Site Survey & Precise Estimating",
              icon: ClipboardList,
              desc: "Every premium fit-out starts with absolute site measurements. Our engineers inspect the site coordinates using digital rotary lasers. We calculate precise wall areas for plaster rendering and concrete block masonry volume requirements. This prevents material waste and budget overrides completely.",
              actions: [
                "Digital line-and-level audits",
                "Precise block count and plaster rendering volumes",
                "Subfloor flatness check before stone layouts",
                "Comprehensive materials quotation within 48 hours"
              ]
            },
            {
              step: "Phase 02",
              title: "Spatial Designing & Woodwork Detailing",
              icon: Compass,
              desc: "We coordinate with architects to map out spatial layouts. Our joinery draftspeople create precise workshop drawings for custom doors, ash frames, ceiling partitions, and custom timber work. This phase ensures all door swings, socket coordinates, and tile layouts are approved before cutting.",
              actions: [
                "Detailed 2D/3D fit-out layouts",
                "Carpentry shop drawings for custom door assemblies",
                "Tiling grid coordinates maps",
                "Dubai Municipality and developer NOC planning"
              ]
            },
            {
              step: "Phase 03",
              title: "Expert Craftsmanship & On-Site Mobilization",
              icon: ShieldCheck,
              desc: "Our specialized in-house crews mobilize with professional tools. Masons build block partitions to perfect straight lines, finishing teams render plaster to flawless flat profiles, and tiling experts install porcelain and marble using dynamic levelers. Safety is managed daily under strict ISO standards.",
              actions: [
                "In-house masons, carpenters, and tilers",
                "Laser-guided wall and floor alignments",
                "Double-coat liquid wet-area waterproofing",
                "Daily project supervisor site audits"
              ]
            },
            {
              step: "Phase 04",
              title: "Laser Quality Check & Handover Audit",
              icon: Award,
              desc: "Before we hand over any finished space, we conduct a strict internal QA inspection. We check plaster flatness, ensure all custom ash doors close with secure rubber seal compression, verify that stone joints are lip-free, and coordinate final sign-offs.",
              actions: [
                "Laser flatness tests with +/- 0.5mm lippage limits",
                "Pressure tests for plumbing and wet-area seals",
                "Acoustic gasket and door latch balance audits",
                "Full clean-up and handover certificate signing"
              ]
            }
          ].map((phase, idx) => {
            const PhaseIcon = phase.icon;
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16 last:border-0 last:pb-0">
                {/* Step indicator column */}
                <div className="lg:col-span-3 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                  <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full shadow-sm">
                    {phase.step}
                  </span>
                  <div className="hidden lg:block w-full border-t border-slate-100 mt-4" />
                </div>

                {/* Narrative column */}
                <div className="lg:col-span-9 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center text-white shrink-0 shadow-sm">
                      <PhaseIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-black text-xl md:text-2xl text-brand-navy">
                      {phase.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {phase.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {phase.actions.map((act, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                        <span className="text-slate-600 text-xs md:text-sm font-semibold">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
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
              Contact our engineering and masonry estimating desk today to schedule your dynamic on-site laser survey.
            </p>
            
            <Link
              href="/#contact"
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
