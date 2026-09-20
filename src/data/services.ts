import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "solar-panel-installation",
    slug: "solar-panel-installation",
    title: "Solar Panel Installation",
    shortDescription: "High-efficiency panels for maximum energy output on residential, commercial and industrial roofs.",
    fullDescription: "Our certified engineering team designs and mounts Tier-1 monocrystalline solar arrays optimized for peak sun absorption, tropical heat tolerance, and zero roof leakage. We use anodized aluminum racking, DC surge suppressors, and weather-sealed cable entries.",
    iconName: "SunMedium",
    benefits: [
      "Tier-1 Mono PERC & N-Type solar panels with 21%+ efficiency",
      "Corrosion-resistant aluminum mounting brackets built for high winds",
      "Safe roof penetrations with industrial sealant and water-tight grommets",
      "25-Year linear power output warranty guarantee",
      "Optimal azimuth and tilt alignment for maximum daily kWh generation"
    ],
    process: [
      "Structural roof inspection and solar azimuth calculation",
      "Precision rail mounting and wind-load distribution",
      "Panel placement, string sizing, and DC cable trunking",
      "VOC and ISC electrical safety testing prior to inverter connection",
      "Final commission with thermal imaging scan"
    ],
    recommendedFor: ["Homes", "Offices", "Churches", "Fuel Stations", "Hospitals", "Factories"],
    includedItems: ["Solar Panels", "Rail Racking System", "DC Breaker Box", "UV-Resistant DC Cables", "Professional Mounting Labour"],
    leadTime: "2–4 days on site for a typical home"
  },
  {
    id: "inverter-installation",
    slug: "inverter-installation",
    title: "Inverter Installation",
    shortDescription: "Reliable inverters for stable power supply with smart seamless changeover and high surge capability.",
    fullDescription: "We install pure sine wave, hybrid, and high-frequency smart inverters ranging from 1kVA residential setups to 100kVA commercial parallel systems. Our installations include automatic transfer switches (ATS), bypass switches, and surge protection.",
    iconName: "Cpu",
    benefits: [
      "Pure Sine Wave output safe for sensitive electronics & appliances",
      "Zero-second (<10ms) transfer time prevents computer restarts",
      "Smart MPPT solar charge controllers with 98% tracking efficiency",
      "Wi-Fi / 4G cloud monitoring via mobile app",
      "Modular design expandable up to 9 units in parallel"
    ],
    process: [
      "Load calculation and surge requirement analysis",
      "Wall-mounting with vibration dampers and airflow clearance",
      "AC/DC breaker integration and manual bypass installation",
      "Firmware update and customized charging profile programming",
      "Full load testing with resistive and inductive appliances"
    ],
    recommendedFor: ["Offices", "Smart Homes", "Healthcare Facilities", "Cold Rooms", "Banks"],
    includedItems: ["Hybrid Inverter Unit", "AC/DC Distribution Box", "Bypass Switch", "Wi-Fi Dongle", "Installation Kit"],
    leadTime: "1–2 days on site"
  },
  {
    id: "battery-energy-storage",
    slug: "battery-energy-storage",
    title: "Battery & Energy Storage",
    shortDescription: "Store energy for use anytime, anywhere with advanced Lithium LiFePO4 and Tubular Deep-Cycle batteries.",
    fullDescription: "Ensure uninterrupted power through grid blackouts with our premium battery energy storage systems (BESS). We specialize in Lithium Iron Phosphate (LiFePO4) battery packs with integrated Battery Management Systems (BMS) for 10-15 year lifespans.",
    iconName: "BatteryCharging",
    benefits: [
      "Safe & non-combustible Lithium Iron Phosphate (LiFePO4) chemistry",
      "6,000+ cycles at 80% Depth of Discharge (DoD)",
      "Built-in smart BMS with overcharge, temperature & short-circuit protection",
      "Compact wall-mount or server-rack form factor saves floor space",
      "Zero toxic gas emission, maintenance-free operation"
    ],
    process: [
      "Daily energy consumption audit in kilowatt-hours (kWh)",
      "Battery rack or wall mounting with dedicated ventilation space",
      "High-current DC busbar and heavy-gauge cable crimping",
      "BMS communication protocol setup with hybrid inverter",
      "Cycle discharge and state-of-charge calibration"
    ],
    recommendedFor: ["Residential Homes", "Hotels", "Telecom Masts", "Night Power Needs"],
    includedItems: ["Lithium/Gel Battery Bank", "Heavy-gauge Copper Links", "DC Battery Disconnect Switch", "Safety Fuses"],
    leadTime: "1 day on site, subject to battery availability"
  },
  {
    id: "solar-system-design",
    slug: "solar-system-design",
    title: "Solar System Design",
    shortDescription: "Custom engineering designs tailored precisely to your energy consumption, load profile, and budget.",
    fullDescription: "Avoid costly undersizing or wasteful oversizing. Our engineers perform exhaustive load audits, irradiance modeling, and single-line electrical schematics to deliver the most cost-effective and dependable solar architecture.",
    iconName: "DraftingCompass",
    benefits: [
      "Data-driven energy profiling using actual wattage measurements",
      "Complete CAD single-line electrical schematics and bill of engineering",
      "Return on Investment (ROI) and payback period computation",
      "Expansion-ready system architecture",
      "Compliance with national and international electrical safety codes"
    ],
    process: [
      "Comprehensive appliance audit and duty-cycle log",
      "Solar irradiance and shade analysis simulation",
      "Component sizing (PV Array, Inverter, Battery C-Rate)",
      "Engineering drawing & financial feasibility report delivery",
      "Client consultation and tailored proposal finalization"
    ],
    recommendedFor: ["Architects", "New Construction", "Estate Developers", "Large Facilities"],
    includedItems: ["Load Analysis Report", "Single-Line Diagram (SLD)", "Bill of Materials (BOM)", "ROI Projections"],
    leadTime: "3–7 days, including the load logging period"
  },
  {
    id: "electrical-installation",
    slug: "electrical-installation",
    title: "Electrical Installation",
    shortDescription: "Safe and professional electrical wiring, sub-panel segregation, and earth grounding systems.",
    fullDescription: "A solar system is only as safe as its electrical foundation. We handle complete AC distribution, essential vs. non-essential load separation, lightning protection, and copper rod earth grounding with <5 ohm resistance.",
    iconName: "PlugZap",
    benefits: [
      "Deep earth grounding with copper earth rods & chemical compound",
      "Essential vs. heavy load distribution board separation",
      "Type-2 Surge Protection Devices (SPD) for lightning immunity",
      "Clean trunking and labeled circuit breaker panels",
      "Prevent electrical fire hazards and equipment damage"
    ],
    process: [
      "Existing wiring inspection and ground resistance measurement",
      "Distribution board (DB) segregation and changeover installation",
      "Earth pit drilling and copper electrode grounding installation",
      "Surge protector and voltage monitoring relay integration",
      "Insulation resistance and polarity verification"
    ],
    recommendedFor: ["Residential Homes", "Commercial Complexes", "Industrial Plants"],
    includedItems: ["Earth Rod & Grounding Kit", "Changeover Switch", "AC Surge Arrester", "Distribution Sub-Panel"],
    leadTime: "1–3 days depending on board layout"
  },
  {
    id: "solar-system-maintenance",
    slug: "solar-system-maintenance",
    title: "Solar System Maintenance",
    shortDescription: "Keep your system performing at its best with periodic cleaning, torque checks, and efficiency tuning.",
    fullDescription: "Dust, loose lugs, and panel soiling can degrade solar output by up to 30%. Our maintenance packages include de-ionized panel washing, thermal scanning of cells, terminal retorquing, and inverter cooling fan servicing.",
    iconName: "Wrench",
    benefits: [
      "Restores up to 25% lost energy output from dusty/soiled panels",
      "Early detection of hotspot micro-cracks before panel failure",
      "Prevents electrical fires caused by loose high-current terminals",
      "Extends battery life through equalization and BMS health checks",
      "Quarterly or biannual scheduled maintenance contracts available"
    ],
    process: [
      "De-ionized non-abrasive solar panel surface washing",
      "Infrared thermal imaging to spot cell hotspots and loose lugs",
      "Inverter heat sink and cooling fan dust extraction",
      "Battery internal resistance and terminal voltage logging",
      "Performance report card delivery to client"
    ],
    recommendedFor: ["Existing Solar Owners", "Commercial Rooftops", "Schools", "Estate Associations"],
    includedItems: ["Chemical-free Wash", "Thermal Scan Report", "Terminal Retorquing", "System Health Certificate"],
    leadTime: "Half a day for most residential systems"
  },
  {
    id: "fault-diagnosis-repairs",
    slug: "fault-diagnosis-repairs",
    title: "Fault Diagnosis & Repairs",
    shortDescription: "Quick fault finding and reliable repairs for inverter error codes, tripped breakers, and dead batteries.",
    fullDescription: "Is your inverter beeping with error codes like 04, 08, 09, 51, 52, 58? Did your batteries stop holding charge? Our certified troubleshooting technicians arrive on-site with advanced diagnostic tools to resolve issues fast.",
    iconName: "ShieldAlert",
    benefits: [
      "Rapid on-site emergency troubleshooting in Lagos, Abuja & Port Harcourt",
      "Component-level inverter mainboard and MOSFET repairs",
      "Lithium battery cell rebalancing and BMS reset",
      "Short-circuit and earth fault isolation",
      "Genuine replacement parts backed by warranty"
    ],
    process: [
      "Fault code extraction and event log analysis",
      "Oscilloscope and insulation resistance electrical testing",
      "Defective component removal and replacement with OEM parts",
      "Bench load testing before reintegration",
      "Root-cause report to prevent recurrence"
    ],
    recommendedFor: ["Faulty Systems", "Beeping Inverters", "Depleted Batteries", "Blown Fuses"],
    includedItems: ["Diagnostic Assessment", "Component Replacement", "Safety Calibration", "90-Day Repair Warranty"],
    leadTime: "Same or next day within our service areas"
  },
  {
    id: "commercial-solar-solutions",
    slug: "commercial-solar-solutions",
    title: "Commercial Solar Solutions",
    shortDescription: "High-capacity systems for businesses, schools, churches, factories and commercial plazas.",
    fullDescription: "Dramatically cut diesel generator fuel expenses by up to 75%. We engineer 3-phase commercial micro-grids and hybrid systems from 20kVA to 250kVA with automated diesel generator synchronization.",
    iconName: "Building2",
    benefits: [
      "Save millions in monthly diesel and petrol generator operating costs",
      "Smart zero-export grid feed controller or diesel-hybrid synchronization",
      "Remote energy management dashboard with automated alarms",
      "Robust three-phase balanced power output for industrial equipment",
      "Flexible capital purchase or phased rollout models"
    ],
    process: [
      "Commercial tariff and 24-hour peak load profile analysis",
      "High-capacity structural mounting and transformer interfacing",
      "Three-phase inverter parallel synchronization",
      "Generator auto-start integration (AMF panel)",
      "Staff handover and SCADA monitoring activation"
    ],
    recommendedFor: ["Plazas & Malls", "Churches", "Universities", "Factories", "Hotels", "Hospitals"],
    includedItems: ["3-Phase Inverter Array", "High-Voltage Battery Bank", "Generator Synchronization Controller", "Cloud Monitoring"],
    leadTime: "1–3 weeks on site, by capacity"
  }
];

export const getServiceBySlug = (slug?: string) =>
  servicesData.find((service) => service.slug === slug);

/** The four headline offers shown in the home page service bar. */
export const quickServices = [
  { label: 'Installation', slug: 'solar-panel-installation', iconName: 'SunMedium' },
  { label: 'Equipment Sales', slug: 'inverter-installation', iconName: 'Package' },
  { label: 'Maintenance', slug: 'solar-system-maintenance', iconName: 'Wrench' },
  { label: 'Consultation', slug: 'solar-system-design', iconName: 'DraftingCompass' },
];
