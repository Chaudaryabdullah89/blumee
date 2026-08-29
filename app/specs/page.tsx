"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Ruler, Hammer, Layers } from "lucide-react";
import BackgroundImage from "@/app/components/BackgroundImage";

export default function SpecsPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Parallax Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <BackgroundImage
            src="/img/site-drawings.jpg"
            priority
            className="transition-transform duration-[10s] scale-105"
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
            Technical <span className="text-brand-gold">Specifications</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 tracking-wide uppercase">
            Screed Systems, Tolerances & Manufacturer Accreditation
          </p>
        </div>
      </section>

      {/* Blueprint Grid Layout */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Engineering Standard
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-brand-navy uppercase tracking-tight">
            Documented tolerances & material guides
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            Our screeding, block work and finishing trades are executed to documented surface-regularity classes and manufacturer-specified systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Box 1: Floor Screeding Specifications */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Floor Screeding Specifications
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Surface Regularity Classes: SR1 – SR3</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Surface Regularity</span>
                  <span className="font-sans font-black text-brand-navy">SR1 3mm / SR2 5mm / SR3 10mm</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Typical Thickness</span>
                  <span className="font-sans font-black text-brand-navy">25mm – 75mm build-up</span>
                </div>
              </div>
              <p>
                <strong>Systems:</strong> Bonded (25–40mm), unbonded (50–70mm), floating (65–75mm) and heated screeds (min. 25mm cover over pipes) — traditional sand-cement, semi-dry, fibre-reinforced and self-levelling/liquid screeds, selected to suit the finish above.
              </p>
              <p>
                <strong>Curing & Testing:</strong> Screeds are protected from rapid drying, then dried under controlled conditions — approx. 1mm per day for the first 50mm — with level, soundness (drop-hammer) and moisture testing verified before the finish is laid.
              </p>
            </div>
          </div>

          {/* Box 2: Block Work & Plastering Standards */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Block Work & Plastering Standards
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Concrete Block Walls & Q4 Plaster Finish</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Wall Systems</span>
                  <span className="font-sans font-black text-brand-navy">CMU Block, Partitions & Boundary Walls</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Plaster Finish</span>
                  <span className="font-sans font-black text-brand-navy">Q4 Gypsum Skim</span>
                </div>
              </div>
              <p>
                <strong>Block Masonry:</strong> Concrete block walls, partitions and structural elements, with reinforced lintels cast for openings and coordinates set out to CAD drawings.
              </p>
              <p>
                <strong>Plaster Execution:</strong> Multi-coat application — spatter-dash base, sand-cement render, and a fine gypsum skim finish — with fiberglass joint mesh to control shrinkage cracking.
              </p>
            </div>
          </div>

          {/* Box 3: MEP & Gypsum Ceiling Specifications */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  MEP & Gypsum Ceiling Specifications
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Coordinated With Fit-Out Programme</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">MEP Systems</span>
                  <span className="font-sans font-black text-brand-navy">Lighting, Power, Plumbing & A/C</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Ceiling Systems</span>
                  <span className="font-sans font-black text-brand-navy">False Ceilings & Custom Mouldings</span>
                </div>
              </div>
              <p>
                <strong>MEP Works:</strong> Air conditioning, electrical, plumbing & drainage, firefighting, low current, and fresh air/ventilation works, delivered by trained engineers and technicians.
              </p>
              <p>
                <strong>Gypsum Ceilings:</strong> Custom false ceilings, wall panels, partitions and ornate mouldings crafted by our in-house team, sequenced with MEP first fix.
              </p>
            </div>
          </div>

          {/* Box 4: Quality, HSE & Compliance */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Quality, HSE & Compliance
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Trade License No. 959319 — Dubai DET</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Manufacturer Accreditation</span>
                  <span className="font-sans font-black text-brand-navy">Fosroc, MAPEI, Flowcrete, MBS</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Testing Coverage</span>
                  <span className="font-sans font-black text-brand-navy">100% of Screeded Areas</span>
                </div>
              </div>
              <p>
                <strong>Quality Policy:</strong> Works conform to the contract specification, approved drawings and applicable standards — verified during execution and evidenced with a documented handover pack, not inspected in afterwards.
              </p>
              <p>
                <strong>HSE:</strong> Executed in accordance with UAE Federal Labour Law, Dubai Municipality and the main contractor&apos;s project HSE plan, with dust-extracted tools, PPE enforcement and incident reporting on every site.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
