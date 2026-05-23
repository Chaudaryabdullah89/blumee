"use client";

import React, { use } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck, 
  Building,
  User,
  Clock,
  Wrench
} from "lucide-react";

// Synchronized projects dataset
const projectsData = [
  {
    id: 1,
    title: "Executive Office Fit-Out",
    category: "Fit-Out",
    client: "Al Futtaim Offices",
    location: "Business Bay, Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    desc: "Complete interior fit-out for corporate headquarters. Structured precise drywall partitions, flawless smooth plastering, and custom oak skirting.",
    technicalDetails: "Constructed premium drywall cabins for executive suites using sound-damping insulated gypsum boards. Applied a three-coat skimming process to achieve a flawless Q4 plaster finish ready for premium paint. Tailored custom oak wood skirtings and skirting frames at floor borders for a sleek modern finish.",
    duration: "45 Days",
    auditStatus: "Fully Compliant (Dubai Municipality Approved)",
    scope: [
      "Custom Gypsum Ceiling Grids",
      "Sound-Insulated Cabins & Glass Partitions",
      "Venetian Texture Accent Wall Plastering",
      "Premium Oak Skirting & Custom Carpentry"
    ]
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa Tiling",
    category: "Tiling",
    client: "Private Elite Villa",
    location: "Palm Jumeirah, Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
    desc: "Laid over 650 sqm of premium Italian Calacatta marble tiles with absolute laser-level flatness, micro-joint epoxy grouting, and high-grade wet-area waterproofing.",
    technicalDetails: "Installed large-format 120x120cm Italian Calacatta marble panels. Checked tile coordinate flatness using advanced laser leveling equipment to maintain a tolerance of under +/- 0.5mm. Implemented a liquid waterproof membrane under wet areas and utilized premium chemical-resistant epoxy grout joints to prevent staining or water leakage.",
    duration: "60 Days",
    auditStatus: "100% Quality Audited & Verified",
    scope: [
      "Subfloor Leveling & Screed Works",
      "Under-Tile Polyurethane Waterproofing",
      "Laser-Guided Large-Format Marble Layout",
      "Stain-Resistant Epoxy Grout Injections"
    ]
  },
  {
    id: 3,
    title: "Bespoke Penthouse Joinery & Doors",
    category: "Carpentry",
    client: "Marina Heights Penthouse",
    location: "Dubai Marina, Dubai",
    year: "2023",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    desc: "Supply and seamless installation of custom fire-rated solid ash doors, architraves, flush internal doors, and walk-in wood closets.",
    technicalDetails: "Constructed and fit premium solid-ash wooden door systems with reinforced frames and integrated neoprene rubber seals for maximum sound-proofing. Supplied and mounted bespoke walk-in wardrobes with soft-closing oak-veneered drawer guides and concealed LED illumination slots.",
    duration: "30 Days",
    auditStatus: "Civil Defense Compliant",
    scope: [
      "Solid Ash Wood Frame Fabrication",
      "Neoprene Sound-Proofing Gaskets Installation",
      "Premium Brass Mortise Lock Mounts",
      "Hidden LED Closet Shelving Joinery"
    ]
  },
  {
    id: 4,
    title: "Commercial Showroom Block Work",
    category: "Masonry",
    client: "Al Barsha Automotive Plaza",
    location: "Al Barsha 1, Dubai",
    year: "2023",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    desc: "Built precise heavy-duty masonry boundary and partition block walls utilizing reinforced lintels and sound-damping mortar matrices.",
    technicalDetails: "Built durable masonry division walls using heavy-duty 200mm solid concrete block units (CMU). Placed high-tensile steel wall ties at every third course block to secure structural integrity with columns, and designed expansion joints every 6 meters to prevent thermal cracks under high summer temperatures.",
    duration: "25 Days",
    auditStatus: "Approved by Civil Engineers",
    scope: [
      "Heavy-Duty 200mm CMU Block Masonry",
      "High-Tensile Galvanized Wall Ties",
      "Structural Concrete Lintel Castings",
      "Thermal Expansion Joint Detailing"
    ]
  },
  {
    id: 5,
    title: "High-End Retail Store Fit-Out",
    category: "Fit-Out",
    client: "Vogue Boutique",
    location: "Downtown Dubai",
    year: "2024",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    desc: "Premium boutique setup featuring custom brass partition frames, flawless venetian plaster textures, and micro-bevel porcelain floor tiling.",
    technicalDetails: "Coordinated complete retail interior setup. Applied venetian textured plastering to feature walls using layered trowel polishing. Fitted premium micro-bevel large-format porcelain floor tiles with zero-lip tiling clips, and fabricated custom brass frames to partition display units.",
    duration: "40 Days",
    auditStatus: "Retail District Compliant",
    scope: [
      "Layered Venetian Plaster Polishing",
      "Zero-Lip Porcelain Floor Tiling",
      "Custom Brass Decorative Partitions",
      "Low-Voltage Accent Lighting Integration"
    ]
  },
  {
    id: 6,
    title: "Corporate Boardroom Joinery & Plaster",
    category: "Carpentry",
    client: "Apex Financial Center",
    location: "DIFC, Dubai",
    year: "2023",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    desc: "Installed high-end walnut boardroom wall panels, acoustic wood partitions, double-leaf office entry doors, and flawless paint finish plastering.",
    technicalDetails: "Fitted premium wood paneling using walnut veneers and acoustic underlay sheets to ensure quiet boardroom spaces. Crafted and fit solid walnut double-leaf entrance doors with security mortise cylinders, and completed high-precision wall plastering to receive custom matte paint.",
    duration: "35 Days",
    auditStatus: "DIFC Facilities Approved",
    scope: [
      "Acoustic Walnut Veneer Paneling",
      "Double-Leaf Solid Entry Doors",
      "Precise Leveling Drywall Bases",
      "Flawless Plaster Prep & Primer Works"
    ]
  }
];

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id, 10);
  
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex-1 w-full bg-[#FCFCFD] min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-sans font-black text-3xl text-brand-navy">Project Not Found</h1>
        <p className="text-slate-500 text-sm max-w-md text-center">
          The project you are looking for does not exist or has been archived. Check our other selected works.
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
              Year {project.year}
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
                Project Overview & Technical Narrative
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy uppercase">
                Technical Execution & Materials Used
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {project.technicalDetails}
              </p>
            </div>

            {/* Scope of Work Bulletpoints */}
            <div className="flex flex-col gap-4 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
              <h4 className="font-sans font-black text-xs uppercase tracking-widest text-brand-navy mb-1 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-gold" />
                Technical Scope of Works
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
                  { label: "Client Partner", value: project.client, icon: User },
                  { label: "Location Site", value: project.location, icon: MapPin },
                  { label: "Building Category", value: `${project.category} Works`, icon: Building },
                  { label: "Timeframe / Duration", value: project.duration, icon: Clock },
                  { label: "Technical Standard", value: project.auditStatus, icon: ShieldCheck }
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
            How We Verified Compliance On This Project
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            For this build, our QA inspection team certified every tiling layout, drywall partition coordinate, carpentry trim, and masonry block density before handover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                01
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Laser Level Alignment
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Checked every tile joint and masonry boundary wall using digital laser levelling, verifying tolerances are fully within Dubai Municipality code limits.
              </p>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                02
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Moisture & Seal Audits
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Performed under-tile moisture inspections on wet zones to guarantee that the primary polyurethane waterproofing membranes are completely seamless.
              </p>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                03
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Joinery & Clearances
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Verified door set plumb and clearances using precision gap gauges, ensuring fire-rated neoprene soundproof seals are fully compressed upon latching.
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
              Ready to Upgrade Your Space to This Standard?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Contact our engineering and carpentry coordination managers to review your interior layouts, partition dimensions, or customized tiling requirements.
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
