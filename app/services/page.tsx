"use client";

import React from "react";
import Link from "next/link";
import {
  Paintbrush,
  Layers,
  Ruler,
  Zap,
  Compass,
  CheckCircle,
  ArrowRight,
  Hammer,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. HERO SECTION — Premium Dark Banner
      ───────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')`,
          }}
        />
        {/* Navy dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 via-[#0A1128]/85 to-[#FCFCFD]" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-8 w-full z-10 text-center flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] w-fit shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-brand-gold">
              Our Capabilities
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter text-white uppercase drop-shadow-lg max-w-4xl">
            Floor Screeding &{" "}
            <span className="text-brand-gold font-black">Technical</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Services
            </span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            We are committed to making it simpler and easier for you to access
            floor screeding, interior fit-out, and specialized technical
            services from one place. Whether you choose a single service or
            the complete end-to-end package, you can feel confident we will
            deliver quality work on an accurate, cost-managed budget, every
            time.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. THE CORE SPECIALTIES — Grid Sections
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Services Catalog
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
            Our Services
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            From floor screeding and interior fit-out to block work, plastering
            and MEP — we combine specialist technical execution into one
            seamless, single-contract experience.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {[
            {
              title: "Floor Screeding",
              subtitle: "Bonded, Unbonded, Floating & Heated Systems",
              desc: "Floor screeding is our core specialisation. From bonded and unbonded sand-cement screeds to floating, heated and self-levelling systems, we deliver the flat, sound, correctly cured floor base that every finish above it depends on — at volume, and to programme.",
              bullets: [
                "Sand-Cement, Semi-Dry & Fibre-Reinforced Screeds",
                "Bonded, Unbonded, Floating & Heated Build-Ups",
                "Laser-Guided Levelling & Datum Control",
                "SR1 to SR3 Surface Regularity Testing",
              ],
              icon: Ruler,
              img: "/projects/screed-team-pour.jpg",
              reverse: false,
            },
            {
              title: "Interior Fit-Out",
              subtitle: "Space Planning to Finishing Touches",
              desc: "Transforming empty spaces into functional, aesthetically pleasing environments — from space planning and layout design to furniture installation and finishing touches, executed seamlessly from start to finish.",
              bullets: [
                "Space Planning & Layout Design",
                "Partitions, Ceilings & MEP Coordination",
                "Plaster, Paint & Decorative Finishes",
                "Furniture & Fixture Installation",
              ],
              icon: Compass,
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
              reverse: true,
            },
            {
              title: "Renovation Works",
              subtitle: "Structural, Screeding & Aesthetic Upgrades",
              desc: "Breathing new life into outdated or dilapidated spaces. Our renovation services span structural modifications, floor re-screeding, aesthetic enhancements and functional upgrades — approached with creativity and a commitment to excellence.",
              bullets: [
                "Condition Survey & Structural Scoping",
                "Demolition & Concrete Crack Repair",
                "Re-Screeding to Falls",
                "Full Refurbishment & Redecoration",
              ],
              icon: Hammer,
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              title: "Block Work & Gypsum",
              subtitle: "Concrete Block Walls & Custom Ceilings",
              desc: "Concrete block walls, partitions and structural elements built with precision, alongside custom gypsum ceilings, wall panels, partitions and mouldings crafted by our in-house team.",
              bullets: [
                "Concrete Block Wall Construction",
                "Reinforced Lintels & Opening Detailing",
                "Custom False Ceilings & Wall Panels",
                "Ornate Gypsum Mouldings & Cornicing",
              ],
              icon: Layers,
              img: "/projects/gypsum-ceiling-medallion.jpg",
              reverse: true,
            },
            {
              title: "Plastering & Painting",
              subtitle: "Smooth Finishes, Full Colour Range",
              desc: "Smooth, flawless surface preparation and finishing, plus a full range of colours, finishes and decorative painting techniques — the base every decoration depends on.",
              bullets: [
                "Internal & External Cement Plastering",
                "Three-Coat Render & Q4 Gypsum Skim",
                "Fiberglass Anti-Crack Joint Mesh",
                "Full Range of Colours & Decorative Finishes",
              ],
              icon: Paintbrush,
              img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              title: "MEP Services",
              subtitle: "Electrical, Plumbing, HVAC & Firefighting",
              desc: "A full suite of Mechanical, Electrical and Plumbing services, coordinated with the fit-out programme and delivered by trained engineers and technicians in accordance with local and international standards.",
              bullets: [
                "Lighting, Small Power & Cable Containment",
                "Plumbing, Drainage & A/C Systems",
                "Firefighting & Low Current Systems",
                "Sustainable, Eco-Friendly MEP Solutions",
              ],
              icon: Zap,
              img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
              reverse: true,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  item.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Text Column */}
                <div
                  className={`lg:col-span-6 flex flex-col gap-6 ${
                    item.reverse ? "lg:order-last" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                        {item.subtitle}
                      </span>
                      <h3 className="font-sans font-black text-xl md:text-2xl text-brand-navy">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {item.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                        <span className="text-slate-500 text-xs md:text-sm font-semibold">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left/Right Image Frame Column */}
                <div className="lg:col-span-6 relative">
                  {/* Subtle decorative gold frame */}
                  <div className="absolute -inset-4 border border-brand-gold/20 rounded-3xl -rotate-1 pointer-events-none" />

                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 shadow-lg border border-black/[0.04] group">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('${item.img}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. TECHNICAL AUDIT & PROCESS — Steps Grid
      ───────────────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-black/[0.04] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              How We Deliver
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
              Our Technical Process
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Every screeding, fit-out, or block work project undergoes a
              multi-point quality check to guarantee perfect results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Survey & Estimating",
                desc: "We perform digital laser level and datum surveys, calculate accurate screed and block quantities, and record floor loadings.",
              },
              {
                step: "02",
                title: "Detailed Space Planning",
                desc: "Our in-house design and AutoCAD team outlines layouts, screed build-ups, MEP routing, and wet-area waterproofing.",
              },
              {
                step: "03",
                title: "High-End Execution",
                desc: "Our in-house screeding crews, masons and finishing teams place floors, lay blocks, and plaster walls to specification.",
              },
              {
                step: "04",
                title: "Quality Sign-Off",
                desc: "Every surface is checked with laser leveling instruments and moisture testing for perfect flatness before hand-over.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-black/[0.05] p-8 flex flex-col gap-6 hover-float transition-all duration-300 group"
              >
                <span className="font-sans font-black text-4xl text-brand-gold/20 group-hover:text-brand-gold transition-colors duration-300">
                  {p.step}
                </span>
                <div className="flex flex-col gap-2">
                  <h4 className="font-sans font-black text-base text-brand-navy">
                    {p.title}
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. CALL TO ACTION — Sleek Card
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
              Ready to Upgrade Your Building&apos;s Interiors?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Submit your property layouts, design blueprints, or technical spec
              sheets today. Our team provides highly competitive quotes on
              floor screeding, block work, plastering, MEP, and complete
              fit-out packages.
            </p>

            <Link
              href="/contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
