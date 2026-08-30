// Single source of truth for the project portfolio.
// Consumed by the projects index, the project detail route and generateMetadata.

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  img: string;
  desc: string;
  works: string[];
  technicalDetails: string;
  status: string;
  auditStatus: string;
  scope: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dragon Palace Hotel",
    category: "Floor Screeding & Fit-Out",
    client: "Mr. Peng Hung",
    location: "Dubai, UAE",
    year: "Completed",
    img: "/img/apartment-interior.jpg",
    desc: "Demolition, floor screeding and full interior fit-out of 80 apartments — one of our largest single-site mobilisations to date.",
    works: ["Demolition", "Floor Screeding", "Interior Fit-Out"],
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
    img: "/img/fitout-living.jpg",
    desc: "Floor screeding and interior fit-out across 110 villas, resourced with dedicated screeding crews for villa-by-villa sequencing.",
    works: ["110 Villas", "Floor Screeding", "Interior Fit-Out"],
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
    img: "/img/gypsum-ceiling-works.jpg",
    desc: "Interior work across a G+2P+12 residential building — floor screeding, plaster, tile, ceiling and paint.",
    works: ["Floor Screeding", "Plaster & Tile", "Ceiling & Paint"],
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
    img: "/img/screeding-levelling.jpg",
    desc: "Floor screeding and interior fit-out for a G+2P+5 residential building.",
    works: ["Floor Screeding", "Interior Fit-Out"],
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
    img: "/img/screeding-powerfloat.jpg",
    desc: "Interior work across 78 villas (G+1 & G+2) — floor screeding, plaster, tile, paint and ceiling.",
    works: ["78 Villas", "Floor Screeding", "Plaster, Tile & Paint"],
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
    img: "/img/blockwork-mason.jpg",
    desc: "Demolition, floor screeding and renovation work for a private residential building.",
    works: ["Demolition", "Floor Screeding", "Renovation"],
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
    img: "/img/carpark-coating.jpg",
    desc: "Traffic deck coating — supply and application on the Boulevard Heights main contract works.",
    works: ["Traffic Deck Coating", "Emaar", "Approved Applicator"],
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
    img: "/img/fitout-office-dubai.jpg",
    desc: "Floor screeding and interior fit-out work for the IKEA Center at Delma Mall.",
    works: ["Floor Screeding", "Interior Fit-Out"],
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
    img: "/img/office-workspace.jpg",
    desc: "Floor screeding and interior fit-out work for the IKEA Center in Fujairah.",
    works: ["Floor Screeding", "Interior Fit-Out"],
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
    img: "/img/plastering-wall.jpg",
    desc: "Floor screeding and office renovation for the Ellington Properties head office.",
    works: ["Floor Screeding", "Office Renovation"],
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
    img: "/img/fitout-living.jpg",
    desc: "Screed, block, plaster, tile, painting and ceiling works delivered for Ducto Interior.",
    works: ["Screed & Block", "Plaster & Tile", "Painting & Ceiling"],
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
    img: "/img/office-interior.jpg",
    desc: "Demolition, floor screeding and interior fit-out for an Al Futtaim executive office, delivered via Ducto Interior.",
    works: ["Demolition", "Floor Screeding", "Interior Fit-Out"],
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
    img: "/img/resin-floor.jpg",
    desc: "Approved applicator for floor finishes works to basements on a Commercial & Residential 2B+G+14+HC development.",
    works: ["Approved Applicator", "Floor Finishes", "Basements"],
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
    img: "/img/screeding-levelling.jpg",
    desc: "Approved flooring applicator for a Commercial & Residential 2B+G+9+HC development.",
    works: ["Approved Applicator", "Flooring Works"],
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
    img: "/img/industrial-building.jpg",
    desc: "Epoxy floor coating — Fosroc approved applicator — for a 3B+G+9+Gym residential building.",
    works: ["Epoxy Floor Coating", "Fosroc Applicator"],
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
    img: "/img/carpark-coating.jpg",
    desc: "Epoxy flooring and road marking for a commercial and robotic car parking building.",
    works: ["Epoxy Flooring", "Road Marking"],
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
    img: "/img/industrial-building.jpg",
    desc: "Epoxy flooring over screeded concrete works.",
    works: ["Screeded Concrete", "Epoxy Flooring"],
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
    img: "/img/site-team.jpg",
    desc: "Plaster, screed, painting and demolition works currently in progress at the Mall of the Emirates.",
    works: ["Plaster & Screed", "Painting", "Demolition"],
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
    img: "/img/site-drawings.jpg",
    desc: "Water tank waterproofing in progress for a 3B+G+6 office building.",
    works: ["Water Tank Waterproofing"],
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
    img: "/img/plastering-wall.jpg",
    desc: "Concrete crack repair to slabs and walls in progress.",
    works: ["Concrete Crack Repair", "Slabs & Walls"],
    technicalDetails:
      "Site report, material technical submittal and method statement approved for concrete crack repair (horizontal & vertical, slabs and walls) on Canal Residence West Phase II at Dubai Sports City, under main contractor UNEC.",
    status: "Ongoing",
    auditStatus:
      "Approved with comments — 15 May 2024 (Ref. UNEC/J-259/DT/SCW/003)",
    scope: ["Concrete Crack Repair", "Slabs & Walls", "Method Statement Approved"],
  },
];

/** Categories for the portfolio filter, derived from the data. */
export const projectCategories: string[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

/** Look up a project by numeric id or by its hyphenated title slug. */
export function findProject(idOrSlug: string): Project | undefined {
  const title = idOrSlug.replace(/-/g, " ").toLowerCase();
  return projects.find(
    (p) => p.id.toString() === idOrSlug || p.title.toLowerCase() === title,
  );
}
