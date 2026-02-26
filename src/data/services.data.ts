import { Wrench, Settings, Cog, FlaskConical } from "lucide-react";

export const services = [
  { icon: Cog, title: "Manufacturing", desc: "End-to-end pump manufacturing from design to delivery with precision engineering." },
  { icon: Wrench, title: "Repair & Servicing", desc: "Expert maintenance and repair for all pump brands and models." },
  { icon: Settings, title: "Custom Engineering", desc: "Bespoke pump solutions designed for unique operational requirements." },
  { icon: FlaskConical, title: "ISO 9906/2 Testing", desc: "Comprehensive hydraulic testing and certification services." },
];

export const brandsServiced = [
  "Pleuger (Flowserve)", "EMU", "WILO", "WPIL", "Kirloskar", "MODY",
];

export const servicingStages = [
  { step: 1, title: "Pump Receiving & Inspection", desc: "Detailed visual and physical inspection of the incoming pump." },
  { step: 2, title: "Complete Disassembly", desc: "Systematic teardown of all pump components for individual evaluation." },
  { step: 3, title: "Component Testing", desc: "Each part is tested for wear, damage, and dimensional accuracy." },
  { step: 4, title: "Repair & Replacement", desc: "Worn or damaged components are repaired or replaced with OEM-grade parts." },
  { step: 5, title: "Reassembly & Alignment", desc: "Precision reassembly with proper alignment and torque specifications." },
  { step: 6, title: "Performance Testing", desc: "Full ISO 9906/2 hydraulic performance test on our in-house test bed." },
  { step: 7, title: "Final Report & Dispatch", desc: "Comprehensive test report and service documentation before dispatch." },
];

export const industries = [
  { name: "Oil & Gas", desc: "High-pressure submersible systems for extraction and processing" },
  { name: "Offshore Drilling", desc: "Marine-grade pumps for offshore platforms and rigs" },
  { name: "Mining", desc: "Heavy-duty dewatering solutions for mining operations" },
  { name: "Infrastructure", desc: "Water management for construction and civil projects" },
  { name: "Industrial Dewatering", desc: "Efficient water removal for industrial facilities" },
];
