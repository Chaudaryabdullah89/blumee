import type { LucideIcon } from "lucide-react";
import {
  Layers,
  Ruler,
  Hammer,
  Compass,
  Zap,
  Paintbrush,
} from "lucide-react";

// Single source of truth for the service catalog.
// Consumed by the service detail route, generateMetadata and the sitemap.

export interface Service {
  title: string;
  subtitle: string;
  heroImg: string;
  desc: string;
  icon: LucideIcon;
  timeframe: string;
  compliance: string;
  standard: string;
  materials: string;
  technicalGuide: string;
  keyMetrics: { label: string; value: string }[];
  milestones: string[];
}

export const services: Record<string, Service> = {
  screeding: {
    title: "Floor Screeding",
    subtitle: "Bonded, Unbonded, Floating & Heated Systems",
    heroImg:
      "/img/screeding-powerfloat.jpg",
    desc: "From bonded and unbonded sand-cement screeds to floating, heated and self-levelling systems, we deliver the flat, sound, correctly cured floor base that every finish above it depends on — at volume, and to programme.",
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
  "block-work": {
    title: "Block Work & Masonry",
    subtitle: "Structural & Non-Structural Wall Construction",
    heroImg:
      "/img/blockwork-mason.jpg",
    desc: "Concrete block walls, internal partitions, boundary walls and structural elements built with precision and structural integrity — straight, level and plumb, to exact engineering specifications.",
    icon: Hammer,
    timeframe: "Sequenced ahead of plaster and MEP first fix",
    compliance: "Structural Engineering Approved",
    standard: "Vertical Plumb & Reinforced Lintel Detailing",
    materials:
      "Concrete masonry units (CMU), thermal and solid blocks, galvanized wall ties, and controlled-ratio cement mortars.",
    technicalGuide:
      "Our masonry crews set out wall coordinates from CAD drawings, pin galvanized ties to columns, lay block courses to a controlled mortar ratio with continuous line-and-level checks, and cast reinforced concrete lintels over every opening — with movement joints detailed to control thermal cracking.",
    keyMetrics: [
      { label: "Wall Systems", value: "Partitions, Boundary & Structural Walls" },
      { label: "Openings", value: "Reinforced Cast Lintels" },
      { label: "Control", value: "Continuous Line & Level Checks" },
    ],
    milestones: [
      "Coordinate Setting-Out & Chalk Lining",
      "Wall-Tie Anchor Pinning to Columns",
      "Block Course Laying to Mortar Ratio",
      "Reinforced Lintel Casting",
      "Movement & Expansion Joint Detailing",
      "Line, Level & Plumb Inspection",
    ],
  },
  plastering: {
    title: "Plastering & Painting",
    subtitle: "Smooth Finishes, Full Colour Range",
    heroImg:
      "/img/plastering-wall.jpg",
    desc: "Smooth, flawless surface preparation and finishing across internal and external surfaces, plus a full range of colours, finishes and decorative painting techniques — the base every decoration depends on.",
    icon: Paintbrush,
    timeframe: "Sequenced after block work and MEP first fix",
    compliance: "Q4 Finish, Manufacturer-Specified Systems",
    standard: "Three-Coat Render & Skim to Q4",
    materials:
      "Sand-cement render, gypsum skim coats, bonding agents, corner beads, fiberglass joint mesh, and a full range of paints and decorative coatings.",
    technicalGuide:
      "We prime the substrate and mount corner beads, apply a spatter-dash key coat followed by a scratch-levelled sand-cement render, reinforce joints with fiberglass mesh to control cracking, skim to a Q4 finish, then sand, prime and apply the specified colour or decorative technique.",
    keyMetrics: [
      { label: "Finish Level", value: "Q4 Flawless Skim" },
      { label: "Crack Control", value: "Fiberglass Joint Mesh" },
      { label: "Coverage", value: "Internal & External Surfaces" },
    ],
    milestones: [
      "Substrate Priming & Bonding Coat",
      "Corner Bead & Level Guide Setup",
      "Render Coat Application",
      "Joint Mesh Reinforcement",
      "Gypsum Skim Finish to Q4",
      "Sanding, Priming & Decorative Painting",
    ],
  },
  gypsum: {
    title: "Gypsum & False Ceilings",
    subtitle: "Custom Ceilings, Panels, Partitions & Mouldings",
    heroImg: "/img/gypsum-ceiling-works.jpg",
    desc: "Custom gypsum ceilings, wall panels, partitions, cornicing and ornate mouldings — from sleek modern ceiling solutions to traditional hand-detailed plasterwork, crafted and installed by our in-house team.",
    icon: Layers,
    timeframe: "Sequenced with MEP first fix and fit-out",
    compliance: "Coordinated with MEP & Fire Requirements",
    standard: "Level, Plumb & Seamless Jointing",
    materials:
      "Gypsum board, suspended metal ceiling grid and hangers, cornice and moulding profiles, jointing compound and reinforcing tape.",
    technicalGuide:
      "We set ceiling datum by laser, install the suspension grid and hangers around coordinated MEP services, fix gypsum board with staggered joints, then tape, fill and sand to a seamless finish — adding cornicing, panelling and cast ornate mouldings where the design calls for it.",
    keyMetrics: [
      { label: "Ceiling Systems", value: "False Ceilings, Bulkheads & Coffers" },
      { label: "Wall Systems", value: "Panels, Partitions & Cornicing" },
      { label: "Detailing", value: "Ornate Cast Gypsum Mouldings" },
    ],
    milestones: [
      "Laser Ceiling Datum & Setting-Out",
      "Suspension Grid & Hanger Installation",
      "MEP Service Coordination",
      "Gypsum Board Fixing",
      "Taping, Filling & Sanding",
      "Cornice, Panel & Moulding Detailing",
    ],
  },
  "fit-out": {
    title: "Interior Fit-Out & Renovation",
    subtitle: "Space Planning, Finishes & Refurbishment",
    heroImg:
      "/img/fitout-office-dubai.jpg",
    desc: "Transforming empty spaces into functional, aesthetically pleasing environments — and breathing new life into outdated ones. From space planning and layout design to furniture installation and finishing touches, executed seamlessly from start to finish.",
    icon: Compass,
    timeframe: "Coordinated across all trades on one programme",
    compliance: "Coordinated with Developer & Authority Approvals",
    standard: "Q4 Plaster Finish, Manufacturer-Specified Materials",
    materials:
      "Gypsum partitions and ceiling systems, doors and ironmongery, paint and decorative finishes, coordinated FF&E.",
    technicalGuide:
      "For new fit-outs we manage partition planning, ceiling framing, MEP coordination and detailed finishing. For renovations we survey existing conditions, carry out demolition and concrete crack repair, re-screed floors, then refinish — bringing the space back to a sound, serviceable standard.",
    keyMetrics: [
      { label: "Coordination", value: "All Trades Under One Contract" },
      { label: "Finish Standard", value: "Q4 Plaster Skim" },
      { label: "Sectors Served", value: "Residential, Commercial, Hospitality" },
    ],
    milestones: [
      "Space Planning & Layout Design",
      "Demolition & Strip-Out (Renovation)",
      "Partition & Ceiling Framing",
      "MEP Coordination",
      "Plaster, Paint & Finishes",
      "Furniture Installation, Snagging & Handover",
    ],
  },
  mep: {
    title: "MEP Services",
    subtitle: "Electrical, Plumbing, HVAC & Firefighting",
    heroImg:
      "/img/mep-electrical.jpg",
    desc: "A full suite of Mechanical, Electrical and Plumbing services, coordinated with the civil and fit-out programme and delivered by trained engineers and technicians in accordance with local and international standards.",
    icon: Zap,
    timeframe: "Coordinated with the civil & fit-out programme",
    compliance: "Local & International Standards Compliant",
    standard: "Sustainable, Eco-Friendly MEP Solutions",
    materials:
      "Lighting & small power systems, cable containment, plumbing & drainage systems, central A/C and split units, generators, motors, pumps.",
    technicalGuide:
      "Our MEP team installs lighting and small power, cable containment, plumbing and drainage, and central or split A/C systems, and carries out air conditioning, electrical, plumbing, firefighting, low current and fresh air/ventilation works — sequenced around the block work, screeding and ceiling programme.",
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

/** Slugs in the order they are presented across the site. */
export const serviceSlugs = Object.keys(services);

export function findService(slug: string): Service | undefined {
  return services[slug];
}
