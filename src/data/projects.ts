import { Project } from '../types';

/**
 * PROJECT PORTFOLIO
 * ------------------------------------------------------------------
 * Each entry is a full case study: the problem the client had, the
 * system that was designed, the equipment used, how it was installed
 * and what changed afterwards.
 *
 * TO ADD A PROJECT:
 *   1. Copy any block below and change the values.
 *   2. Put the photographs in `public/images/projects/<your-slug>/`
 *      (cover.jpg, before.jpg, installation.jpg, equipment.jpg, result.jpg).
 *   3. Set `isExample: false` once the copy and photographs are your own —
 *      that removes the "Example project" label from the card.
 *
 * The `slug` becomes the page address: /projects/<slug>
 */

export const projectsData: Project[] = [
  {
    id: 'p-5kva-hybrid-lekki',
    slug: '5kva-hybrid-solar-system',
    division: 'solar',
    title: '5kVA Hybrid Solar System',
    category: 'Residential',
    tags: ['Installation'],
    location: 'Lekki, Lagos',
    capacity: '5kVA · 4.4kWp · 10kWh',
    completionDate: 'October 2024',
    durationOnSite: '3 days',
    clientType: 'Three-bedroom family home',
    summary:
      'A family running a generator six hours a night wanted the noise and the fuel bill gone — without giving up the freezer or the air conditioner.',
    challenge:
      'The household was spending roughly ₦95,000 a month on petrol and still losing power at night. The generator sat directly under the bedroom window, and two people in the house work remotely, so every outage cost them a call or a file.',
    clientRequirement:
      'Silent power from 6pm to 6am covering lights, freezer, TV, Wi-Fi and one inverter air conditioner, with instant changeover so work machines never reboot.',
    solutionProvided:
      'We logged the real load for a week before specifying anything. The measured evening draw was 1.8kW with a 3.1kW surge on compressor start, so a 5kVA hybrid inverter with a 10kWh lithium bank covers the night with margin to spare, and the 4.4kWp array refills it before noon on a clear day.',
    systemDesign: [
      { label: 'Measured evening load', value: '1.8 kW average' },
      { label: 'Peak surge allowance', value: '3.1 kW (AC compressor)' },
      { label: 'Night-time autonomy', value: '12 hours at measured load' },
      { label: 'Array orientation', value: 'South-facing, 15° pitched tile roof' },
      { label: 'Changeover time', value: 'Under 10 ms' },
    ],
    equipmentUsed: [
      '1 × 5kVA 48V pure sine wave hybrid inverter, dual MPPT',
      '8 × 550W Tier-1 monocrystalline modules (4.4kWp array)',
      '1 × 10kWh 51.2V LiFePO4 battery with smart BMS',
      '600V DC isolator with Type 2 surge protection',
      'Anodised aluminium rail mounting with weather-sealed roof anchors',
    ],
    installationProcess: [
      {
        title: 'Load audit and survey',
        detail:
          'Seven days of logging on the main distribution board, plus a roof survey for shading, pitch and anchor points.',
      },
      {
        title: 'Roof mounting',
        detail:
          'Rails set on the southern pitch with sealed hanger bolts; every penetration flashed and tested with a hose before modules went up.',
      },
      {
        title: 'DC string wiring',
        detail:
          'Two strings in 6mm² double-insulated cable, MC4 terminations crimped and pull-tested, cable trays clipped clear of the roof surface.',
      },
      {
        title: 'Inverter and battery commissioning',
        detail:
          'Wall enclosure in the utility room, torque-checked busbars, BMS communication verified, essential-loads sub-board split from the heavy water heater circuit.',
      },
      {
        title: 'Handover',
        detail:
          'Wi-Fi monitoring set up on the homeowner phone, a printed commissioning sheet, and a walkthrough of what to do if a breaker trips.',
      },
    ],
    results: [
      'Generator has not been started at night since commissioning',
      'Monthly fuel and grid spend down by roughly 85%',
      'No audible noise — the inverter sits in the utility room',
      'Work machines stay on through every grid outage',
    ],
    metrics: [
      { value: '85%', label: 'Lower monthly energy spend' },
      { value: '12 hrs', label: 'Night-time autonomy' },
      { value: '<10 ms', label: 'Transfer time' },
    ],
    coverImage: '/images/projects/5kva-hybrid-lekki/cover.jpg',
    coverAlt: 'Installer lowering a solar module onto a pitched residential roof',
    gallery: [
      {
        src: '/images/projects/5kva-hybrid-lekki/before.jpg',
        stage: 'before',
        caption: 'Before — the property on generator and unreliable grid supply',
        alt: 'Residential apartment building before the solar installation',
      },
      {
        src: '/images/projects/5kva-hybrid-lekki/installation.jpg',
        stage: 'installation',
        caption: 'Day 2 — modules set on rails and torqued down',
        alt: 'Technician fixing solar modules to roof-mounted rails',
      },
      {
        src: '/images/projects/5kva-hybrid-lekki/equipment.jpg',
        stage: 'equipment',
        caption: 'Inverter, battery modules and DC protection on one board',
        alt: 'Wall-mounted hybrid inverter with battery modules and isolators',
      },
      {
        src: '/images/projects/5kva-hybrid-lekki/cover.jpg',
        stage: 'detail',
        caption: 'Array complete — eight 550W modules, 4.4kWp',
        alt: 'Completed rooftop solar array on a residential building',
      },
      {
        src: '/images/projects/5kva-hybrid-lekki/result.jpg',
        stage: 'result',
        caption: 'After — lights on through the night, no generator',
        alt: 'Living room lit at night by a lamp',
      },
    ],
    featured: true,
    isExample: true,
  },

  {
    id: 'p-20kva-commercial-abuja',
    slug: '20kva-commercial-installation',
    division: 'solar',
    title: '20kVA Commercial Installation',
    category: 'Commercial',
    tags: ['Installation'],
    location: 'Maitama, Abuja',
    capacity: '20kVA · 16.5kWp · 30kWh',
    completionDate: 'January 2025',
    durationOnSite: '9 days',
    clientType: 'Three-floor corporate office',
    summary:
      'Diesel was the second largest line item in this office budget, and mid-day grid dips were rebooting the server rack.',
    challenge:
      'The building ran two generators in rotation at a cost north of ₦2.5m a month. Worse, the changeover gap was long enough to drop the file server, so the IT team was restoring work two or three times a week.',
    clientRequirement:
      'Cut the diesel bill significantly, hold the server rack and network through every grid event, and keep the generators only as a rainy-season backstop.',
    solutionProvided:
      'Two 10kVA inverters in parallel feed a three-phase essential-loads board carrying 30 workstations, the server rack, security systems, lighting on all three floors and four inverter air conditioners. A 16.5kWp ballasted array on the flat roof charges 30kWh of lithium storage, and an AMF controller starts the generator only when the bank falls below a set threshold.',
    systemDesign: [
      { label: 'Essential load', value: '11.4 kW daytime average' },
      { label: 'Inverter configuration', value: '2 × 10kVA in parallel, three-phase output' },
      { label: 'Roof structure', value: 'Wind-ballasted, no roof penetration' },
      { label: 'Generator handover', value: 'Automatic below 25% state of charge' },
      { label: 'Monitoring', value: 'Cloud dashboard for the facility manager' },
    ],
    equipmentUsed: [
      '2 × 10kVA parallel commercial inverters, three-phase output',
      '30 × 550W bifacial modules (16.5kWp)',
      '3 × 10kWh 51.2V lithium storage cabinets (30kWh total)',
      'Automatic mains failure (AMF) generator start controller',
      'AC/DC sub-distribution board with Class 1 surge arresters',
    ],
    installationProcess: [
      {
        title: 'Structural assessment',
        detail:
          'Load-bearing check on the flat concrete roof, then a ballasted racking layout that avoids drilling the waterproof membrane.',
      },
      {
        title: 'Essential-loads separation',
        detail:
          'A new sub-board isolates servers, networking, lighting and the inverter ACs from lifts and water heaters.',
      },
      {
        title: 'Array and combiner wiring',
        detail:
          'Six strings into a combiner box with per-string fusing, DC breakers and surge arrestors, all labelled to the single-line diagram.',
      },
      {
        title: 'Generator integration',
        detail:
          'AMF controller wired so the standby generator only runs when storage is genuinely depleted, not on every grid dip.',
      },
      {
        title: 'Commissioning and training',
        detail:
          'Full-load test over two working days, then a handover session with the facility manager on the monitoring dashboard.',
      },
    ],
    results: [
      'Diesel consumption down by roughly three quarters',
      'No unplanned server restarts since handover',
      'Generators now run only during extended rainy-season spells',
      'Payback tracking at just under two years on current fuel prices',
    ],
    metrics: [
      { value: '75%', label: 'Less diesel burned' },
      { value: '30 kWh', label: 'Usable storage' },
      { value: '22 mo', label: 'Projected payback' },
    ],
    coverImage: '/images/projects/20kva-commercial-abuja/cover.jpg',
    coverAlt: 'Commercial rooftop solar array photographed at sunset',
    gallery: [
      {
        src: '/images/projects/20kva-commercial-abuja/before.jpg',
        stage: 'before',
        caption: 'Before — office block running on rotating diesel generators',
        alt: 'Modern office building exterior before solar installation',
      },
      {
        src: '/images/projects/20kva-commercial-abuja/installation.jpg',
        stage: 'installation',
        caption: 'Ballasted racking and modules going down on the flat roof',
        alt: 'Rows of solar modules being installed on a commercial roof',
      },
      {
        src: '/images/projects/20kva-commercial-abuja/equipment.jpg',
        stage: 'equipment',
        caption: 'Parallel inverters alongside the existing standby generator',
        alt: 'Wall-mounted inverters beside a standby generator in a plant room',
      },
      {
        src: '/images/projects/20kva-commercial-abuja/cover.jpg',
        stage: 'detail',
        caption: '16.5kWp of bifacial modules across the roof plane',
        alt: 'Large commercial solar array seen across a flat roof',
      },
      {
        src: '/images/projects/20kva-commercial-abuja/result.jpg',
        stage: 'result',
        caption: 'After — the building runs its working day on stored solar',
        alt: 'Office building facade in evening light',
      },
    ],
    featured: true,
    isExample: true,
  },

  {
    id: 'p-10kva-residential-ph',
    slug: '10kva-residential-system',
    division: 'solar',
    title: '10kVA Residential System',
    category: 'Residential',
    tags: ['Installation'],
    location: 'GRA Phase 2, Port Harcourt',
    capacity: '10kVA · 8.8kWp · 20kWh',
    completionDate: 'November 2024',
    durationOnSite: '5 days',
    clientType: 'Five-bedroom detached home',
    summary:
      'Heavy inductive loads — a borehole pump and three air conditioners — on a street where grid supply averaged four hours a day.',
    challenge:
      'Previous installers had sized a system on nameplate ratings alone. It tripped every time the borehole pump started, so the family had gone back to running a generator for water.',
    clientRequirement:
      'A system that starts the borehole pump cleanly, runs three inverter air conditioners through the evening and never needs the generator for ordinary household use.',
    solutionProvided:
      'A low-frequency 10kVA inverter with a 30kVA surge rating handles pump start-up without brownout. Two 10kWh lithium units give 20kWh of storage, and the 8.8kWp array is split across two roof planes so generation starts earlier and runs later in the day.',
    systemDesign: [
      { label: 'Surge headroom', value: '30 kVA for 5 seconds' },
      { label: 'Array split', value: 'East and west planes, two MPPT inputs' },
      { label: 'Storage', value: '20 kWh usable lithium' },
      { label: 'Earthing', value: 'Copper pit, measured at 3.2 ohms' },
      { label: 'Non-essential isolation', value: 'Water heaters on a separate board' },
    ],
    equipmentUsed: [
      '1 × 10kVA 48V low-frequency inverter (30kVA surge)',
      '16 × 550W monocrystalline modules (8.8kWp)',
      '2 × 10kWh 51.2V server-rack LiFePO4 batteries',
      '2 × 100A MPPT charge controllers',
      'Copper earth electrode system with chemical backfill',
    ],
    installationProcess: [
      {
        title: 'Fault review of the existing setup',
        detail:
          'Measured the actual pump inrush with a clamp meter, which explained every trip the family had been living with.',
      },
      {
        title: 'Dual-plane array layout',
        detail:
          'Strings on the east and west roof faces so the battery starts charging by 8am and is still charging at 4pm.',
      },
      {
        title: 'Earthing and surge protection',
        detail:
          'A dedicated earth pit with chemical backfill for this humid, lightning-prone area, tested and recorded.',
      },
      {
        title: 'Board separation',
        detail:
          'Instantaneous water heaters moved to a non-essential board so they can never flatten the bank overnight.',
      },
      {
        title: '48-hour endurance test',
        detail:
          'Two full days under maximum household load, including repeated pump starts, before handover.',
      },
    ],
    results: [
      'Borehole pump starts without lights flickering',
      'Air conditioning runs through the evening on stored solar',
      'Generator now reserved for extended maintenance windows only',
      'Roughly ₦3.8m a year saved on fuel and generator servicing',
    ],
    metrics: [
      { value: '24/7', label: 'Household supply' },
      { value: '8.8 kWp', label: 'Array capacity' },
      { value: '3.2 Ω', label: 'Measured earth resistance' },
    ],
    coverImage: '/images/projects/10kva-residential-ph/cover.jpg',
    coverAlt: 'Two technicians installing solar modules on a residential roof',
    gallery: [
      {
        src: '/images/projects/10kva-residential-ph/before.jpg',
        stage: 'before',
        caption: 'Before — the property on four hours of grid supply a day',
        alt: 'Detached residential property before solar installation',
      },
      {
        src: '/images/projects/10kva-residential-ph/installation.jpg',
        stage: 'installation',
        caption: 'Rail alignment across the second roof plane',
        alt: 'Installers aligning solar mounting rails on a roof',
      },
      {
        src: '/images/projects/10kva-residential-ph/equipment.jpg',
        stage: 'equipment',
        caption: 'Battery and isolator enclosure, ventilated and labelled',
        alt: 'Outdoor electrical enclosure containing battery and isolators',
      },
      {
        src: '/images/projects/10kva-residential-ph/cover.jpg',
        stage: 'detail',
        caption: 'Sixteen modules across two orientations',
        alt: 'Completed residential solar array from the roof edge',
      },
      {
        src: '/images/projects/10kva-residential-ph/result.jpg',
        stage: 'result',
        caption: 'After — the whole house running on one quiet system',
        alt: 'Interior of a home lit without generator power',
      },
    ],
    featured: true,
    isExample: true,
  },

  {
    id: 'p-30kva-church-enugu',
    slug: '30kva-solar-mini-grid',
    division: 'solar',
    title: '30kVA Solar Mini-Grid',
    category: 'Church',
    tags: ['Installation'],
    location: 'Independence Layout, Enugu',
    capacity: '30kVA · 22kWp · 45kWh',
    completionDate: 'December 2024',
    durationOnSite: '3 weeks',
    clientType: '2,500-seat worship centre',
    summary:
      'Generator hum was on every recording the media team produced, and services were being interrupted mid-sentence.',
    challenge:
      'The auditorium, offices and media suite all ran from one generator parked close to the building. Sound engineers were spending hours cleaning low-frequency rumble out of recordings, and a fuel run mid-service meant a blackout.',
    clientRequirement:
      'Silent, uninterrupted power for the PA system, digital mixers, projectors, stage lighting and administrative offices, with clean earth for the audio equipment.',
    solutionProvided:
      'Three 10kVA inverters in parallel on a three-phase board, fed by a 22kWp ground-mounted array on galvanised steel structures set away from the building. A separate clean-earth reference for the audio rack removed the hum at source, and 45kWh of storage carries a full Sunday programme.',
    systemDesign: [
      { label: 'Service-day demand', value: '18.5 kW peak, 6 hours' },
      { label: 'Array', value: '40 × 550W, ground-mounted, 22kWp' },
      { label: 'Storage', value: '45 kWh across three cabinets' },
      { label: 'Audio earthing', value: 'Isolated clean-earth reference' },
      { label: 'Lightning protection', value: 'ESE mast with perimeter bonding' },
    ],
    equipmentUsed: [
      '3 × 10kVA parallel three-phase inverters',
      '40 × 550W monocrystalline modules (22kWp ground array)',
      '3 × 15kWh lithium battery cabinets',
      'Galvanised steel ground-mounting structure',
      'Early streamer emission lightning mast and perimeter bonding',
    ],
    installationProcess: [
      {
        title: 'Site survey and piling',
        detail:
          'Topographical survey of the church grounds, then concrete-anchored piling for the array frames clear of the tree line.',
      },
      {
        title: 'Underground DC run',
        detail:
          'Armoured DC cable trenched from the array to the plant room, sand-bedded with warning tape above.',
      },
      {
        title: 'Plant room build',
        detail:
          'A ventilated, lockable control room for inverters and battery cabinets, with temperature monitoring.',
      },
      {
        title: 'Clean earth for audio',
        detail:
          'A separate earth reference for the broadcast rack, which is what finally removed the hum from recordings.',
      },
      {
        title: 'Live rehearsal test',
        detail:
          'Full stress test during a rehearsal with stage lighting, PA and projection running together.',
      },
    ],
    results: [
      'Recordings now come off the desk without generator rumble',
      'Services run start to finish without a power interruption',
      'Generator retained purely as an emergency backstop',
      'Roughly ₦6m a year in avoided fuel and maintenance',
    ],
    metrics: [
      { value: '22 kWp', label: 'Ground-mounted array' },
      { value: '45 kWh', label: 'Storage capacity' },
      { value: '0', label: 'Service interruptions since' },
    ],
    coverImage: '/images/projects/30kva-church-enugu/cover.jpg',
    coverAlt: 'Aerial view of a ground-mounted solar array in open ground',
    gallery: [
      {
        src: '/images/projects/30kva-church-enugu/before.jpg',
        stage: 'before',
        caption: 'Before — the auditorium on a single diesel generator',
        alt: 'Church building exterior before the solar mini-grid',
      },
      {
        src: '/images/projects/30kva-church-enugu/installation.jpg',
        stage: 'installation',
        caption: 'Setting out the ground-mount structures',
        alt: 'Engineer inspecting a ground-mounted solar array under construction',
      },
      {
        src: '/images/projects/30kva-church-enugu/equipment.jpg',
        stage: 'equipment',
        caption: 'Plant room — three inverters, three battery cabinets',
        alt: 'Plant room with parallel inverters and a standby generator',
      },
      {
        src: '/images/projects/30kva-church-enugu/cover.jpg',
        stage: 'detail',
        caption: 'Forty modules across the ground array',
        alt: 'Aerial photograph of the completed ground-mounted solar farm',
      },
      {
        src: '/images/projects/30kva-church-enugu/result.jpg',
        stage: 'result',
        caption: 'After — full programme power, and silence between songs',
        alt: 'Church building after the installation',
      },
    ],
    featured: true,
    isExample: true,
  },

  {
    id: 'p-15kva-clinic-ibadan',
    slug: '15kva-medical-clinic-system',
    division: 'solar',
    title: '15kVA Medical Clinic System',
    category: 'Commercial',
    tags: ['Installation', 'Healthcare'],
    location: 'Bodija, Ibadan',
    capacity: '15kVA · 11kWp · 20kWh',
    completionDate: 'February 2025',
    durationOnSite: '6 days',
    clientType: 'Private medical clinic',
    summary:
      'A vaccine fridge and a theatre cannot wait for a generator to start. This system removes the gap entirely.',
    challenge:
      'The clinic had lost a batch of vaccines to a cold-chain break, and night deliveries were being carried out on torchlight during changeover.',
    clientRequirement:
      'Absolutely no interruption to vaccine refrigeration, laboratory incubators, ultrasound and theatre lighting — including during maintenance on any single inverter.',
    solutionProvided:
      'Two 8kVA inverters in a redundant configuration: either one alone carries the critical circuit, so servicing never takes the clinic offline. Critical-life circuits were separated from general lighting and offices, and an isolation transformer protects the diagnostic equipment.',
    systemDesign: [
      { label: 'Critical circuit load', value: '5.2 kW continuous' },
      { label: 'Redundancy', value: 'N+1 — either inverter carries the load' },
      { label: 'Array', value: '20 × 550W modules, 11kWp' },
      { label: 'Storage', value: '20 kWh lithium, 18 hours on critical load' },
      { label: 'Protection', value: 'Isolation transformer and surge suppression' },
    ],
    equipmentUsed: [
      '2 × 8kVA redundant pure sine wave inverters',
      '20 × 550W solar modules (11kWp)',
      '2 × 10kWh lithium battery banks',
      'Medical-grade isolation transformer and surge suppressors',
      'Dedicated critical-circuit distribution board',
    ],
    installationProcess: [
      {
        title: 'Electrical audit',
        detail:
          'Every circuit in the building traced and classified as critical or general before any equipment was ordered.',
      },
      {
        title: 'Corrosion-resistant roof build',
        detail: 'Stainless fixings and anti-corrosion fittings throughout, given the site exposure.',
      },
      {
        title: 'Redundant inverter wiring',
        detail:
          'Two inverters wired so that either can be isolated for service while the other carries the theatre and cold chain.',
      },
      {
        title: 'Blackout simulation',
        detail:
          'Grid and generator both cut without warning, with fridge temperatures logged throughout the test.',
      },
    ],
    results: [
      'Cold chain unbroken since commissioning',
      'Night procedures continue through grid failure without a flicker',
      'Either inverter can be serviced without closing the clinic',
      'Monthly running costs down substantially against generator-only operation',
    ],
    metrics: [
      { value: 'N+1', label: 'Inverter redundancy' },
      { value: '18 hrs', label: 'Critical-load autonomy' },
      { value: '0', label: 'Cold-chain breaks' },
    ],
    coverImage: '/images/projects/15kva-clinic-ibadan/cover.jpg',
    coverAlt: 'Medical clinic building exterior',
    gallery: [
      {
        src: '/images/projects/15kva-clinic-ibadan/before.jpg',
        stage: 'before',
        caption: 'Before — clinic dependent on generator changeover',
        alt: 'Clinic building before the solar installation',
      },
      {
        src: '/images/projects/15kva-clinic-ibadan/installation.jpg',
        stage: 'installation',
        caption: 'Module fixing over the clinic roof',
        alt: 'Close-up of a technician fastening a solar module',
      },
      {
        src: '/images/projects/15kva-clinic-ibadan/equipment.jpg',
        stage: 'equipment',
        caption: 'Critical-circuit board, separated and labelled',
        alt: 'Electrical distribution board with circuit breakers',
      },
      {
        src: '/images/projects/15kva-clinic-ibadan/result.jpg',
        stage: 'result',
        caption: 'After — theatre lighting independent of the grid',
        alt: 'Operating theatre with lighting and equipment powered',
      },
    ],
    isExample: true,
  },

  {
    id: 'p-50kva-maintenance-ikeja',
    slug: '50kva-system-overhaul-maintenance',
    division: 'solar',
    title: '50kVA System Overhaul',
    category: 'Maintenance',
    tags: ['Maintenance', 'Industrial'],
    location: 'Ikeja Industrial Estate, Lagos',
    capacity: '50kVA system · 36kWp array',
    completionDate: 'March 2025',
    durationOnSite: '4 days',
    clientType: 'Pharmaceutical warehouse',
    summary:
      'Output had fallen by a third in two years. Nothing was broken — it was dust, torque and a battery bank out of balance.',
    challenge:
      'The facility manager assumed the array was failing and had been quoted for replacement modules. A thermal survey showed the real picture: heavy industrial dust, four hot-spot cells, loose busbar terminations and an unbalanced battery bank.',
    clientRequirement:
      'Establish why generation had dropped 32%, restore output, and put a maintenance schedule in place that prevents a repeat.',
    solutionProvided:
      'A full thermographic survey under peak sun, de-ionised water cleaning across the whole array, replacement of four damaged modules, re-torquing of every high-current termination to specification, BMS cell balancing and an inverter firmware update.',
    systemDesign: [
      { label: 'Survey method', value: 'Thermal imaging at peak irradiance' },
      { label: 'Cleaning', value: 'De-ionised water, non-abrasive, no detergents' },
      { label: 'Termination torque', value: 'Re-torqued to 12 N·m specification' },
      { label: 'Battery service', value: 'Full cell balance and BMS calibration' },
      { label: 'Follow-up', value: 'Quarterly inspection schedule agreed' },
    ],
    equipmentUsed: [
      'Thermal imaging camera for hot-spot detection',
      'De-ionised water panel washing unit',
      'BMS diagnostic scanner and cell equaliser',
      'Calibrated torque wrenches and contact cleaner',
      '4 × replacement 550W modules',
    ],
    installationProcess: [
      {
        title: 'Thermographic survey',
        detail:
          'Whole array scanned at 1pm under full sun, identifying four hot-spot modules and one overheating termination.',
      },
      {
        title: 'Array cleaning',
        detail:
          'De-ionised water and soft brushes across 36kWp — no detergents, which leave a film that attracts more dust.',
      },
      {
        title: 'Electrical retermination',
        detail:
          'Every DC and AC termination re-torqued to specification; the overheating joint was found before it became a fire.',
      },
      {
        title: 'Battery rebalance',
        detail: 'Cell-level balancing and BMS calibration across the bank, then a full charge cycle test.',
      },
    ],
    results: [
      'Daily generation restored by 28.5%',
      'Overheating termination found and corrected before failure',
      'Battery bank life extended by an estimated four years',
      'Quarterly maintenance schedule now in place',
    ],
    metrics: [
      { value: '+28.5%', label: 'Daily output recovered' },
      { value: '4', label: 'Hot-spot modules replaced' },
      { value: '1', label: 'Fire risk found and fixed' },
    ],
    coverImage: '/images/projects/50kva-maintenance-ikeja/cover.jpg',
    coverAlt: 'Technician cleaning solar panels with a long-handled brush',
    gallery: [
      {
        src: '/images/projects/50kva-maintenance-ikeja/before.jpg',
        stage: 'before',
        caption: 'Before — two years of industrial dust on the glass',
        alt: 'Close-up of soiled solar panel surface',
      },
      {
        src: '/images/projects/50kva-maintenance-ikeja/cover.jpg',
        stage: 'installation',
        caption: 'De-ionised wash across the full 36kWp array',
        alt: 'Solar panels being cleaned with a brush and water',
      },
      {
        src: '/images/projects/50kva-maintenance-ikeja/installation.jpg',
        stage: 'equipment',
        caption: 'Re-torquing terminations to specification',
        alt: 'Gloved hands working on electrical terminations',
      },
      {
        src: '/images/projects/50kva-maintenance-ikeja/equipment.jpg',
        stage: 'detail',
        caption: 'Safety sign-off before the array is re-energised',
        alt: 'Safety helmet resting on a solar panel',
      },
      {
        src: '/images/projects/50kva-maintenance-ikeja/result.jpg',
        stage: 'result',
        caption: 'After — output back above the original commissioning figure',
        alt: 'Clean solar array seen from above',
      },
    ],
    isExample: true,
  },

  // ─── CCTV & SECURITY ────────────────────────────────────────────────
  {
    id: 'p-estate-perimeter-security',
    slug: 'estate-perimeter-security-system',
    division: 'security',
    title: 'Estate Perimeter Security System',
    category: 'Security',
    tags: ['Installation', 'Residential'],
    location: 'Ajah, Lagos',
    capacity: '18 cameras · 640m electric fence',
    completionDate: 'May 2025',
    durationOnSite: '8 days',
    clientType: 'Gated residential estate (22 homes)',
    summary:
      'Two break-ins in one quarter, a wall anyone could climb, and a gate log kept in an exercise book.',
    challenge:
      'The estate wall had no deterrent on top, the only cameras were two consumer units that stopped recording whenever the power went, and the gatehouse logged visitors by hand. After two break-ins in three months the residents association wanted the whole perimeter dealt with at once.',
    clientRequirement:
      'Stop people coming over the wall, see and record every approach to the estate day and night, and know who came through the gate and when — without the system dying during an outage.',
    solutionProvided:
      'A 6-strand monitored electric fence along the full 640m perimeter with razor wire at the two lowest sections, 18 IP cameras covering the wall line, gate and internal roads, and a fingerprint-and-card access point at the pedestrian gate. The NVR, energizer and access controller all run from a dedicated inverter and battery so nothing drops when the grid does.',
    systemDesign: [
      { label: 'Perimeter', value: '640m, 6-strand wall-top electric fence' },
      { label: 'Energizer', value: 'Monitored, 2 zones, siren on cut or short' },
      { label: 'Cameras', value: '18 × 4MP IP, colour night vision' },
      { label: 'Recording', value: '16TB NVR, 30 days continuous' },
      { label: 'Backup power', value: '3kVA inverter, 5kWh lithium — 14 hours' },
    ],
    equipmentUsed: [
      'Monitored 2-zone electric fence energizer with siren',
      '640m high-tensile wire on galvanised wall-top brackets',
      '18 × 4MP colour night-vision IP cameras',
      '32-channel NVR with 16TB storage',
      'Fingerprint and card access terminal with magnetic lock',
      '3kVA inverter with 5kWh lithium battery for the security loads',
    ],
    installationProcess: [
      {
        title: 'Perimeter survey',
        detail:
          'Walked and measured the full wall line, marked weak points, camera poles and the two low sections that needed razor wire as well as fence.',
      },
      {
        title: 'Electric fence',
        detail:
          'Brackets set every 3m, six strands tensioned, gate bypass cables run underground, and earth spikes driven and tested every 30m.',
      },
      {
        title: 'Camera network',
        detail:
          'Cat6 runs in conduit to each camera, PoE switches in weatherproof boxes, and overlapping views so no stretch of wall is covered by a single camera.',
      },
      {
        title: 'Gate access control',
        detail:
          'Fingerprint and card reader on the pedestrian gate with a magnetic lock, and a visitor log that replaced the exercise book.',
      },
      {
        title: 'Power and handover',
        detail:
          'All security loads moved onto a dedicated inverter, then a night test of every camera and a fence voltage check on every strand.',
      },
    ],
    results: [
      'No perimeter breach since the fence went live',
      'Every approach recorded in colour, day and night',
      'Security runs straight through grid outages',
      'Residents view the gate cameras from their phones',
    ],
    metrics: [
      { value: '640m', label: 'Perimeter protected' },
      { value: '18', label: 'Cameras recording 24/7' },
      { value: '14 hrs', label: 'Backup on security loads' },
    ],
    coverImage: '/images/projects/estate-perimeter-security/cover.jpg',
    coverAlt: 'Estate perimeter wall with a gate and multi-strand electric fence along the top',
    gallery: [
      {
        src: '/images/projects/estate-perimeter-security/before.jpg',
        stage: 'before',
        caption: 'Before — a plain wall with nothing on top of it',
        alt: 'Brick perimeter wall and houses before the security installation',
      },
      {
        src: '/images/projects/estate-perimeter-security/installation.jpg',
        stage: 'installation',
        caption: 'Dome and bullet cameras mounted with cable in conduit',
        alt: 'Dome and bullet CCTV cameras mounted on a building ledge',
      },
      {
        src: '/images/projects/estate-perimeter-security/equipment.jpg',
        stage: 'equipment',
        caption: 'Razor wire and warning signage on the low sections',
        alt: 'Danger electric fence sign on razor wire',
      },
      {
        src: '/images/projects/estate-perimeter-security/detail.jpg',
        stage: 'detail',
        caption: 'Pedestrian gate keypad and card reader',
        alt: 'Illuminated access control keypad mounted on a wall',
      },
      {
        src: '/images/projects/estate-perimeter-security/cover.jpg',
        stage: 'result',
        caption: 'After — six live strands along the full perimeter',
        alt: 'Perimeter wall with electric fence strands and warning sign',
      },
    ],
    featured: true,
    isExample: true,
  },

  {
    id: 'p-office-cctv-access-control',
    slug: 'office-cctv-access-control',
    division: 'security',
    title: 'Office CCTV & Access Control',
    category: 'Security',
    tags: ['Installation', 'Commercial'],
    location: 'Wuse II, Abuja',
    capacity: '24 cameras · 9 controlled doors',
    completionDate: 'July 2025',
    durationOnSite: '6 days',
    clientType: 'Nine-floor office building',
    summary:
      'Keys nobody could account for, a server room anyone could walk into, and cameras that recorded over themselves every two days.',
    challenge:
      'The building had outgrown its security. Forty-odd keys were in circulation for nine floors, the server room had a standard lock, and the old DVR only held two days of footage — so by the time an incident was reported, the recording was gone.',
    clientRequirement:
      'Control who can enter which floor and room, keep at least a month of footage, and give management a way to see the building remotely.',
    solutionProvided:
      'Twenty-four IP cameras covering entrances, stairwells, parking and every floor lobby, recording to an NVR sized for 45 days. Nine doors — the main entrance, each floor lobby and the server room — moved to fingerprint-and-card readers with magnetic locks, all logged centrally with attendance reports for HR.',
    systemDesign: [
      { label: 'Cameras', value: '24 × 4MP IP, dome indoors, bullet outdoors' },
      { label: 'Recording', value: '45 days continuous, RAID-protected NVR' },
      { label: 'Controlled doors', value: '9 — entrance, 7 lobbies, server room' },
      { label: 'Credentials', value: 'Fingerprint + card, time schedules per role' },
      { label: 'Remote access', value: 'Management app with live view and playback' },
    ],
    equipmentUsed: [
      '16 × 4MP dome cameras (indoor)',
      '8 × 4MP bullet cameras with colour night vision (outdoor)',
      '32-channel 4K NVR with RAID storage',
      '9 × fingerprint and card access terminals',
      'Magnetic locks, exit buttons and backup power supplies',
      'Type 2 surge protection on the security distribution board',
    ],
    installationProcess: [
      {
        title: 'Floor-by-floor survey',
        detail:
          'Mapped every entrance, stairwell and lobby, agreed camera positions with facilities, and identified which doors needed control.',
      },
      {
        title: 'Cabling',
        detail:
          'Cat6 through the existing risers and ceiling voids, terminated to a PoE switch on each floor.',
      },
      {
        title: 'Cameras and recorder',
        detail:
          'Indoor domes and outdoor bullets mounted and aimed, NVR racked in the server room with RAID storage for 45 days.',
      },
      {
        title: 'Access control',
        detail:
          'Readers, magnetic locks and exit buttons on nine doors, each with battery backup so doors fail safe in an outage.',
      },
      {
        title: 'Enrolment and training',
        detail:
          'Every staff member enrolled, access schedules set by role, and a session with management on the app and reports.',
      },
    ],
    results: [
      'Forty loose keys replaced by credentials that can be revoked in seconds',
      'Server room entry limited to three named people, and logged',
      '45 days of footage instead of two',
      'HR attendance reports straight from the door readers',
    ],
    metrics: [
      { value: '24', label: 'Cameras installed' },
      { value: '45 days', label: 'Footage retained' },
      { value: '9', label: 'Doors under control' },
    ],
    coverImage: '/images/projects/office-cctv-access-control/cover.jpg',
    coverAlt: 'Pole with several surveillance cameras and a PTZ dome',
    gallery: [
      {
        src: '/images/projects/office-cctv-access-control/before.jpg',
        stage: 'before',
        caption: 'Before — nine floors on a 2-day DVR and a drawer of keys',
        alt: 'Office tower exterior before the security upgrade',
      },
      {
        src: '/images/projects/office-cctv-access-control/installation.jpg',
        stage: 'installation',
        caption: 'Bullet camera mounted under the car park soffit',
        alt: 'Bullet CCTV camera mounted on a ceiling',
      },
      {
        src: '/images/projects/office-cctv-access-control/equipment.jpg',
        stage: 'equipment',
        caption: 'Lobby access terminal',
        alt: 'Stainless steel access control keypad terminal',
      },
      {
        src: '/images/projects/office-cctv-access-control/result.jpg',
        stage: 'result',
        caption: 'After — entrances covered from two angles',
        alt: 'Two CCTV cameras on a pole against a blue sky',
      },
    ],
    isExample: true,
  },
];

/** Filter tabs used on the portfolio page, in display order. */
export const projectFilters = [
  'All',
  'Residential',
  'Commercial',
  'Church',
  'Industrial',
  'Security',
  'Maintenance',
] as const;

export const solarProjects = projectsData.filter((p) => p.division === 'solar');
export const securityProjects = projectsData.filter((p) => p.division === 'security');

/**
 * What the home page shows under "All": the featured solar work plus the
 * featured security job, so both halves of the business are visible.
 */
export const homeProjects = [
  ...solarProjects.filter((p) => p.featured).slice(0, 3),
  ...securityProjects.filter((p) => p.featured).slice(0, 1),
];

export const featuredProjects = projectsData.filter((p) => p.featured);

export const getProjectBySlug = (slug?: string) =>
  projectsData.find((project) => project.slug === slug);

export const getRelatedProjects = (current: Project, limit = 3) =>
  projectsData
    .filter((p) => p.id !== current.id)
    .sort((a, b) => (a.category === current.category ? -1 : b.category === current.category ? 1 : 0))
    .slice(0, limit);
