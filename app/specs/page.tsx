"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Compass, Ruler, Hammer, Award } from "lucide-react";

export default function SpecsPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Parallax Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200')`,
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
            Technical <span className="text-brand-gold">Specifications</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 tracking-wide uppercase">
            Blume Technical Services Operational & Material Quality Codes
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
            Certified tolerances & material guides
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            We operate under exact European (EN) and British (BS) building standards to assure absolute structural and finishing excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Box 1: Tiling & Stone Cladding Specs */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Tiling & Marble Specifications
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Standard Reference: BS 5385</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Flatness Tolerance</span>
                  <span className="font-sans font-black text-brand-navy">Under +/- 0.5 mm lippage</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Grout Joint Width</span>
                  <span className="font-sans font-black text-brand-navy">1.5 mm to 2.0 mm laser joints</span>
                </div>
              </div>
              <p>
                <strong>Under-Tile Waterproofing:</strong> We lay a seamless, highly elastic, liquid polyurethane waterproofing membrane with a minimum wet film thickness of 1.2mm across all bathrooms and kitchen zones, followed by standard pressure tests before final marble layouts.
              </p>
              <p>
                <strong>Adhesives & Grouting:</strong> We exclusively utilize class-C2TE high-performance cementitious adhesives and anti-staining chemical-resistant epoxy grout, guaranteeing durable, pristine lines.
              </p>
            </div>
          </div>

          {/* Box 2: Block Masonry & Plaster Specs */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Masonry & Plastering Standards
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Standard Reference: BS EN 998 & BS 5628</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">CMU Density</span>
                  <span className="font-sans font-black text-brand-navy">Min 2000 kg/m3 (Solid Blocks)</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Plaster Flatness</span>
                  <span className="font-sans font-black text-brand-navy">Q4 Finish (Under 1mm/2m)</span>
                </div>
              </div>
              <p>
                <strong>Mortar Proportions:</strong> Meticulous mortar mix of 1:3 OPC cement-to-sand ratio blended with high-tensile mesh strips at columns intersections to neutralize block settlement cracking.
              </p>
              <p>
                <strong>Plaster Execution:</strong> Three-coat application including: (1) spatter dash base, (2) scratch leveling sand-cement render, and (3) super-fine gypsum skim leveling coat to yield glass-flat surfaces.
              </p>
            </div>
          </div>

          {/* Box 3: Carpentry & Custom Joinery Specs */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Carpentry & Door Specifications
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Standard Reference: BS 4787 & BS 476</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Timber Classification</span>
                  <span className="font-sans font-black text-brand-navy">Grade 1 Hardwoods (Ash/Walnut)</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Fire Rating Option</span>
                  <span className="font-sans font-black text-brand-navy">60 to 90 Minutes Fire-Rated</span>
                </div>
              </div>
              <p>
                <strong>Internal Doors:</strong> Heavy-duty core internal doors faced with selected natural wood veneers, hung on solid frames using 3 stainless steel ball-bearing hinges to prevent sagging over time.
              </p>
              <p>
                <strong>Soundproofing:</strong> Every customized door set features integrated compressed neoprene rubber gaskets, achieving an acoustic damping rating of up to 35 dB.
              </p>
            </div>
          </div>

          {/* Box 4: Quality Inspections & Laser Audits */}
          <div className="bg-white border border-black/[0.05] rounded-3xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase">
                  Technical Quality & Laser Audits
                </h3>
                <span className="text-slate-400 text-[10px] font-bold uppercase">Standard Reference: ISO 9001:2015 Compliance</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Laser Audit Frequency</span>
                  <span className="font-sans font-black text-brand-navy">Daily Site Inspector Sign-Offs</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-1 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Safety Rating</span>
                  <span className="font-sans font-black text-brand-navy">ISO 45001:2018 Zero Incident</span>
                </div>
              </div>
              <p>
                <strong>Pre-Handover Review:</strong> Our QA teams inspect active installations using specialized digital moisture gauges for carpentry base woods and laser cross-hair leveling for partition walls.
              </p>
              <p>
                <strong>Compliance Document Sharing:</strong> We compile comprehensive technical submittal documents (such as material safety data sheets, lab test reports, and density certifications) for client consultants.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
