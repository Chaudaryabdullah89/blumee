"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Calendar,
  X,
  ZoomIn,
} from "lucide-react";
import { projects as projectsData, projectCategories as categories } from "@/lib/projects";
import BackgroundImage from "@/app/components/BackgroundImage";





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
        <BackgroundImage
            src="/img/site-under-construction.jpg"
            priority
            className="transition-transform duration-[10s] scale-105"
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
            Completed &{" "}
            <span className="text-brand-gold font-black">Ongoing</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Projects
            </span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            50+ projects delivered and ongoing for leading UAE developers and
            main contractors — floor screeding, interior fit-out, renovation
            and epoxy flooring works across Dubai, Abu Dhabi and Fujairah.
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
                <BackgroundImage
                    src={project.img}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="group-hover/img:scale-105 transition-transform duration-500"
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
              project is verified to meet documented surface, structural and
              finishing benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Surface Regularity",
                metric: "SR1 3mm to SR3 10mm",
                desc: "Every screeded bay is checked with a 2m straightedge and laser level survey, to the class stated in the project specification.",
              },
              {
                title: "Q4 Skimming Standard",
                metric: "Flawless Plaster Skim",
                desc: "Our plastering crews skim walls to a Q4 mirror-smooth finish, ready for paint or specialty wall textures.",
              },
              {
                title: "Manufacturer Accredited",
                metric: "Fosroc, MAPEI, Flowcrete",
                desc: "Registered approved applicator for the epoxy, polyurethane, traffic deck and screed systems we install, executed to manufacturer specification.",
              },
              {
                title: "Moisture & Soundness Tested",
                metric: "100% of Screeded Areas",
                desc: "Level, soundness and moisture testing on every screeded floor before sign-off, with documented handover on every area released.",
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
              Have a Floor Screeding or Fit-Out Project in Mind?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Whether you need volume floor screeding, complete interior
              fit-out, renovation works, or epoxy flooring, our engineers are
              ready to assist.
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
