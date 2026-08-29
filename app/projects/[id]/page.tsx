"use client";

import React, { use } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Clock,
  Wrench,
} from "lucide-react";

// Real completed & ongoing projects, from our pre-qualification submittal record
const projectsData = [
  {
    id: 1,
    title: "Dragon Palace Hotel",
    category: "Floor Screeding & Fit-Out",
    client: "Mr. Peng Hung",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/projects/screed-team-pour.jpg",
    desc: "Demolition, floor screeding and full interior fit-out of 80 apartments — one of our largest single-site mobilisations to date.",
    technicalDetails:
      "Our screeding division cleared and demolished existing floor finishes, then placed sand-cement screeds to falls and datum across all 80 apartments using laser-guided levelling. Interior fit-out followed directly behind the screeding programme to keep the overall handover on schedule.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: [
      "Demolition of Existing Finishes",
      "Sand-Cement Floor Screeding",
      "80-Apartment Interior Fit-Out",
      "Level & Moisture Test Records",
    ],
  },
  {
    id: 2,
    title: "Chorisia 1 & Chorisia 2",
    category: "Floor Screeding & Fit-Out",
    client: "Al Barari",
    location: "Al Barari, Dubai",
    year: "Completed",
    img: "/projects/screed-rebar-columns.jpg",
    desc: "Floor screeding and interior fit-out across 110 villas, resourced with dedicated screeding crews for villa-by-villa sequencing.",
    technicalDetails:
      "Delivered as a large-scale, repetitive villa rollout — our screeding division sequenced bay planning and phased pours villa-by-villa, keeping following trades moving without waiting on a full floor plate, followed by full interior fit-out on each handed-over unit.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: [
      "110 Villas Resourced",
      "Villa-by-Villa Screed Sequencing",
      "Interior Fit-Out",
      "Documented Handover per Villa",
    ],
  },
  {
    id: 3,
    title: "Wilton Park Residence",
    category: "Interior Fit-Out",
    client: "Ellington Properties",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/projects/gypsum-ceiling-medallion.jpg",
    desc: "Interior work across a G+2P+12 residential building — floor screeding, plaster, tile, ceiling and paint.",
    technicalDetails:
      "A full interior works package across a ground-plus-twelve residential tower: floor screeding to receive tile finishes, wall plastering to a Q4 skim, tiling, false ceiling installation and final decorative painting — coordinated floor by floor.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: [
      "Floor Screeding",
      "Plaster & Tile Works",
      "False Ceiling Installation",
      "Decorative Painting",
    ],
  },
  {
    id: 4,
    title: "Himlton House Residence",
    category: "Floor Screeding & Fit-Out",
    client: "Ellington Properties",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/projects/screed-finished-corridor.jpg",
    desc: "Floor screeding and interior fit-out for a G+2P+5 residential building.",
    technicalDetails:
      "Floor screeding placed to falls and datum across the building's residential floors, followed by our interior fit-out team completing finishes ready for handover.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: ["Floor Screeding", "Interior Fit-Out", "Handover Pack Issued"],
  },
  {
    id: 5,
    title: "78 Villas, Green Wood",
    category: "Interior Fit-Out",
    client: "Damac Property",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/projects/gypsum-ceiling-unfinished.jpg",
    desc: "Interior work across 78 villas (G+1 & G+2) — floor screeding, plaster, tile, paint and ceiling.",
    technicalDetails:
      "A repetitive villa interior works package across 78 units — floor screeding, wall plastering, tiling, false ceilings and painting sequenced across the Green Wood community to hold programme across both G+1 and G+2 villa types.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: [
      "78 Villas (G+1 & G+2)",
      "Floor Screeding",
      "Plaster, Tile & Paint",
      "Ceiling Installation",
    ],
  },
  {
    id: 6,
    title: "2B+G+6 Residential Building",
    category: "Renovation Works",
    client: "Mr. Omar Essa Seed Essa Al Falasi",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/projects/screed-rebar-night.jpg",
    desc: "Demolition, floor screeding and renovation work for a private residential building.",
    technicalDetails:
      "Existing finishes were demolished and floors re-screeded to falls and datum, with renovation works carried out to bring the building back to a sound, serviceable standard.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: ["Demolition", "Floor Re-Screeding", "Building Renovation"],
  },
  {
    id: 7,
    title: "Boulevard Heights",
    category: "Epoxy & Resin Flooring",
    client: "Target Engineering (Emaar)",
    location: "Downtown Dubai",
    year: "Completed",
    img: "/projects/screed-finished-corridor.jpg",
    desc: "Traffic deck coating — supply and application on the Boulevard Heights main contract works.",
    technicalDetails:
      "Supplied and applied a traffic deck coating system to the Boulevard Heights main contract works, submitted as a technical submittal with method statement and inspection test plan reviewed by GCI on behalf of consultant Holfords Project Management.",
    status: "Completed",
    auditStatus:
      "Approved as noted — 14 Mar 2024 (Ref. EBH-MS-C-108-09)",
    scope: [
      "Traffic Deck Coating Supply",
      "Method Statement & ITP Submittal",
      "Application under Consultant Review",
    ],
  },
  {
    id: 8,
    title: "IKEA Center, Delma Mall",
    category: "Floor Screeding & Fit-Out",
    client: "Pinnacle Interior",
    location: "Abu Dhabi, UAE",
    year: "Completed",
    img: "/projects/screed-site-pour.jpg",
    desc: "Floor screeding and interior fit-out work for the IKEA Center at Delma Mall.",
    technicalDetails:
      "Floor screeding placed at volume across the retail floor plate ahead of fit-out, with our interior fit-out team completing the works for the IKEA Center at Delma Mall in Abu Dhabi.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: ["Floor Screeding", "Retail Interior Fit-Out"],
  },
  {
    id: 9,
    title: "IKEA Center, Fujairah",
    category: "Floor Screeding & Fit-Out",
    client: "Pinnacle Interior",
    location: "Fujairah, UAE",
    year: "Completed",
    img: "/projects/screed-shuttered-bay.jpg",
    desc: "Floor screeding and interior fit-out work for the IKEA Center in Fujairah.",
    technicalDetails:
      "Floor screeding and interior fit-out delivered for the IKEA Center in Fujairah, extending our screeding division's reach beyond Dubai to the Northern Emirates.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: ["Floor Screeding", "Retail Interior Fit-Out"],
  },
  {
    id: 10,
    title: "Head Office — Ellington Properties",
    category: "Renovation Works",
    client: "Ellington Properties",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/projects/screed-corner-haunching.jpg",
    desc: "Floor screeding and office renovation for the Ellington Properties head office.",
    technicalDetails:
      "Floor screeding and a full office renovation package delivered for the Ellington Properties head office, coordinated to minimise disruption to an occupied commercial building.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: ["Floor Screeding", "Office Renovation"],
  },
  {
    id: 11,
    title: "Rocambolseco Fit-Out",
    category: "Interior Fit-Out",
    client: "Ducto Interior",
    location: "Dubai, UAE",
    year: "Completed",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    desc: "Screed, block, plaster, tile, painting and ceiling works delivered for Ducto Interior.",
    technicalDetails:
      "A full specialist trade package delivered as a direct fit-out partner to Ducto Interior — floor screeding, block work, plastering, tiling, painting and ceiling installation coordinated under one programme.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: [
      "Floor Screeding & Block Work",
      "Plastering & Tiling",
      "Painting & Ceiling Installation",
    ],
  },
  {
    id: 12,
    title: "Executive Office — Al Futtaim",
    category: "Floor Screeding & Fit-Out",
    client: "Ducto Interior",
    location: "Dubai, UAE",
    year: "Completed",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    desc: "Demolition, floor screeding and interior fit-out for an Al Futtaim executive office, delivered via Ducto Interior.",
    technicalDetails:
      "Existing finishes were demolished, floors re-screeded to a level base, and a complete interior fit-out delivered for the Al Futtaim executive office as a direct fit-out partner to Ducto Interior.",
    status: "Completed",
    auditStatus: "Delivered under Blume's Quality Policy Plan",
    scope: ["Demolition", "Floor Screeding", "Executive Office Fit-Out"],
  },
  {
    id: 13,
    title: "Al Jadaf 326-1667 — Floor Finishes",
    category: "Epoxy & Resin Flooring",
    client: "CRC — Construction & Reconstruction Eng. Co.",
    location: "Al Jadaf, Dubai",
    year: "Completed",
    img: "/projects/screed-mesh-membrane.jpg",
    desc: "Approved applicator for floor finishes works to basements on a Commercial & Residential 2B+G+14+HC development.",
    technicalDetails:
      "Reviewed and approved as applicator for floor finishes works to the basement levels of Plot 326-1667, Al Jadaf, under consultant National Engineering Bureau / Arcadis, with main contractor CRC.",
    status: "Completed",
    auditStatus:
      "Approved as noted — received 17 Nov 2024 (Ref. CRC/100061/SA/048)",
    scope: [
      "Approved Applicator Status",
      "Basement Floor Finishes",
      "NEB / Arcadis Reviewed",
    ],
  },
  {
    id: 14,
    title: "Al Jadaf 326-1300 — Flooring Works",
    category: "Epoxy & Resin Flooring",
    client: "CRC — Construction & Reconstruction Eng. Co.",
    location: "Al Jadaf, Dubai",
    year: "Completed",
    img: "/projects/screed-rebar-night.jpg",
    desc: "Approved flooring applicator for a Commercial & Residential 2B+G+9+HC development.",
    technicalDetails:
      "Confirmed as approved sub-contractor / applicator for flooring works on Plot 326-1300, Al Jadaf, under consultant National Engineering Bureau, with main contractor CRC.",
    status: "Completed",
    auditStatus: "Sub-contractor / applicator for flooring works",
    scope: ["Approved Applicator Status", "Flooring Works"],
  },
  {
    id: 15,
    title: "Al Badaa Residential",
    category: "Epoxy & Resin Flooring",
    client: "Al Kaitoob Building Contracting",
    location: "Al Satwa, Dubai",
    year: "Completed",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    desc: "Epoxy floor coating — Fosroc approved applicator — for a 3B+G+9+Gym residential building.",
    technicalDetails:
      "Pre-qualified and approved as a Fosroc applicator for epoxy floor coating systems on the Al Badaa Residential development (3B+G+9+Gym) under consultant Dewan Architects + Engineers, with main contractor Al Kaitoob Building Contracting.",
    status: "Completed",
    auditStatus:
      "Approved as noted — 15 Jan 2024 (Ref. P128-KCC-CV-GEN-PQ-072)",
    scope: [
      "Fosroc Approved Applicator",
      "Epoxy Floor Coating",
      "Dewan Architects Reviewed",
    ],
  },
  {
    id: 16,
    title: "Souq Al Kabeer Car Parking",
    category: "Epoxy & Resin Flooring",
    client: "Alghanim International / ORC Contracting",
    location: "Dubai, UAE",
    year: "Completed",
    img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200",
    desc: "Epoxy flooring and road marking for a commercial and robotic car parking building.",
    technicalDetails:
      "Approved as alternative subcontractor for epoxy flooring and road marking works on the Souq Al Kabeer commercial and robotic car parking building, under consultant Al Shandagha Architects & Engineering.",
    status: "Completed",
    auditStatus:
      "Approved with comments — 28 Feb 2026 (Ref. AGUPR03/2024/GAR/071)",
    scope: ["Epoxy Flooring", "Road & Line Marking"],
  },
  {
    id: 17,
    title: "Zabeel Feedmill",
    category: "Epoxy & Resin Flooring",
    client: "Fujairah National Construction Co.",
    location: "Fujairah, UAE",
    year: "Completed",
    img: "/projects/screed-site-pour.jpg",
    desc: "Epoxy flooring over screeded concrete works.",
    technicalDetails:
      "Pre-qualified for epoxy flooring by screeds concrete works on the Zabeel Feedmill project, under consultants AE7 Consultancy Services / KEO International, with main contractor Fujairah National Construction Co.",
    status: "Completed",
    auditStatus:
      "Approved as noted — 15 Oct 2024 (Ref. FNC/6345/PQ036/00)",
    scope: ["Screeded Concrete Base", "Epoxy Flooring Application"],
  },
  {
    id: 18,
    title: "Hang Out — Mall of the Emirates",
    category: "Interior Fit-Out",
    client: "Ducto Interior",
    location: "Dubai, UAE",
    year: "Ongoing",
    img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=1200",
    desc: "Plaster, screed, painting and demolition works currently in progress at the Mall of the Emirates.",
    technicalDetails:
      "Currently mobilised on site delivering plaster, screed, painting and demolition works for the Hang Out fit-out at Mall of the Emirates, as a direct trade partner to Ducto Interior.",
    status: "Ongoing",
    auditStatus: "In progress — active work front",
    scope: ["Demolition", "Floor Screeding", "Plaster & Painting"],
  },
  {
    id: 19,
    title: "TECOM Office Building",
    category: "MEP & Waterproofing",
    client: "Tamdeen — TECOM Investments",
    location: "Dubai, UAE",
    year: "Ongoing",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    desc: "Water tank waterproofing in progress for a 3B+G+6 office building.",
    technicalDetails:
      "Water tank waterproofing works in progress for the TECOM Office Building (3B+G+6), delivered for developer Tamdeen — TECOM Investments.",
    status: "Ongoing",
    auditStatus: "In progress — active work front",
    scope: ["Water Tank Waterproofing"],
  },
  {
    id: 20,
    title: "Canal Residence West Ph. II",
    category: "Renovation Works",
    client: "United Engineering Construction (UNEC) LLC",
    location: "Dubai Sports City, Dubai",
    year: "Ongoing",
    img: "/projects/screed-corner-haunching.jpg",
    desc: "Concrete crack repair to slabs and walls in progress.",
    technicalDetails:
      "Site report, material technical submittal and method statement approved for concrete crack repair (horizontal & vertical, slabs and walls) on Canal Residence West Phase II at Dubai Sports City, under main contractor UNEC.",
    status: "Ongoing",
    auditStatus:
      "Approved with comments — 15 May 2024 (Ref. UNEC/J-259/DT/SCW/003)",
    scope: ["Concrete Crack Repair", "Slabs & Walls", "Method Statement Approved"],
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const projectId = resolvedParams.id.replace(/-/g, " ");

  const project = projectsData.find(
    (p) =>
      p.title.toLowerCase() === projectId.toLowerCase() ||
      p.id.toString() === resolvedParams.id,
  );

  if (!project) {
    return (
      <div className="flex-1 w-full bg-[#FCFCFD] min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-sans font-black text-3xl text-brand-navy">
          Project Not Found
        </h1>
        <p className="text-slate-500 text-sm max-w-md text-center">
          The project you are looking for does not exist or has been archived.
          Check our other selected works.
        </p>
        <Link
          href="/projects"
          className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. PARALLAX HERO BANNER
      ───────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('${project.img}')`,
          }}
        />
        {/* Navy dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFD] via-[#0A1128]/70 to-[#0A1128]/30" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-10 flex flex-col gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit text-white hover:bg-white hover:text-brand-navy transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-brand-gold text-white font-sans font-bold text-[10px] uppercase tracking-widest rounded-full border border-brand-gold/20 shadow-sm">
              {project.category}
            </span>
          </div>

          <h1 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-brand-navy uppercase tracking-tight leading-none drop-shadow-md">
            {project.title}
          </h1>

          <div className="flex gap-4 items-center text-slate-700 text-xs md:text-sm font-semibold mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-brand-gold" />
              {project.location}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-brand-gold" />
              {project.status}
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. DETAILED NARRATIVE & METADATA CARD
      ───────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Extensive Case Study Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-sans font-black text-2xl md:text-3xl text-brand-navy uppercase tracking-tight border-l-4 border-brand-gold pl-4">
                Project Overview
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy uppercase">
                Technical Execution
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {project.technicalDetails}
              </p>
            </div>

            {/* Scope of Work Bulletpoints */}
            <div className="flex flex-col gap-4 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
              <h4 className="font-sans font-black text-xs uppercase tracking-widest text-brand-navy mb-1 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-gold" />
                Scope of Works
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.scope.map((item, idx) => (
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
                Project Key Facts
              </h3>

              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Client / Contractor",
                    value: project.client,
                    icon: User,
                  },
                  {
                    label: "Location",
                    value: project.location,
                    icon: MapPin,
                  },
                  {
                    label: "Category",
                    value: project.category,
                    icon: Building,
                  },
                  {
                    label: "Project Status",
                    value: project.status,
                    icon: Clock,
                  },
                  {
                    label: "Verification",
                    value: project.auditStatus,
                    icon: ShieldCheck,
                  },
                ].map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
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
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. ACCORDION / ADDITIONAL SPECS — Structural Compliance
      ───────────────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-black/[0.04] py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col gap-6 items-center">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Quality Assurance
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-brand-navy uppercase tracking-tight">
            How We Verified Quality On This Project
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Quality is planned before work starts, verified during execution
            and evidenced at handover — not inspected in afterwards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                01
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Level & Survey Checks
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Straightedge and laser level checks recorded bay by bay against
                the specified surface regularity class.
              </p>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                02
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Soundness & Moisture Testing
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Drop-hammer soundness checks and moisture testing verified
                before any moisture-sensitive finish is laid.
              </p>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                03
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Documented Handover
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Joint inspection, snagging and a full handover pack with test
                records issued and accepted for every area released.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. FOOTER CALL TO ACTION — Sleek Card
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
              Ready to Start a Project Like This?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Contact our engineering and screeding coordination team to
              review your floor plans, screed build-up requirements, or
              fit-out specifications.
            </p>

            <Link
              href="/#contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Consult an Engineer
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
