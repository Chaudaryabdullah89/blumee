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
  Zap,
  Paintbrush,
  ArrowRight,
  Award,
} from "lucide-react";

// Robust services data catalog
const servicesData = {
  screeding: {
    title: "Floor Screeding",
    subtitle: "Bonded, Unbonded, Floating & Heated Systems",
    heroImg: "/projects/screed-team-pour.jpg",
    desc: "Floor screeding is our core specialisation. From bonded and unbonded sand-cement screeds to floating, heated and self-levelling systems, we deliver the flat, sound, correctly cured floor base that every finish above it depends on — at volume, and to programme.",
    icon: Ruler,
    timeframe: "Sequenced bay-by-bay and villa-by-villa to programme",
    compliance: "UAE Local Codes & Manufacturer Specification",
    standard: "SR1 (3mm) to SR3 (10mm) Surface Regularity",
    materials:
      "Washed, graded sand and OPC batched to a controlled ratio, with admixtures and fibres where specified; approved systems from Fosroc, MAPEI and Flowcrete.",
    technicalGuide:
      "Laser survey of the slab and datum lines, substrate preparation and priming, controlled mix batching in forced-action mixers, placing and compaction to rails or laser datum, straightedging and power-trowelling, then protected curing with moisture and soundness testing before handover.",
    keyMetrics: [
      { label: "Surface Regularity", value: "SR1 3mm to SR3 10mm" },
      { label: "Typical Thickness", value: "25mm to 75mm build-up" },
      { label: "Moisture Testing", value: "100% of screeded areas" },
    ],
    milestones: [
      "Laser Survey & Datum Marking",
      "Substrate Preparation & Priming",
      "Controlled Mix Batching",
      "Placing & Compaction to Datum",
      "Levelling & Power-Trowel Finish",
      "Curing, Testing & Handover Pack",
    ],
  },
  "fit-out": {
    title: "Interior Fit-Out",
    subtitle: "Space Planning to Finishing Touches",
    heroImg:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    desc: "Transforming empty spaces into functional, aesthetically pleasing environments — from space planning and layout design to furniture installation and finishing touches, executed seamlessly from start to finish.",
    icon: Compass,
    timeframe: "Coordinated with screeding and MEP programme",
    compliance: "Coordinated with Developer & Authority Approvals",
    standard: "Q4 Plaster Finish, Manufacturer-Specified Materials",
    materials:
      "Gypsum partitions and ceiling systems, doors and ironmongery, paint and decorative finishes, coordinated FF&E.",
    technicalGuide:
      "We manage structural partition planning, ceiling framing, MEP coordination, and detailed finishing under close supervision — with meticulous attention to detail from substrate preparation to furnishing placement.",
    keyMetrics: [
      { label: "Coordination", value: "Screeding + Fit-Out + MEP, one contract" },
      { label: "Finish Standard", value: "Q4 Plaster Skim" },
      { label: "Sectors Served", value: "Residential, Commercial, Hospitality" },
    ],
    milestones: [
      "Space Planning & Layout Design",
      "Partition & Ceiling Framing",
      "MEP Coordination",
      "Plaster, Paint & Finishes",
      "Furniture & Fixture Installation",
      "Snagging & Handover",
    ],
  },
  renovation: {
    title: "Renovation Works",
    subtitle: "Structural, Screeding & Aesthetic Upgrades",
    heroImg:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    desc: "Breathing new life into outdated or dilapidated spaces. Our renovation services span structural modifications, floor re-screeding, aesthetic enhancements and functional upgrades — approached with creativity and a commitment to excellence.",
    icon: Hammer,
    timeframe: "Scoped per site condition survey",
    compliance: "Structural & Authority Approvals Coordinated",
    standard: "Matched to Original or Upgraded Specification",
    materials:
      "Concrete repair mortars, re-screeding systems, matched finishes and refurbishment materials.",
    technicalGuide:
      "We survey existing conditions, identify structural and substrate issues, carry out demolition and concrete crack repair where needed, then re-screed and refinish to bring the space back to a sound, serviceable standard.",
    keyMetrics: [
      { label: "Scope", value: "Structural, Screed & Finish Upgrades" },
      { label: "Approach", value: "Restoration or Full Modern Makeover" },
      { label: "Delivery", value: "Every Stage Handled with Care" },
    ],
    milestones: [
      "Condition Survey & Scoping",
      "Demolition & Concrete Repair",
      "Re-Screeding to Falls",
      "Structural & MEP Upgrades",
      "Finishing & Redecoration",
      "Final Inspection & Handover",
    ],
  },
  "block-work": {
    title: "Block Work & Gypsum",
    subtitle: "Concrete Block Walls & Custom Ceilings",
    heroImg: "/projects/gypsum-ceiling-medallion.jpg",
    desc: "Concrete block walls, partitions and structural elements built with precision, alongside custom gypsum ceilings, wall panels, partitions and mouldings crafted by our in-house team.",
    icon: Layers,
    timeframe: "Sequenced with the screeding and fit-out programme",
    compliance: "Structural Engineering Approved",
    standard: "Vertical Plumb & Reinforced Lintel Detailing",
    materials:
      "Concrete masonry units (CMU), galvanized wall ties, gypsum board and mouldings, reinforcement mesh.",
    technicalGuide:
      "Masonry crews build boundary and partition block walls to CAD coordinates, casting reinforced lintels for openings; our gypsum team then installs false ceilings, wall panels and decorative mouldings — including the ornate, hand-detailed ceiling work shown in our completed craftsmanship gallery.",
    keyMetrics: [
      { label: "Wall Systems", value: "CMU Block, Partitions & Boundary Walls" },
      { label: "Ceiling Systems", value: "False Ceilings, Panels & Mouldings" },
      { label: "Detailing", value: "Custom Gypsum Cornicing" },
    ],
    milestones: [
      "Coordinate Setting-Out",
      "Block Wall Construction",
      "Lintel & Opening Detailing",
      "False Ceiling Framing",
      "Gypsum Board & Mouldings",
      "Final Finish Inspection",
    ],
  },
  plastering: {
    title: "Plastering & Painting",
    subtitle: "Smooth Finishes, Full Colour Range",
    heroImg:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200",
    desc: "Smooth, flawless surface preparation and finishing, plus a full range of colours, finishes and decorative painting techniques — the base every decoration depends on.",
    icon: Paintbrush,
    timeframe: "Sequenced after block work and MEP first fix",
    compliance: "Q4 Finish, Manufacturer-Specified Systems",
    standard: "Three-Coat Render & Skim to Q4",
    materials:
      "Sand-cement render, gypsum skim coats, fiberglass joint mesh, full range of paints and decorative coatings.",
    technicalGuide:
      "We prime and render walls in a controlled multi-coat sequence, apply fiberglass mesh at joints to prevent cracking, skim to a Q4 finish, then apply a full range of colours and decorative painting techniques to specification.",
    keyMetrics: [
      { label: "Finish Level", value: "Q4 Flawless Skim" },
      { label: "Crack Control", value: "Fiberglass Joint Mesh" },
      { label: "Coverage", value: "Internal & External Surfaces" },
    ],
    milestones: [
      "Surface Priming",
      "Render Coat Application",
      "Joint Mesh Reinforcement",
      "Gypsum Skim Finish",
      "Sanding & Prep for Paint",
      "Full-Colour Decorative Painting",
    ],
  },
  mep: {
    title: "MEP Services",
    subtitle: "Electrical, Plumbing, HVAC & Firefighting",
    heroImg:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200",
    desc: "A full suite of Mechanical, Electrical and Plumbing services, coordinated with the fit-out programme and delivered by trained engineers and technicians in accordance with local and international standards.",
    icon: Zap,
    timeframe: "Coordinated with screeding & fit-out programme",
    compliance: "Local & International Standards Compliant",
    standard: "Sustainable, Eco-Friendly MEP Solutions",
    materials:
      "Lighting & small power systems, cable containment, plumbing & drainage systems, central A/C and split units, generators, motors, pumps.",
    technicalGuide:
      "Our MEP team installs lighting and small power, cable containment, plumbing and drainage, and central or split A/C systems, and carries out air conditioning, electrical, plumbing, firefighting, low current and fresh air/ventilation works — coordinated with the screeding and fit-out programme.",
    keyMetrics: [
      { label: "Systems Installed", value: "Lighting, Power, Plumbing, A/C" },
      { label: "Works Carried Out", value: "Electrical, Firefighting, Low Current" },
      { label: "Approach", value: "Sustainable, Eco-Friendly Solutions" },
    ],
    milestones: [
      "MEP Coordination Drawings",
      "First-Fix Containment & Rough-In",
      "Plumbing & Drainage Installation",
      "Electrical & Low Current Systems",
      "A/C & Ventilation Installation",
      "Testing, Commissioning & Handover",
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
