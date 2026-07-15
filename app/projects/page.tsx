"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Layers,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Search,
  Filter,
  X,
  ZoomIn,
} from "lucide-react";

// Premium projects dataset mapped to high-end Dubai technical service categories
const projectsData = [
  {
    id: 1,
    title: "Executive Office Fit-Out",
    category: "Fit-Out & Renovation",
    client: "Al Futtaim Offices",
    location: "Business Bay, Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    desc: "Complete interior fit-out for corporate headquarters. Structured precise drywall partitions, flawless smooth plastering, and custom oak skirting.",
    works: [
      "Drywall Partitions",
      "Plaster Finishes",
      "Acoustic Ceilings",
      "Wood Trim Joinery",
    ],
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa Tiling",
    category: "Tiling & Stonework",
    client: "Private Elite Villa",
    location: "Palm Jumeirah, Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    desc: "Laid over 650 sqm of premium Italian Calacatta marble tiles with absolute laser-level flatness, micro-joint epoxy grouting, and high-grade wet-area waterproofing.",
    works: [
      "Italian Marble Laying",
      "Epoxy Grouting",
      "Shower Waterproofing",
      "Stair Cladding",
    ],
  },
  {
    id: 3,
    title: "Bespoke Penthouse Joinery & Doors",
    category: "Bespoke Joinery & Doors",
    client: "Marina Heights Penthouse",
    location: "Dubai Marina, Dubai",
    year: "2023",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    desc: "Supply and seamless installation of custom fire-rated solid ash doors, architraves, flush internal doors, and walk-in wood closets.",
    works: [
      "Solid Ash Door Fitting",
      "Bespoke Architraves",
      "Walk-in Wardrobes",
      "Chrome Hardware",
    ],
  },
  {
    id: 4,
    title: "Commercial Showroom Block Work",
    category: "Block Masonry",
    client: "Al Barsha Automotive Plaza",
    location: "Al Barsha 1, Dubai",
    year: "2023",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    desc: "Built precise heavy-duty masonry boundary and partition block walls utilizing reinforced lintels and sound-damping mortar matrices.",
    works: [
      "Solid Block Work",
      "Reinforced Lintels",
      "Boundary Brick Masonry",
      "Mortar Line Audits",
    ],
  },
  {
    id: 5,
    title: "High-End Retail Store Fit-Out",
    category: "Fit-Out & Renovation",
    client: "Vogue Boutique",
    location: "Downtown Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
    desc: "Premium boutique setup featuring custom brass partition frames, flawless venetian plaster textures, and micro-bevel porcelain floor tiling.",
    works: [
      "Brass Framing",
      "Venetian Plastering",
      "Porcelain Tiling",
      "Custom Door Glass",
    ],
  },
  {
    id: 6,
    title: "Luxury Residential Plaster Finishes",
    category: "Plastering & Finishes",
    client: "Signature Mansion",
    location: "Jumeirah Golf Estates, Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    desc: "Delivered flawless gypsum skimming and micro-cement plaster wall rendering across a 5-bedroom luxury mansion with laser-straight alignment checks.",
    works: [
      "Gypsum Skimming",
      "Micro-Cement Finish",
      "Laser Alignment Checks",
      "Anti-Crack Meshing",
    ],
  },
  {
    id: 7,
    title: "Boutique Cafe Space Planning",
    category: "Interior Design & Space Planning",
    client: "The Grind Coffee Co.",
    location: "City Walk, Dubai",
    year: "2023",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    desc: "Provided detailed 3D space layouts, building permit blueprints, and mood boards to optimize visual flow and maximize seating capacity.",
    works: [
      "3D Space Layouts",
      "Municipality Approvals",
      "Mood Boards",
      "Material Spec Sheets",
    ],
  },
];

const categories = [
  "All",
  "Interior Design & Space Planning",
  "Fit-Out & Renovation",
  "Block Masonry",
  "Plastering & Finishes",
  "Tiling & Stonework",
  "Bespoke Joinery & Doors",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

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
              Portfolio
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter text-white uppercase drop-shadow-lg max-w-4xl">
            Our Selected{" "}
            <span className="text-brand-gold font-black">Technical</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Achievements
            </span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            Explore our portfolio of premium tiling, precise block work,
            high-end wooden door fittings, plastering, and commercial interior
            fit-outs delivered across Dubai.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. FILTER & PORTFOLIO GRID
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        {/* Filter Navigation Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16 border-b border-slate-100 pb-8">
          <div className="w-full lg:w-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth">
            <div className="flex items-center gap-2 pb-2 lg:pb-0 whitespace-nowrap min-w-full lg:min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 border shrink-0 ${
                    activeCategory === cat
                      ? "bg-brand-navy border-brand-navy text-white shadow-md"
                      : "bg-white border-slate-200 text-[#475569] hover:text-brand-navy hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 lg:self-center self-end">
            Showing{" "}
            <span className="text-brand-navy font-black">
              {filteredProjects.length}
            </span>{" "}
            Premium Projects
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Project Image Frame */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[4/3] overflow-hidden border-b border-black/[0.03] shrink-0 cursor-zoom-in group/img"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover/img:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${project.img}')`,
                  }}
                />
                <div className="absolute inset-0 bg-[#0A1128]/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white shadow-lg transform scale-90 group-hover/img:scale-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                {/* Location Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-white/40 shadow-sm flex items-center gap-1.5 z-10">
                  <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                  <span className="font-sans font-extrabold text-[10px] text-brand-navy uppercase tracking-wider">
                    {project.location}
                  </span>
                </div>
                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-[#FCFCFD] font-sans font-bold text-[10px] uppercase tracking-widest rounded-full shadow-sm border border-brand-gold/20 z-10">
                  {project.category}
                </span>
              </div>

              {/* Project Card Info */}
              <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      {project.client}
                    </span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>
                  <Link
                    href={`/projects/${project.title.replace(/\s+/g, "-")}`}
                  >
                    <h3 className="font-sans font-black text-lg md:text-xl text-brand-navy hover:text-brand-gold transition-colors duration-200 cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                </div>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Technical Works Done (Tag badges) */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mt-2">
                  {project.works.map((w, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-[#475569] font-sans font-semibold text-[10px] uppercase tracking-wider rounded-md"
                    >
                      {w}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end pt-2 mt-auto">
                  <Link
                    href={`/projects/${project.title.replace(/\s+/g, "-")}?projectid=${project.id}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-brand-accent tracking-wider hover:underline group/link"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. TECHNICAL STANDARDS & QUALITY ASSURANCE
      ───────────────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-black/[0.04] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Quality Assurance
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
              Technical Standards &amp; Snag-Free Execution
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              We separate ourselves through precise civil execution. Every
              project is certified to meet absolute structural and finishing
              benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "BS 5385 Tiling Standards",
                metric: "< 0.5mm Tolerances",
                desc: "We lay large-format porcelain and Italian marble with absolute flat leveling. Zero floor lippage, precise subfloor screed layouts, and epoxy grouting.",
              },
              {
                title: "Q4 Skimming Standard",
                metric: "Flawless PlasterSkim",
                desc: "Our plastering crews skim walls to a perfect Q4 mirror-smooth status under cross-lighting, eliminating all visible joints or imperfections.",
              },
              {
                title: "Civil Defense Certified",
                metric: "60-90 Min Fire Doors",
                desc: "Every bespoke door set is engineered in-house to DCD fire-safety guidelines, complete with neoprene acoustic drop seals and drop down gaskets.",
              },
              {
                title: "Reinforced Block Masonry",
                metric: "High-Tensile Integrity",
                desc: "All block walls are laid with heavy-duty CMU blocks, structural lintels, expansion joints, and galvanized steel ties for permanent crack-prevention.",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-black/[0.05] p-8 flex flex-col gap-4 shadow-sm hover-float transition-all duration-300 animate-fade-in"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black tracking-widest uppercase text-brand-gold">
                    {stat.metric}
                  </span>
                  <h3 className="font-sans font-black text-lg text-brand-navy uppercase tracking-tight">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {stat.desc}
                </p>
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
              Collaborate
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
              Have a Custom Technical Project in Mind?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Whether you need premium marble tiling, complete office partition
              block work, custom joinery, or complete fit-outs, our engineers
              are ready to assist.
            </p>

            <Link
              href="/#contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stunning Interactive Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1128]/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#FCFCFD] rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-brand-navy shadow-md transition-all border border-black/[0.05]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Big Image */}
            <div className="relative w-full md:w-3/5 min-h-[30vh] md:min-h-0 bg-slate-900 flex items-center overflow-hidden">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 px-3 py-1 bg-brand-gold text-white font-sans font-bold text-[10px] uppercase tracking-widest rounded-full shadow-sm">
                {selectedProject.category}
              </span>
            </div>

            {/* Right Column: Project Technical Case Details */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                  Client: {selectedProject.client}
                </span>
                <h3 className="font-sans font-black text-xl md:text-2xl text-brand-navy uppercase leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-semibold uppercase mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-navy" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-1.5">
                  Technical Specifications
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <h4 className="font-sans font-bold text-xs text-brand-navy uppercase tracking-wider">
                  Professional Scope of Work:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.works.map((w, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-[#475569] font-sans font-semibold text-[9px] md:text-[10px] uppercase tracking-wider rounded-md"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
