"use client";

import React, { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Layers,
  Ruler,
  Hammer,
  Compass,
  DoorOpen,
  Paintbrush,
  ArrowRight,
  Award,
} from "lucide-react";

// Robust services data catalog
const servicesData = {
  "fit-out": {
    title: "Premium Interior Fit-Out",
    subtitle: "Turn-Key Commercial & Residential Solutions",
    heroImg:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    desc: "Our interior fit-out team delivers turnkey renovations for corporate offices, high-end boutiques, and luxury villas across Dubai. We integrate spatial layouts, customized partitions, false ceilings, and premium finishes into a single, seamless delivery timeline.",
    icon: Paintbrush,
    timeframe: "30 - 60 Days (Project Scale Dependent)",
    compliance: "Dubai Municipality & Civil Defense Approved",
    standard: "Q4 Superior Fit-Out Standard",
    materials:
      "Premium gypsum panels, acoustic isolation layers, customized brass details, and low-VOC paints.",
    technicalGuide:
      "We manage structural partition planning, suspended metal ceiling framing, high-performance gypsum board installations, electrical routing coordination, and detailed decorative trims under laser-level tolerances.",
    keyMetrics: [
      { label: "Level Accuracy", value: "Under +/- 1.0mm tolerance" },
      { label: "Acoustic Rating", value: "Up to 48 dB wall dampening" },
      { label: "Fire Resistance", value: "Fully BS 476 compliant" },
    ],
    milestones: [
      "Spatial Layout & CAD Coordination",
      "Metal Frame Sub-Structure Erection",
      "Concealed Services (MEP) Routing",
      "Insulation & Double-Gypsum Cladding",
      "Plaster Prep & Multi-Coat Painting",
    ],
  },
  tiling: {
    title: "Custom Tiling & Stonework",
    subtitle: "High-End Porcelain, Marble & Ceramic Laying",
    heroImg:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
    desc: "Our tiling specialists execute flawless large-format porcelain, custom stone layouts, and fine marble cladding. We ensure perfectly flat subfloor screeds and micro-joint alignments that yield visually seamless floors.",
    icon: Ruler,
    timeframe: "10 - 25 Days",
    compliance: "ISO 9001 Material Quality Compliant",
    standard: "Lippage-Free Flatness (BS 5385)",
    materials:
      "Imported Italian Calacatta marble, large-format porcelain, chemical epoxy grouts, and flexible polymer-modified adhesives.",
    technicalGuide:
      "Prior to tile laying, we check subfloor level using digital rotary lasers, correct inconsistencies with self-leveling compounds, install polyurethane wet-area waterproofing, and utilize dynamic tile-leveling clips to avoid lippage completely.",
    keyMetrics: [
      { label: "Lippage Limit", value: "Less than 0.5mm max" },
      { label: "Waterproofing", value: "Class-A Liquid Membrane" },
      { label: "Grout Width", value: "1.5mm - 2.0mm joints" },
    ],
    milestones: [
      "Subfloor Level & Flatness Audits",
      "Polyurethane Waterproofing Application",
      "Dry-Lay Layout Selection & Alignment",
      "Laser-Guided Adhesive Comb Troweling",
      "Concealed Tiling Clip Alignment",
      "Epoxy Grout Filling & Acid Washing",
    ],
  },
  masonry: {
    title: "Precision Block Masonry",
    subtitle: "Heavy-Duty Structural & Internal Partitions",
    heroImg:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200",
    desc: "Wall partition accuracy determines the success of all subsequent plastering and cabinetry. Our masonry crews build solid concrete walls, boundary walls, and insulated partition block works with uncompromising straightness.",
    icon: Layers,
    timeframe: "14 - 30 Days",
    compliance: "Dubai Civil Engineering Approved",
    standard: "Vertical Plumb Standard (BS 5628)",
    materials:
      "200mm solid concrete blocks, insulated thermal blocks, galvanized steel wall ties, and high-strength OPC mortars.",
    technicalGuide:
      "We layout coordinates based on dynamic CAD drawings, mount high-tensile carbon steel anchors to columns, cast on-site concrete lintels for door clearances, and incorporate technical thermal expansion joints to neutralize regional temperature movements.",
    keyMetrics: [
      { label: "Plumb Tolerance", value: "Under 2.0mm per 3 meters" },
      { label: "Block Density", value: "Min 2000 kg/m3 solid load" },
      { label: "Tie Frequency", value: "Every third block course" },
    ],
    milestones: [
      "Floor Coordinate Chalk Lining",
      "Galvanized Wall-Tie Anchor Pinning",
      "Level Masonry block lay (1:3 Mortar)",
      "Reinforced Steel Lintel Castings",
      "Thermal Expansion Joint Detailing",
    ],
  },
  doors: {
    title: "High-End Door Installations",
    subtitle: "Custom Wood Joinery & Fire-Rated Door Sets",
    heroImg:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    desc: "We supply and fit high-end wooden doors, architraves, frames, and premium ironmongery. Our joinery experts ensure doors lock smoothly with tight gaskets that block sound and drafts.",
    icon: DoorOpen,
    timeframe: "7 - 20 Days",
    compliance: "Dubai Civil Defense Certified",
    standard: "Grade 1 Wood Joinery Standards",
    materials:
      "Seasoned solid ash, oak veneers, sound-proof internal particle fillers, neoprene seals, and heavy-duty steel ironmongery.",
    technicalGuide:
      "We audit door structural frame plumb, install heavy-duty wood casing anchors, fit door panels using 3 ball-bearing hinges, mount architectural locksets, and compress secure neoprene gaskets.",
    keyMetrics: [
      { label: "Gap Tolerance", value: "Uniform 2.0mm border gap" },
      { label: "Acoustic Rating", value: "Up to 35 dB secure sound damping" },
      { label: "Hinges Number", value: "3 Ball-bearing hinges per door" },
    ],
    milestones: [
      "Door Frame Openings Plumb Audit",
      "Structural Hardwood Sub-Frame Anchor",
      "Door Leaf Mortising & Hinge Layout",
      "Panel Hanging & Balance Alignments",
      "Architrave Skirting Fitting",
      "Hardware & Neoprene Seal Compression",
    ],
  },
  plaster: {
    title: "Partition Walls & Plastering",
    subtitle: "Flawless Flat Leveling & Gypsum Skimming",
    heroImg:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200",
    desc: "Perfect plastering provides the base for elite decoration. Our finishing masons render, level, and skim walls until they achieve a glass-like Q4 surface profile.",
    icon: Hammer,
    timeframe: "10 - 20 Days",
    compliance: "Dubai Municipality Finishing Certified",
    standard: "Q4 Flawless Flat Standard (BS EN 998)",
    materials:
      "Premium bonding agents, rust-proof corner beads, fiberglass joint mesh, and multi-coat leveling plasters.",
    technicalGuide:
      "We prime masonry walls, mount metal corner beads to reinforce edges, apply spatter-dash base layers to maximize mortar bonding, layout level screed guides, render walls, and complete the skimming process with premium fine-gypsum layers.",
    keyMetrics: [
      { label: "Surface Flatness", value: "Under 1.0mm deviation per 2m" },
      { label: "Coats Applied", value: "3-Coat rendering & skimming" },
      { label: "Corner Angle", value: "Exact 90-degree bead setups" },
    ],
    milestones: [
      "Wall Primer & Bonding Agent Spatter",
      "Corner Bead & Level Screed Guide Setup",
      "Render Layer Throwing & Screed Level",
      "Fiberglass Mesh Joint Overlay",
      "Gypsum Finish Skimming (Multi-coat)",
      "Fine Sanding & Dust-free Primer base",
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = servicesData[slug as keyof typeof servicesData];

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
              Our engineers provide detailed block counts, tiling materials
              estimates, and complete turnkey fit-out proposals.
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
