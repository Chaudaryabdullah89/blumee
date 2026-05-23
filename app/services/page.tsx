"use client";

import React from "react";
import Link from "next/link";
import { 
  Paintbrush, 
  Layers, 
  Grid, 
  DoorOpen, 
  Compass, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  Briefcase
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
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600')`,
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
            Premium <span className="text-brand-gold font-black">Technical</span> & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Interior Solutions
            </span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            Specialized in high-end interior fit-out, masonry block work, professional plastering, and spatial design for commercial, retail, and premium residential buildings across Dubai.
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
            Specialized Craftsmanship
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            We deliver highly focused, premium technical services that guarantee structural integrity and flawless aesthetic finishes.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {[
            {
              title: "Premium Interior Fit-Out & Renovations",
              subtitle: "All Kind of Buildings Related Work",
              desc: "From premium corporate offices in Downtown Dubai to luxury villas in Palm Jumeirah, we coordinate complete interior turn-key solutions. We manage ceiling designs, wall partitions, high-end woodwork, electrical trunking, and comprehensive renovations under strict schedules.",
              bullets: [
                "Commercial Office & Coworking Fit-Out",
                "High-End Retail Shop & Boutique Setup",
                "Luxury Villa Interior Renovations",
                "Custom Ceiling & Gypsum Works"
              ],
              icon: Paintbrush,
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
              reverse: false
            },
            {
              title: "Precision Masonry Block Work",
              subtitle: "Solid Internal & External Partitions",
              desc: "Flawless wall construction is the foundation of any premium space. Our masonry team delivers precise block alignment, solid concrete masonry units (CMU), precise lintel placement, and expansion joint coordination to prevent future wall cracks.",
              bullets: [
                "Internal Block Wall Partitions",
                "Boundary Walls & Structural Masonry",
                "Flawless Mortar Line Alignment",
                "Reinforced Lintel & Column Integration"
              ],
              icon: Layers,
              img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
              reverse: true
            },
            {
              title: "Professional Plastering & Finishes",
              subtitle: "Flawless Flat Surfaces",
              desc: "Our plastering experts ensure perfectly plumb, flat, and smooth surfaces ready for premium paint or custom wallpaper. We use top-grade bonding agents, corner beads for ultra-sharp edges, and multi-coat leveling processes.",
              bullets: [
                "Internal & External Wall Plastering",
                "Decorative Gypsum Plaster Finishes",
                "Surface Crack Repair & Mesh Integration",
                "Sharp Corner Bead & Edge Detailing"
              ],
              icon: Briefcase,
              img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800",
              reverse: false
            },
            {
              title: "Interior Space Designing & Planning",
              subtitle: "Spatial Blueprints & Layout Optimization",
              desc: "We transform design layouts into highly functional physical plans. Combining architectural sketches with carpentry details, we optimize room setups, traffic flow, material selections, and lighting coordinates before laying down a single tile.",
              bullets: [
                "2D & 3D Spatial Layout Optimization",
                "Material Selection & Coordination",
                "Carpentry & Custom Skirting Blueprints",
                "Lighting & Power Point Layouts"
              ],
              icon: Compass,
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
              reverse: true
            },
            {
              title: "Specialized Tiling & Door Systems",
              subtitle: "Flawless Tiling & Joinery Work",
              desc: "We install premium porcelain, marble, and ceramic tiles with micro-joint precision, flawless waterproofing, and absolute flatness. Additionally, our carpentry team supplies and installs premium solid-wood, flush, and custom fire-rated doors.",
              bullets: [
                "Marble, Porcelain & Ceramic Tile Laying",
                "Bathroom & Wet Area Epoxy Grouting",
                "Solid Wood & Premium Flush Door Fitting",
                "High-End Chrome & Brass Door Ironmongery"
              ],
              icon: DoorOpen,
              img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
              reverse: false
            }
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
                <div className={`lg:col-span-6 flex flex-col gap-6 ${
                  item.reverse ? "lg:order-last" : ""
                }`}>
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
              Every tiling, plastering, or masonry project undergoes a multi-point quality check to guarantee perfect results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Survey & Estimating",
                desc: "We perform digital line-and-level surveys, calculate accurate mortar block ratios, and check tile joints."
              },
              {
                step: "02",
                title: "Detailed Space Planning",
                desc: "Our designing team outlines CAD layouts, detailing woodwork joins, door clearances, and wet area waterproofing."
              },
              {
                step: "03",
                title: "High-End Execution",
                desc: "Our in-house masons and carpentry teams install tiling, lay blocks, mount custom doors, and plaster walls flawlessly."
              },
              {
                step: "04",
                title: "Quality Sign-Off",
                desc: "Every surface is checked with laser leveling instruments for perfect flatness and alignment before hand-over."
              }
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
              Ready to Upgrade Your Building's Interiors?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Submit your property layouts, design blueprints, or technical spec sheets today. Our team provides highly competitive quotes on premium tiling, block masonry, custom joinery, and fit-out packages.
            </p>
            
            <Link
              href="/#contact"
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
