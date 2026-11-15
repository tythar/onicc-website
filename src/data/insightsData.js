export const insightsData = [
  {
    id: 'art-01',
    category: 'Optical Networking',
    categoryKey: 'networking',
    title: 'Optimizing Metro Optical Fiber Backhauls in Greater Kampala: Mitigating Latency & Packet Loss',
    date: 'November 2026',
    readTime: '6 min read',
    author: 'ONICC Network Engineering Team',
    badge: 'Technical Whitepaper',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'As enterprise bandwidth demand accelerates across Uganda, traditional single-path fiber links expose organizations to severe downtime from civil roadworks and fiber cuts. Here is how dual-ring optical route diversity and precision fusion splicing prevent network dropouts.',
    content: [
      'The expansion of Kampala’s business districts—from Nakasero and Kololo to Nakawa and Mukono—has triggered an unprecedented surge in data traffic. However, organizations frequently experience recurring micro-outages and elevated round-trip latency due to physical fiber degradation and uncalibrated mechanical splices.',
      'Core-Alignment vs. Cladding Alignment: In telecommunications, fusion splice loss must remain strictly under 0.05 dB per splice. ONICC technicians employ three-axis core-alignment fusion splicers paired with Optical Time-Domain Reflectometer (OTDR) trace validation across both 1310nm and 1550nm wavelengths. This ensures optical power margins withstand temperature shifts and environmental stress.',
      'Implementing Spanning Tree Protocol (RSTP/MSTP) across dual carrier uplinks guarantees that should an aerial fiber run along Jinja Road sustain physical severance, traffic shifts automatically within 50 milliseconds to an alternate underground conduit along the Northern Bypass route.'
    ],
    takeaways: [
      'Dual-route physical diversity is non-negotiable for critical banking and institutional ERP traffic.',
      'OTDR bidirectional trace certification eliminates phantom latency caused by dirty fiber end-faces.',
      'Automated L2/L3 failover keeps cloud telephony and video conferencing online through carrier faults.'
    ]
  },
  {
    id: 'art-02',
    category: 'Clean Energy & Power',
    categoryKey: 'solar',
    title: 'Engineering Hybrid Solar & LiFePO4 Energy Resilience for Commercial Server Halls',
    date: 'October 2026',
    readTime: '7 min read',
    author: 'ONICC Power Systems Group',
    badge: 'Infrastructure Analysis',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Fluctuating grid voltage and sudden brownouts degrade sensitive enterprise server hardware. An analysis of sizing Lithium Iron Phosphate (LiFePO4) storage banks and pure sine wave hybrid inverters to eliminate reboot downtime.',
    content: [
      'Commercial facilities in East Africa face persistent challenges with power quality. Sags, surges, and rolling brownouts don’t just interrupt work—they actively destroy switched-mode power supplies inside routers, switches, and server chassis.',
      'Why Traditional Lead-Acid Batteries Fail in the Tropics: Traditional AGM/gel lead-acid batteries degrade rapidly when ambient server room temperatures exceed 25°C, often dropping to 40% capacity within 18 months. By contrast, Lithium Iron Phosphate (LiFePO4) chemistry supports 6,000+ deep discharge cycles at up to 90% Depth of Discharge (DoD) while withstanding high ambient heat without thermal runaway risk.',
      'Zero-Break Transfer Switching: For telecommunications cabinets, switchover latency must remain under 10 milliseconds. Our hybrid inverter topologies operate in continuous online line-interactive mode, delivering clean sinusoidal AC output with Total Harmonic Distortion (THD) below 2.5%.'
    ],
    takeaways: [
      'LiFePO4 batteries deliver more than 4x the usable operational lifespan of conventional AGM batteries.',
      'Dedicated critical load segregation prevents non-essential air conditioning loads from draining server reserves.',
      'IoT remote BMS telemetry detects cell-level voltage imbalances weeks before physical failure occurs.'
    ]
  },
  {
    id: 'art-03',
    category: 'Premises Security',
    categoryKey: 'security',
    title: 'Zero-Trust Physical Security: Integrating Biometrics with Edge AI Video Analytics',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Physical Security Systems Lead',
    badge: 'Security Brief',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Keys and magnetic swipe cards can be lost, cloned, or shared. Discover how modern commercial facilities combine contactless facial recognition turnstiles with perimeter AI tripwires to maintain complete premises control.',
    content: [
      'Physical security is the foundational first layer of cybersecurity. An unmonitored server room door renders the most sophisticated enterprise firewall completely irrelevant.',
      'Modern facilities are migrating to zero-trust access control. Contactless multi-spectral facial recognition terminals verify live human presence within 0.2 seconds while preventing photograph or video spoofing.',
      'Simultaneously, edge AI surveillance cameras monitor restricted perimeters, automatically triggering audible deterrents and real-time security alerts if an unauthorized person lingers near fiber junction enclosures after business hours.'
    ],
    takeaways: [
      'Anti-passback protocols prevent a single valid credential from admitting multiple individuals.',
      'H.265+ smart video encoding reduces NVR storage requirements by up to 70% without sacrificing resolution.',
      'Physical access audit logs provide auditable timestamps for ISO/IEC 27001 regulatory compliance.'
    ]
  },
  {
    id: 'art-04',
    category: 'Institutional ICT',
    categoryKey: 'labs',
    title: 'Architecting High-Density Computer Laboratories for Ugandan Educational Institutions',
    date: 'September 2026',
    readTime: '6 min read',
    author: 'ONICC Educational Systems Team',
    badge: 'Institutional Guide',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Deploying a 50 to 100-seat student laboratory requires far more than placing computers on desks. Key considerations in power distribution, network throttling, thermal dissipation, and centralized image restoration.',
    content: [
      'Computer laboratories in schools, vocational institutes, and universities undergo brutal operational wear. Without proper thermal airflow planning and power conditioning, hardware failure rates can cripple educational curricula.',
      'Power Distribution & Circuit Separation: Fifty desktop computers starting simultaneously generate a substantial inductive inrush current. ONICC engineers separate laboratory circuits across staggered circuit breakers with dedicated neutral lines and industrial surge suppressors.',
      'Centralized Disk Imaging: Installing individual updates on 80 workstations manually is impossible for lean IT departments. We implement automated PXE network boot imaging systems, allowing an entire lab to be restored to a pristine exam-ready state with one click.'
    ],
    takeaways: [
      'Per-seat network bandwidth caps prevent single workstations from saturating shared institution broadband.',
      'Under-desk enclosed cable trays protect patch cords and power lines from accidental foot kicks.',
      'Content-filtering firewalls ensure students remain focused on educational resources during lab sessions.'
    ]
  },
  {
    id: 'art-05',
    category: 'Digital Transformation',
    categoryKey: 'software',
    title: 'Modernizing Enterprise Workflows: The Strategic Transition from Spreadsheets to Custom ERPs',
    date: 'September 2026',
    readTime: '5 min read',
    author: 'Software Architecture Practice',
    badge: 'Enterprise Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why mid-sized enterprises across East Africa encounter operational gridlock when relying on manual spreadsheets for inventory, procurement, and mobile money reconciliation—and how custom cloud software unlocks rapid scalability.',
    content: [
      'As organizations grow beyond 20 employees and multiple branch locations, spreadsheet-based management breaks down. Version collisions, accidental cell deletions, and lack of audit trails create significant financial reconciliation leaks.',
      'By transitioning to a custom web-based enterprise portal backed by PostgreSQL and encrypted cloud storage, organizations establish a single source of truth.',
      'Direct integration with MTN Mobile Money and Airtel Money merchant APIs enables instant automated verification of customer invoice payments, eliminating manual bank slip cross-checking and human error.'
    ],
    takeaways: [
      'Role-based permission matrices ensure sensitive financial records are visible only to authorized leadership.',
      'Offline-capable progressive web apps allow regional field officers to input inventory data even during mobile network outages.',
      'Automated daily cloud backups eliminate the risk of catastrophic local data loss from hard drive failures.'
    ]
  }
]
