import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "solar-panel-installation",
    slug: "solar-panel-installation",
    division: "solar",
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
    division: "solar",
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
    division: "solar",
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
    division: "solar",
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
    division: "solar",
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
    division: "solar",
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
    division: "solar",
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
    division: "solar",
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
  },

  // ─── CCTV & SECURITY ────────────────────────────────────────────────
  {
    id: "cctv-camera-installation",
    slug: "cctv-camera-installation",
    division: "security",
    title: "CCTV Camera Installation",
    shortDescription: "HD and 4K surveillance cameras with night vision, recording and live viewing on your phone.",
    fullDescription: "We plan camera positions from a site walk, not a catalogue: every entrance, blind corner and parking bay is covered, with overlapping views where it matters. Systems are IP or HD-analog with local recording on an NVR/DVR, remote viewing on your phone, and power backup so recording continues through an outage.",
    iconName: "Cctv",
    benefits: [
      "4MP to 4K cameras with colour night vision and infrared up to 40m",
      "Live view and playback on your phone, anywhere",
      "Motion and line-crossing alerts pushed to your phone",
      "30+ days of continuous recording, sized to your storage",
      "Backed up by inverter or UPS so cameras stay on in an outage"
    ],
    process: [
      "Site walk to map entrances, blind spots and cable routes",
      "Camera schedule: position, lens and field of view for each point",
      "Concealed cable runs in conduit, weatherproof junction boxes",
      "NVR/DVR setup, storage sizing and remote viewing on your phone",
      "Night test of every camera and a handover walkthrough"
    ],
    recommendedFor: ["Homes", "Estates", "Offices", "Shops", "Schools", "Churches", "Warehouses"],
    includedItems: ["CCTV Cameras", "NVR/DVR Recorder", "Hard Drive", "Cabling & Conduit", "Mobile App Setup"],
    leadTime: "1–2 days for most homes and offices"
  },
  {
    id: "electric-fencing-barbed-wire",
    slug: "electric-fencing-barbed-wire",
    division: "security",
    title: "Electric Fencing & Barbed Wire",
    shortDescription: "Wall-top electric fence, razor wire and barbed wire that deters intruders before they reach the wall.",
    fullDescription: "A properly installed electric fence is a deterrent first and an alarm second. We install multi-strand wall-top and free-standing fences with a monitored energizer, siren and warning signage, and add razor or barbed wire where a physical barrier is needed on its own. Earthing is tested so the fence actually delivers the pulse it is rated for.",
    iconName: "Fence",
    benefits: [
      "Monitored energizer with siren on cut or short",
      "6 to 12-strand wall-top or free-standing configurations",
      "Concertina razor wire and barbed wire options",
      "Correct earthing, tested and recorded at handover",
      "Warning signage and gate isolation fitted as standard"
    ],
    process: [
      "Perimeter measurement and wall condition check",
      "Bracket and insulator installation along the wall line",
      "Strand tensioning, joiners and gate bypass cables",
      "Energizer, siren and earth spike installation",
      "Voltage test on every strand before handover"
    ],
    recommendedFor: ["Homes", "Estates", "Schools", "Warehouses", "Farms", "Industrial Sites"],
    includedItems: ["Energizer", "Brackets & Insulators", "High-Tensile Wire", "Siren & Warning Signs", "Earthing Kit"],
    leadTime: "1–3 days depending on perimeter length"
  },
  {
    id: "smart-security-systems",
    slug: "smart-security-systems",
    division: "security",
    title: "Smart Security Systems",
    shortDescription: "Alarms, motion sensors, smart locks and video doorbells, all controlled from one app.",
    fullDescription: "Smart security ties the pieces together: door and window sensors, motion detectors, sirens, video doorbells and smart locks that you arm, disarm and check from your phone. We configure the alerts so you hear about what matters and are not woken up by the cat.",
    iconName: "ShieldCheck",
    benefits: [
      "Arm, disarm and check the house from your phone",
      "Door, window and motion sensors with instant alerts",
      "Video doorbell and smart lock integration",
      "Panic buttons and siren for emergencies",
      "Works alongside your CCTV and electric fence"
    ],
    process: [
      "Walk-through to identify entry points and routines",
      "Sensor and siren placement plan",
      "Hub, sensors and app installation",
      "Alert zones and schedules configured to your routine",
      "Full test with every member of the household"
    ],
    recommendedFor: ["Homes", "Apartments", "Offices", "Shops"],
    includedItems: ["Security Hub", "Door & Window Sensors", "Motion Detectors", "Siren", "App Setup"],
    leadTime: "Half a day to 1 day"
  },
  {
    id: "access-control-systems",
    slug: "access-control-systems",
    division: "security",
    title: "Access Control",
    shortDescription: "Fingerprint, card and PIN entry for doors and gates, with a record of who came in and when.",
    fullDescription: "Access control replaces keys you cannot track with credentials you can. We install biometric, card and keypad readers on doors and gates, connected to magnetic locks or gate motors, with attendance logs and the ability to add or remove a user in seconds.",
    iconName: "Fingerprint",
    benefits: [
      "Fingerprint, card, PIN or face recognition entry",
      "Entry logs and staff attendance reports",
      "Add or revoke access instantly — no re-keying",
      "Works with magnetic locks, strikes and gate motors",
      "Battery backup keeps doors working in an outage"
    ],
    process: [
      "Door and gate survey, lock type assessment",
      "Reader, lock and exit button installation",
      "Controller wiring with backup power",
      "User enrolment and access schedules",
      "Fail-safe test and handover"
    ],
    recommendedFor: ["Offices", "Estates", "Schools", "Server Rooms", "Warehouses"],
    includedItems: ["Access Reader", "Magnetic Lock or Strike", "Exit Button", "Power Supply & Battery", "User Enrolment"],
    leadTime: "1 day per 2–4 doors"
  }
];

export const getServiceBySlug = (slug?: string) =>
  servicesData.find((service) => service.slug === slug);

export const solarServices = servicesData.filter((service) => service.division === 'solar');
export const securityServices = servicesData.filter((service) => service.division === 'security');
