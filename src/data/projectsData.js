/**
 * ONICC Project Portfolio Data
 * Note: Clearly labelled sample project blueprints representing ONICC's technical capability areas.
 * Structured for future CMS/backend integration without claiming unverified client endorsements.
 */
export const projectsData = [
  {
    id: 'proj-01',
    title: 'Metro Optical Fiber Ring & Campus Backhaul',
    category: 'Telecommunications',
    categoryKey: 'telecom',
    sector: 'Education & Institutional',
    location: 'Kampala Central & Nakawa, Uganda',
    badge: 'Sample Engineering Blueprint',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    summary: 'Design and deployment of a 12-kilometer redundant single-mode optical fiber loop connecting three multi-storey academic campuses with sub-millisecond local latency.',
    challenge: 'The institution was operating on fragmented wireless links prone to severe packet loss and heavy latency during peak hours, impairing administrative systems and student portals.',
    solution: 'ONICC engineered an underground 48-core G.652.D single-mode fiber infrastructure ring featuring redundant route diversity, low-loss fusion splicing, and optical distribution frames (ODFs) at each campus server room.',
    deliverables: [
      '12 km underground HDPE conduit installation with warning tape and marker posts',
      'Precision core-alignment fusion splicing with OTDR bidirectional test validation',
      '10 Gbps Cisco optical transceiver uplinks with automated spanning tree failover',
      'Complete as-built CAD route documentation and emergency fiber restoration kits'
    ],
    metrics: [
      { label: 'Fiber Backhaul Speed', value: '10 Gbps' },
      { label: 'Optical Attenuation', value: '< 0.22 dB/km' },
      { label: 'Packet Loss Reduction', value: '99.4%' },
      { label: 'Campuses Interconnected', value: '3 Hubs' }
    ]
  },
  {
    id: 'proj-02',
    title: 'Commercial Solar Microgrid & 60kWh Energy Storage',
    category: 'Solar & Power',
    categoryKey: 'solar',
    sector: 'Manufacturing & Agro-Processing',
    location: 'Mukono Industrial Corridor, Uganda',
    badge: 'Sample Engineering Blueprint',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    summary: 'Turnkey 45kWp rooftop solar photovoltaic array integrated with three-phase hybrid inverters and 60kWh Lithium Iron Phosphate (LiFePO4) storage for continuous processing continuity.',
    challenge: 'Frequent 4-to-6 hour national grid outages and voltage fluctuations caused production halts, corrupted server databases, and inflated auxiliary diesel generator operating costs.',
    solution: 'Engineered a rooftop solar array with Tier-1 540W monocrystalline modules, dual 15kW hybrid inverters with smart MPPT tracking, and sub-10ms zero-break automatic transfer switches dedicated to sensitive server and packaging control circuits.',
    deliverables: [
      '45kWp rooftop solar mounting with galvanized wind-rated ballasted racking',
      '60kWh LiFePO4 rack-mounted energy storage system with active smart BMS balancing',
      'Pure sine wave inverter plant with harmonic distortion filter (THD < 2.5%)',
      'IoT cloud energy portal providing live generation telemetry and battery state-of-health'
    ],
    metrics: [
      { label: 'Peak Solar Yield', value: '45 kWp' },
      { label: 'Storage Capacity', value: '60 kWh' },
      { label: 'Grid Failover Time', value: '< 10 ms' },
      { label: 'Monthly Fuel Savings', value: '~68%' }
    ]
  },
  {
    id: 'proj-03',
    title: 'Enterprise AI Surveillance & Biometric Access Governance',
    category: 'Security & Surveillance',
    categoryKey: 'security',
    sector: 'Financial & Corporate',
    location: 'Nakasero Business District, Kampala, Uganda',
    badge: 'Sample Engineering Blueprint',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    summary: 'A unified perimeter and interior security architecture encompassing 64 4K IP cameras with edge AI analytics, optical speed gates, and multi-factor biometric server room access.',
    challenge: 'The commercial facility needed to replace an obsolete analog CCTV system with a unified, tamper-proof security architecture adhering to stringent financial data security guidelines.',
    solution: 'Designed and deployed an end-to-end IP video network over an isolated VLAN. Features AI perimeter intrusion detection, automated number plate recognition (ANPR) at parking gates, and dual-authentication facial/fingerprint door controllers.',
    deliverables: [
      '64 4K Ultra HD IP cameras with ColorVu night-vision and optical wide dynamic range',
      'Two 32-channel RAID-5 enterprise NVRs delivering 60-day encrypted retention',
      'Biometric access control terminals with anti-passback and real-time audit logging',
      'Centralized 4-screen security operations monitoring desk with battery backup'
    ],
    metrics: [
      { label: 'Camera Channels', value: '64 Ultra HD' },
      { label: 'Video Retention Period', value: '60 Days' },
      { label: 'Biometric Access Speed', value: '< 0.3 sec' },
      { label: 'Perimeter Coverage', value: '100% Zero-Blind' }
    ]
  },
  {
    id: 'proj-04',
    title: '80-Seat Turnkey Institutional ICT Computer Laboratory',
    category: 'ICT Laboratory Solutions',
    categoryKey: 'labs',
    sector: 'Higher Education & Vocational',
    location: 'Entebbe, Uganda',
    badge: 'Sample Engineering Blueprint',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    summary: 'Complete engineering of an 80-seat modern computer laboratory including ergonomic benching, structured copper cabling, content-filtering firewall, and centralized lab management software.',
    challenge: 'An expanding training institution required a robust ICT facility capable of hosting standardized certification examinations, intensive multimedia design, and coding bootcamps without network congestion.',
    solution: 'ONICC executed a turnkey fit-out: custom perimeter raceways, regulated power distribution boards, Cat6A gigabit drops per seat, enterprise Wi-Fi 6 access points, and disk-imaging software for instant lab resets.',
    deliverables: [
      '80 configured desktop workstations with dual-monitor instructor demonstration pod',
      'Dedicated server rack housing gigabit PoE switches, patch panels, and gateway router',
      'Hardware firewall enforcing safe internet browsing and bandwidth fairness per seat',
      'Centralized image deployment system enabling full 80-workstation wipe/restore in 15 mins'
    ],
    metrics: [
      { label: 'Workstation Capacity', value: '80 Seats' },
      { label: 'Network Throughput', value: '1 Gbps / Seat' },
      { label: 'OS Recovery Time', value: '< 15 mins' },
      { label: 'Firewall Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'proj-05',
    title: 'Distributed Enterprise ERP & Field Operations Mobile App',
    category: 'Software & Digital',
    categoryKey: 'software',
    sector: 'Logistics & Supply Chain',
    location: 'Jinja & Kampala Corridors, Uganda',
    badge: 'Sample Engineering Blueprint',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'A secure cloud-hosted enterprise resource planning (ERP) platform and companion Flutter mobile application enabling real-time dispatch, inventory reconciliation, and mobile money payments.',
    challenge: 'Manual paper-based dispatch records caused severe reconciliation discrepancies between regional warehouses and central Kampala finance teams, delaying billing cycles by weeks.',
    solution: 'Engineered a responsive React/Node.js web portal with PostgreSQL relational database and an offline-first mobile app for field drivers. Includes direct API integrations with MTN MoMo, Airtel Money, and automated SMS alerts.',
    deliverables: [
      'Custom web ERP covering purchase orders, dispatch tracking, and financial ledgers',
      'Android field driver application with offline synchronization and barcode scanning',
      'Automated reconciliation engine integrating with East African mobile money APIs',
      'Role-based access security with biometric login and cryptographic audit logging'
    ],
    metrics: [
      { label: 'Daily Field Transactions', value: '2,500+' },
      { label: 'Reconciliation Cycle', value: 'Instant' },
      { label: 'Data Sync Latency', value: '< 2 sec' },
      { label: 'Paperwork Reduction', value: '92%' }
    ]
  },
  {
    id: 'proj-06',
    title: 'High-Availability Cloud Hosting & Corporate Mail Migration',
    category: 'Cloud, Hosting & Domains',
    categoryKey: 'cloud',
    sector: 'Professional Services',
    location: 'Kololo, Kampala, Uganda',
    badge: 'Sample Engineering Blueprint',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    summary: 'Complete migration of 150+ corporate user accounts from legacy POP3/IMAP mailboxes to a fortified cloud collaboration suite with custom .ug DNS and automated offsite backups.',
    challenge: 'A prominent consulting partnership experienced recurring email deliverability failures, spam blacklisting, and lack of mobile calendar synchronization across its regional partners.',
    solution: 'Configured hardened DNSSEC, SPF, DKIM, and DMARC security records for their corporate .co.ug domain. Seamlessly migrated 12 years of historical email archives to enterprise cloud infrastructure with zero data loss or mailbox downtime.',
    deliverables: [
      'Zero-downtime cutover of 150 corporate mailboxes with historical PST data sync',
      'Enterprise DMARC enforcement protecting brand identity against phishing impersonation',
      'High-speed NVMe cloud web hosting cluster with multi-location automated daily snapshots',
      'Interactive executive training session on mobile email synchronization and 2FA security'
    ],
    metrics: [
      { label: 'Mailboxes Migrated', value: '150+' },
      { label: 'Migration Downtime', value: 'Zero Minutes' },
      { label: 'Email Deliverability', value: '99.8%' },
      { label: 'Daily Cloud Backup', value: 'Automated 3x' }
    ]
  }
]
