import { asset } from '../utils/asset'
/**
 * Technology Ecosystem & Industry Alignment Data
 * Categorized accurately without claiming unverified official partnerships,
 * strictly adhering to industry terms: Technology Ecosystem, Infrastructure Platforms,
 * Carrier Connectivity, and Equipment Standards.
 */

export const ecosystemCategories = [
  {
    id: 'carriers',
    title: 'Telecommunication Carrier Interconnects & Backhaul Providers',
    description: 'National and regional telecom service providers whose fiber backbones, IP transit, and dedicated leased lines ONICC interfaces with to deliver redundant enterprise connectivity.',
    platforms: [
      {
        name: 'MTN Uganda',
        logo: asset('/images/partners/mtn.png'),
        role: 'Carrier Fiber Interconnect & Mobile Data',
        scope: 'Metro fiber backhaul, dedicated DIA leased circuits, and corporate APN connectivity across Uganda.',
        badge: 'National Carrier Interconnect'
      },
      {
        name: 'Airtel Uganda',
        logo: asset('/images/partners/airtel.png'),
        role: 'Carrier IP Transit & Cellular Backhaul',
        scope: 'High-capacity dark fiber interconnects, enterprise broadband gateways, and corporate mobile money integration.',
        badge: 'National Carrier Interconnect'
      },
      {
        name: 'RENU',
        logo: asset('/images/partners/renu.png'),
        fullName: 'Research and Education Network for Uganda',
        role: 'Academic & Institutional Optical Backbone',
        scope: 'Dedicated low-latency optical interconnects and peering for higher education institutions and university campuses.',
        badge: 'Academic Network Backbone'
      }
    ]
  },
  {
    id: 'hardware',
    title: 'Enterprise Hardware, Optical & Power Infrastructure',
    description: 'World-leading equipment manufacturers whose enterprise routing, optical transmission gear, solar inverters, and surveillance hardware we architect into turnkey client solutions.',
    platforms: [
      {
        name: 'Huawei Enterprise',
        logo: asset('/images/partners/huawei.png'),
        role: 'Optical Transmission & Carrier-Grade Routing',
        scope: 'Dense Wavelength Division Multiplexing (DWDM), GPON optical line terminals, and industrial networking switches.',
        badge: 'Optical & Switching Ecosystem'
      },
      {
        name: 'Cisco Systems',
        logo: asset('/images/partners/cisco.png'),
        role: 'Enterprise Core Routing & Unified Security',
        scope: 'Catalyst enterprise switches, ASA/Firepower security firewalls, and campus-wide structured networking architectures.',
        badge: 'Core Routing Ecosystem'
      },
      {
        name: 'Mikrotik Networks',
        logo: asset('/images/partners/mikrotik.png'),
        role: 'High-Throughput Edge Routing & Bandwidth Control',
        scope: 'RouterBOARD core gateways, multi-WAN load balancing, hotspot billing gateways, and long-range wireless backhauls.',
        badge: 'Edge Gateway Ecosystem'
      },
      {
        name: 'Ubiquiti UniFi',
        logo: asset('/images/partners/ubiquiti.png'),
        role: 'High-Density Wi-Fi 6 & Campus Access Points',
        scope: 'Centralized controller-managed access points, PoE distribution switching, and long-distance airMAX wireless bridging.',
        badge: 'Wireless Ecosystem'
      },
      {
        name: 'Hikvision / Dahua',
        logo: asset('/images/partners/hikvision.png'),
        role: 'AI-Powered IP Surveillance & Thermal Vision',
        scope: 'Ultra HD 4K night-vision cameras, ColorVu optical sensors, facial recognition turnstiles, and RAID storage NVRs.',
        badge: 'Security Ecosystem'
      },
      {
        name: 'Schneider Electric / APC',
        logo: asset('/images/partners/schneider-electric.png'),
        role: 'Power Protection & Smart Inverter Systems',
        scope: 'Data center Smart-UPS systems, modular power distribution units (PDUs), and precision server rack cooling.',
        badge: 'Power & Racking Ecosystem'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure, OS & Enterprise Software Platforms',
    description: 'Global cloud platforms, directory services, and database environments configured and maintained by ONICC engineering teams.',
    platforms: [
      {
        name: 'Microsoft 365 & Azure',
        logo: asset('/images/partners/microsoft.png'),
        role: 'Cloud Productivity & Hybrid Directory',
        scope: 'Exchange Online corporate email, Azure Active Directory identity sync, SharePoint intranets, and virtual cloud servers.',
        badge: 'Cloud Platform Ecosystem'
      },
      {
        name: 'Google Cloud & Workspace',
        logo: asset('/images/partners/google-cloud.png'),
        role: 'Enterprise Collaboration & Cloud APIs',
        scope: 'Business Gmail, Google Drive enterprise security controls, BigQuery data analytics, and cloud compute engines.',
        badge: 'Cloud Platform Ecosystem'
      },
      {
        name: 'Linux & Open Source Stack',
        logo: asset('/images/partners/linux.png'),
        role: 'Server Operating Systems & Containerization',
        scope: 'Ubuntu Server, Debian, and Rocky Linux hosting environments, Docker container virtualization, and Nginx reverse proxies.',
        badge: 'Open Architecture Stack'
      }
    ]
  }
]

export const engineeringPrinciples = [
  {
    title: 'Vendor-Neutral Engineering',
    desc: 'We architect infrastructure based strictly on performance, environmental suitability, and client budget rather than single-vendor lock-in.'
  },
  {
    title: 'Ugandan Telecommunications Compliance',
    desc: 'All optical, wireless, and power installations conform to Uganda Communications Commission (UCC) and national electrical engineering safety standards.'
  },
  {
    title: 'Turnkey Interoperability',
    desc: 'From fiber splices to cloud databases, every component in the ONICC stack is engineered to interoperate smoothly with existing client systems.'
  }
]
