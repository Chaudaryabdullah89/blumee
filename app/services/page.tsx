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
  Briefcase,
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
            Interior Design &{" "}
            <span className="text-brand-gold font-black">Technical</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Services
            </span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            We are committed to making it simpler and easier for you to access
            interior design, fit-out, and specialized technical services from
            one place. Whether you choose a single service or the complete
            end-to-end package, you can feel confident we will deliver quality
            work on an accurate, cost-managed budget, every time.
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
            From concept and space planning to masonry, tiling, and bespoke
            joinery — we combine design and specialized technical execution into
            one seamless experience.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {[
            {
              title: "Interior Design & Space Planning",
              subtitle: "Concept, 3D Visualization & Layouts",
              desc: "We create inspired, functional layouts customized to your space and requirements. From initial concept drawings, mood boards, and photorealistic 3D renders, to CAD layouts and comprehensive material specifications—our design team sets a solid foundation for your project.",
              bullets: [
                "Concept Development & Mood Boards",
                "2D/3D Space Layout & Renderings",
                "Material & Finish Specifications",
                "Detailed Construction Drawings",
              ],
              icon: Compass,
              img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              title: "Turnkey Fit-Out & Renovation",
              subtitle: "Seamless Commercial & Residential Transformations",
              desc: "Complete design-to-build fit-out and renovation solutions. We manage and execute everything from walls and ceilings to MEP and final decorative finishes, delivering custom-tailored environments stress-free, on time, and on budget.",
              bullets: [
                "Commercial & Office Fit-Outs",
                "Residential Renovations & Refurbishments",
                "MEP & Ceiling Installations",
                "Drywall, Partitions & Glass Work",
              ],
              icon: Layers,
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
              reverse: true,
            },
            {
              title: "Precision Block Masonry",
              subtitle: "Structural & Non-Structural Wall Construction",
              desc: "Professional block masonry work executed with precision and structural integrity. From internal partitions and boundary walls to load-bearing structures, our skilled masons ensure straight, level, and clean brickwork according to exact engineering specifications.",
              bullets: [
                "Concrete Block Wall Construction",
                "Internal Partition & Partitioning Walls",
                "Boundary Walls & Extensions",
                "Precise Mortar Ratios & Alignment",
              ],
              icon: Hammer,
              img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              title: "Professional Plastering & Finishes",
              subtitle: "Smooth, Flawless Internal & External Wall Finishes",
              desc: "Exceptional wall plastering services that provide the perfect base for your final paint or wallpaper. We specialize in high-quality internal and external cement plastering, gypsum rendering, and architectural texturing with laser-straight flatness.",
              bullets: [
                "Internal Gypsum Plastering",
                "External Cement Plastering & Rendering",
                "Crack Repair & Wall Leveling",
                "Decorative & Textured Finishes",
              ],
              icon: Paintbrush,
              img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
              reverse: true,
            },
            {
              title: "Custom Tiling & Stonework",
              subtitle: "High-End Flooring, Wall Tiling & Stone Accents",
              desc: "Premium tile installation services for bathrooms, kitchens, living areas, and commercial spaces. Our team handles everything from standard ceramic tiles to large-format porcelain, marble, granite, and intricate mosaic backsplashes with perfect alignment and minimal joints.",
              bullets: [
                "Large-Format Porcelain & Ceramic Tiling",
                "Marble, Granite & Natural Stone Slabs",
                "Bathroom & Kitchen Wet Area Tiling",
                "Intricate Mosaic & Backsplash Patterns",
              ],
              icon: Grid,
              img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
              reverse: false,
            },
            {
              title: "Bespoke Joinery & Doors",
              subtitle: "Custom Timber Fabrication & Door Installation",
              desc: "Expert craftsmanship in woodwork, joinery, and door installations. We manufacture and install custom wardrobes, cabinets, kitchen cupboards, and high-quality timber doors that match your architectural style and offer superior longevity.",
              bullets: [
                "Bespoke Timber Door Sets & Frames",
                "Custom Wardrobes & Kitchen Cabinets",
                "Wooden Wall Paneling & Cladding",
                "Precision Fit & Hardware Installation",
              ],
              icon: DoorOpen,
              img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
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
              Every tiling, plastering, or masonry project undergoes a
              multi-point quality check to guarantee perfect results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Survey & Estimating",
                desc: "We perform digital line-and-level surveys, calculate accurate mortar block ratios, and check tile joints.",
              },
              {
                step: "02",
                title: "Detailed Space Planning",
                desc: "Our designing team outlines CAD layouts, detailing woodwork joins, door clearances, and wet area waterproofing.",
              },
              {
                step: "03",
                title: "High-End Execution",
                desc: "Our in-house masons and carpentry teams install tiling, lay blocks, mount custom doors, and plaster walls flawlessly.",
              },
              {
                step: "04",
                title: "Quality Sign-Off",
                desc: "Every surface is checked with laser leveling instruments for perfect flatness and alignment before hand-over.",
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
              premium tiling, block masonry, custom joinery, and fit-out
              packages.
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
