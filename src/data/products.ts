import pumpOffshore from "@/assets/pump-offshore.jpg";
import pumpDesalination from "@/assets/pump-desalination.jpg";
import pumpDewatering from "@/assets/pump-dewatering.jpg";
import pumpDewateringSmall from "@/assets/pump-dewatering-small.jpg";
import pumpCompact from "@/assets/pump-compact.jpg";
import pumpMining from "@/assets/pump-mining.jpg";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "submersible-pumps" | "dewatering-pumps";
  categoryLabel: string;
  images: string[];
  hp: string;
  hpNumeric: number;
  head: string;
  headNumeric: number;
  discharge: string;
  dischargeNumeric: number;
  power: string;
  construction: string;
  application: string;
  industry: string[];
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "75hp-150hp-offshore-submersible-pump",
    name: "Atalanta 75HP – 150HP Submersible Pump for Offshore Drilling Rigs",
    shortName: "75HP–150HP Offshore Submersible",
    category: "submersible-pumps",
    categoryLabel: "Submersible Pumps",
    images: [pumpOffshore, pumpDesalination, pumpMining],
    hp: "75–150 HP",
    hpNumeric: 150,
    head: "120 m",
    headNumeric: 120,
    discharge: "200 m³/h",
    dischargeNumeric: 200,
    power: "75–150 HP",
    construction: "SS-316L / SDSS",
    application: "Offshore drilling rigs, seawater handling, platform operations",
    industry: ["Oil & Gas", "Offshore Drilling"],
    specifications: {
      "Brand": "Atalanta",
      "HP Range": "75HP – 150HP",
      "Platform Capacities": "5HP to 30HP",
      "Supply": "353 2 Stage, 100HP, 3Ph, 60Hz, 460/480V",
      "Construction": "SS-316L / SDSS",
      "Impellers": "Nickel Aluminum Bronze",
      "Motor": "Water cooled squirrel cage induction motor",
    },
    features: [
      "Multistage centrifugal design",
      "Water lubricated bearings",
      "Non Return Valve integrated",
      "Pre-formed strainer",
      "Water cooled squirrel cage induction motor",
      "Pressure compensating device",
      "Used in Indian Coast & Middle East rigs",
    ],
    applications: [
      "Offshore oil & gas platforms",
      "Seawater lift & fire fighting systems",
      "Cooling water circulation",
      "Drilling rig water supply",
      "Middle East offshore installations",
    ],
    seoTitle: "75HP-150HP Offshore Submersible Pump | Atalanta Pumps",
    seoDescription: "Atalanta 75HP–150HP submersible pump for offshore drilling rigs. SS-316L construction, Nickel Aluminum Bronze impellers. Used in Indian Coast & Middle East.",
  },
  {
    id: "2",
    slug: "90c-submersible-pump-ro-desalination",
    name: "Atalanta 90°C Submersible Pump for RO Desalination Projects",
    shortName: "90°C RO Desalination Pump",
    category: "submersible-pumps",
    categoryLabel: "Submersible Pumps",
    images: [pumpDesalination, pumpOffshore],
    hp: "Variable",
    hpNumeric: 50,
    head: "Variable",
    headNumeric: 80,
    discharge: "Variable",
    dischargeNumeric: 100,
    power: "Variable",
    construction: "SS-316L / SDSS / SS 304",
    application: "RO desalination plants, water reuse systems, high-temperature applications",
    industry: ["Water Treatment", "Desalination"],
    specifications: {
      "Brand": "Atalanta",
      "Max Temperature": "90°C",
      "Construction": "SS-316L / SDSS / SS 304",
      "Motor Type": "Water filled rewindable motors",
      "Controls": "Thermistor controls available",
      "Application": "Desalination & water reuse plants",
    },
    features: [
      "Handles temperatures up to 90°C",
      "SS-316L / SDSS / SS 304 construction options",
      "Water filled rewindable motors",
      "Thermistor controls available",
      "Designed for continuous duty",
      "Corrosion resistant for treated water",
    ],
    applications: [
      "RO desalination plants",
      "Water reuse & recycling systems",
      "High-temperature water pumping",
      "Industrial water treatment",
      "Thermal power plant cooling",
    ],
    seoTitle: "90°C Submersible Pump for RO Desalination | Atalanta Pumps",
    seoDescription: "Atalanta 90°C submersible pump for RO desalination projects. SS-316L/SDSS/SS 304 construction. Water filled rewindable motors with thermistor controls.",
  },
  {
    id: "3",
    slug: "psd-10105-10hp-dewatering-pump",
    name: "Atalanta PSD 10105 – 10HP Dewatering Pump",
    shortName: "PSD 10105 – 10HP",
    category: "dewatering-pumps",
    categoryLabel: "Dewatering Pumps",
    images: [pumpDewatering, pumpDewateringSmall],
    hp: "10 HP",
    hpNumeric: 10,
    head: "15 m",
    headNumeric: 15,
    discharge: "105 m³/h",
    dischargeNumeric: 105,
    power: "10 HP",
    construction: "SS 304",
    application: "Construction dewatering, flood control, mine dewatering, industrial drainage",
    industry: ["Construction", "Mining", "Industrial"],
    specifications: {
      "Model": "PSD 10105",
      "Power": "10 HP",
      "Head": "15 Meters",
      "Discharge": "105 Cu.M/hr",
      "Construction": "SS 304",
      "Seals": "Double mechanical seals",
      "Testing": "BIS Tested",
    },
    features: [
      "Double mechanical seals",
      "Pressure compensated oil chamber",
      "SS 304 construction",
      "BIS Tested & certified",
      "Heavy-duty industrial grade",
      "High discharge capacity",
    ],
    applications: [
      "Construction site dewatering",
      "Flood control operations",
      "Mine dewatering",
      "Industrial drainage systems",
      "Municipal water management",
    ],
    seoTitle: "PSD 10105 10HP Dewatering Pump | Atalanta Pumps",
    seoDescription: "Atalanta PSD 10105 10HP dewatering pump. 105 Cu.M/hr discharge, 15m head. Double mechanical seals, SS 304, BIS tested.",
  },
  {
    id: "4",
    slug: "psd-7h560-7-5hp-dewatering-pump",
    name: "Atalanta PSD 7H560 – 7.5HP Dewatering Pump",
    shortName: "PSD 7H560 – 7.5HP",
    category: "dewatering-pumps",
    categoryLabel: "Dewatering Pumps",
    images: [pumpDewateringSmall, pumpDewatering],
    hp: "7.5 HP",
    hpNumeric: 7.5,
    head: "15 m",
    headNumeric: 15,
    discharge: "60 m³/h",
    dischargeNumeric: 60,
    power: "7.5 HP",
    construction: "SS 304",
    application: "Marine dewatering, construction sites, general industrial use",
    industry: ["Marine", "Construction"],
    specifications: {
      "Model": "PSD 7H560",
      "Power": "7.5 HP",
      "Head": "15 Meters",
      "Discharge": "60 Cu.M/hr",
      "Construction": "SS 304",
    },
    features: [
      "Marine grade construction",
      "Suitable for construction & marine applications",
      "Reliable mechanical seals",
      "Compact portable design",
      "Corrosion resistant body",
    ],
    applications: [
      "Marine dewatering operations",
      "Construction site drainage",
      "General industrial dewatering",
      "Shipyard operations",
    ],
    seoTitle: "PSD 7H560 7.5HP Dewatering Pump | Atalanta Pumps",
    seoDescription: "Atalanta PSD 7H560 7.5HP dewatering pump. 60 Cu.M/hr discharge, 15m head. Marine & construction applications.",
  },
  {
    id: "5",
    slug: "psd-540-548-5hp-dewatering-pump",
    name: "Atalanta PSD-540/548 – 5HP Dewatering Pump",
    shortName: "PSD-540/548 – 5HP",
    category: "dewatering-pumps",
    categoryLabel: "Dewatering Pumps",
    images: [pumpCompact, pumpDewateringSmall],
    hp: "5 HP",
    hpNumeric: 5,
    head: "15 m",
    headNumeric: 15,
    discharge: "40/48 m³/h",
    dischargeNumeric: 48,
    power: "5 HP",
    construction: "SS 304",
    application: "Abrasive liquid handling, mining slurry, construction dewatering",
    industry: ["Mining", "Construction"],
    specifications: {
      "Model": "PSD-540/548",
      "Power": "5 HP",
      "Head": "15 Meters",
      "Discharge": "40/48 Cu.M/hr",
      "Construction": "SS 304",
    },
    features: [
      "Abrasive liquid compatible",
      "Dual discharge rating (40/48 Cu.M/hr)",
      "Hardened wear components",
      "Robust industrial design",
      "Easy maintenance access",
    ],
    applications: [
      "Abrasive liquid pumping",
      "Mining slurry handling",
      "Construction site dewatering",
      "Sand & gravel operations",
    ],
    seoTitle: "PSD-540/548 5HP Dewatering Pump | Atalanta Pumps",
    seoDescription: "Atalanta PSD-540/548 5HP dewatering pump. 40/48 Cu.M/hr discharge, 15m head. Abrasive liquid compatible.",
  },
  {
    id: "6",
    slug: "psd-1h515-1-5hp-dewatering-pump",
    name: "Atalanta PSD 1H515 – 1.5HP Dewatering Pump",
    shortName: "PSD 1H515 – 1.5HP",
    category: "dewatering-pumps",
    categoryLabel: "Dewatering Pumps",
    images: [pumpCompact, pumpDewatering],
    hp: "1.5 HP",
    hpNumeric: 1.5,
    head: "12 m",
    headNumeric: 12,
    discharge: "15 m³/h",
    dischargeNumeric: 15,
    power: "1.5 HP",
    construction: "SS 304",
    application: "Compact dewatering, basement drainage, small-scale industrial use",
    industry: ["Residential", "Industrial"],
    specifications: {
      "Model": "PSD 1H515",
      "Power": "1.5 HP",
      "Head": "12 Meters",
      "Discharge": "15 Cu.M/hr",
      "Construction": "SS 304",
    },
    features: [
      "Ultra compact design",
      "Low power consumption",
      "Easy portability",
      "Suitable for confined spaces",
      "Reliable performance",
    ],
    applications: [
      "Basement drainage",
      "Small construction sites",
      "Light industrial dewatering",
      "Emergency flood response",
    ],
    seoTitle: "PSD 1H515 1.5HP Dewatering Pump | Atalanta Pumps",
    seoDescription: "Atalanta PSD 1H515 1.5HP compact dewatering pump. 15 Cu.M/hr discharge, 12m head. Compact design for small-scale applications.",
  },
  {
    id: "7",
    slug: "psd-320-3hp-dewatering-pump",
    name: "Atalanta PSD 320 – 3HP Dewatering Pump",
    shortName: "PSD 320 – 3HP",
    category: "dewatering-pumps",
    categoryLabel: "Dewatering Pumps",
    images: [pumpDewateringSmall, pumpCompact],
    hp: "3 HP",
    hpNumeric: 3,
    head: "14 m",
    headNumeric: 14,
    discharge: "20 m³/h",
    dischargeNumeric: 20,
    power: "3 HP",
    construction: "SS 304",
    application: "Industrial dewatering, construction drainage, general purpose",
    industry: ["Industrial", "Construction"],
    specifications: {
      "Model": "PSD 320",
      "Power": "3 HP",
      "Head": "14 Meters",
      "Discharge": "20 Cu.M/hr",
      "Construction": "SS 304",
    },
    features: [
      "Industrial grade performance",
      "Balanced design for steady operation",
      "Durable mechanical seals",
      "Efficient motor design",
      "Low maintenance requirements",
    ],
    applications: [
      "Industrial dewatering",
      "Construction site drainage",
      "General purpose pumping",
      "Utility water management",
    ],
    seoTitle: "PSD 320 3HP Dewatering Pump | Atalanta Pumps",
    seoDescription: "Atalanta PSD 320 3HP dewatering pump. 20 Cu.M/hr discharge, 14m head. Industrial grade performance.",
  },
];

export const categories = [
  { slug: "submersible-pumps", label: "Submersible Pumps" },
  { slug: "dewatering-pumps", label: "Dewatering Pumps" },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (cat: string) => products.filter((p) => p.category === cat);
