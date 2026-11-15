import { useState } from 'react'
import { Radio, Activity, Sun, BatteryCharging, Shield, Video, Server, Wifi, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function InfrastructureDiagram() {
  const [activeTab, setActiveTab] = useState('telecom')

  const architectures = {
    telecom: {
      title: 'Carrier-Grade Optical & Wireless Connectivity',
      subtitle: 'High-availability data transport engineered for sub-millisecond local latency and maximum fiber uptime.',
      nodes: [
        {
          id: 'tier1',
          name: 'Carrier Interconnects',
          subtitle: 'MTN • Airtel • RENU',
          specs: 'Redundant Dark Fiber / Microwave Backhaul',
          status: 'Active Trunk',
          icon: Radio,
          tag: 'Layer 1 / Physical'
        },
        {
          id: 'odf',
          name: 'Core Optical Terminal',
          subtitle: 'ODF Splicing & Patching',
          specs: 'Low-loss Fusion Splicing & OTDR Tested',
          status: '99.98% SLA',
          icon: Activity,
          tag: 'Layer 2 / Distribution'
        },
        {
          id: 'routing',
          name: 'Enterprise Core Routing',
          subtitle: 'Cisco / Mikrotik Aggregation',
          specs: 'BGP Multi-homing, VLAN Segmentation, QoS',
          status: '10 Gbps Thruput',
          icon: Server,
          tag: 'Layer 3 / Network'
        },
        {
          id: 'access',
          name: 'Premises High-Speed LAN',
          subtitle: 'Structured Cat6A & Wi-Fi 6',
          specs: 'PoE+ Switching to Workstations & APs',
          status: 'Gigabit Endpoints',
          icon: Wifi,
          tag: 'Layer 4 / Access'
        }
      ],
      metrics: [
        { label: 'Latency Optimization', value: '< 2.5ms', desc: 'Kampala Metro Ring' },
        { label: 'Fiber Link Budget', value: '0.22 dB/km', desc: 'G.652.D Single-Mode' },
        { label: 'Uptime Commitment', value: '99.9%', desc: 'Carrier Redundancy' }
      ]
    },
    solar: {
      title: 'Industrial & Commercial Hybrid Solar Resilience',
      subtitle: 'Clean, uninterruptible power systems engineered to protect mission-critical ICT infrastructure from grid instability.',
      nodes: [
        {
          id: 'pv',
          name: 'High-Efficiency PV Array',
          subtitle: 'Tier-1 Mono PERC Panels',
          specs: '540W+ Bifacial Modules with Surge Protection',
          status: 'Daytime Harvesting',
          icon: Sun,
          tag: 'Generation'
        },
        {
          id: 'mppt',
          name: 'Smart MPPT Controllers',
          subtitle: 'Dynamic Load Tracking',
          specs: '98.5% Conversion Efficiency with Fast Arcing Cutoff',
          status: 'Continuous Sync',
          icon: Cpu,
          tag: 'Regulation'
        },
        {
          id: 'storage',
          name: 'LiFePO4 Storage Bank',
          subtitle: 'Lithium Iron Phosphate',
          specs: '6,000+ Cycles, Smart BMS & Thermal Management',
          status: '10-Yr Cell Life',
          icon: BatteryCharging,
          tag: 'Energy Reserve'
        },
        {
          id: 'inverter',
          name: 'Pure Sine Hybrid Inverter',
          subtitle: 'Critical Load Transfer',
          specs: '< 10ms Zero-Break Switchover for Server Cabinets',
          status: 'Online Stabilized',
          icon: Server,
          tag: 'Power Bus'
        }
      ],
      metrics: [
        { label: 'Switchover Latency', value: '< 10ms', desc: 'Zero reboot downtime' },
        { label: 'Battery Cycle Life', value: '6,000+', desc: 'LiFePO4 Chemistry' },
        { label: 'Clean Power THD', value: '< 2.5%', desc: 'Pure Sine Wave Bus' }
      ]
    },
    security: {
      title: 'Integrated AI Surveillance & Access Governance',
      subtitle: 'Physical perimeter security and biometric identity enforcement integrated directly with central management.',
      nodes: [
        {
          id: 'cctv',
          name: '4K AI IP Surveillance',
          subtitle: 'Optical Zoom & Low-Light',
          specs: 'ColorVu / DarkFighter with Perimeter Human/Vehicle AI',
          status: '24/7 Recording',
          icon: Video,
          tag: 'Vision Sensing'
        },
        {
          id: 'access-control',
          name: 'Biometric Access Control',
          subtitle: 'Facial & RFID Turnstiles',
          specs: 'Multi-factor Server Room & Office Gateways',
          status: 'Instant Audit Logs',
          icon: Shield,
          tag: 'Identity Gate'
        },
        {
          id: 'nvr',
          name: 'Enterprise AI NVR Core',
          subtitle: 'RAID Storage Array',
          specs: 'H.265+ Compression, 60-day Retention & Heatmap',
          status: 'RAID-5 Resilient',
          icon: Server,
          tag: 'Storage & Analytics'
        },
        {
          id: 'dashboard',
          name: 'Unified Command Console',
          subtitle: 'Real-Time Telemetry',
          specs: 'Mobile Alerts, Remote Lockdown, Incident Export',
          status: 'Encrypted Stream',
          icon: Cpu,
          tag: 'Operations'
        }
      ],
      metrics: [
        { label: 'Resolution Standard', value: '4K Ultra HD', desc: 'Optical WDR Coverage' },
        { label: 'Biometric Match Time', value: '< 0.2s', desc: 'Anti-spoofing Algorithm' },
        { label: 'Storage Retention', value: '30-90 Days', desc: 'Enterprise RAID Storage' }
      ]
    }
  }

  const current = architectures[activeTab]

  return (
    <div className="infra-diagram-card">
      <div className="diagram-header">
        <div>
          <span className="diagram-badge">
            <Activity size={14} className="diagram-pulse-icon" />
            LIVE INFRASTRUCTURE BLUEPRINT
          </span>
          <h3 className="diagram-title">{current.title}</h3>
          <p className="diagram-subtitle">{current.subtitle}</p>
        </div>

        {/* Tab Switcher */}
        <div className="diagram-tabs" role="tablist">
          <button
            className={`diagram-tab-btn ${activeTab === 'telecom' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('telecom')}
            role="tab"
            aria-selected={activeTab === 'telecom'}
          >
            <Radio size={15} />
            <span>Fiber & Telecom</span>
          </button>
          <button
            className={`diagram-tab-btn ${activeTab === 'solar' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('solar')}
            role="tab"
            aria-selected={activeTab === 'solar'}
          >
            <Sun size={15} />
            <span>Solar & Power</span>
          </button>
          <button
            className={`diagram-tab-btn ${activeTab === 'security' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('security')}
            role="tab"
            aria-selected={activeTab === 'security'}
          >
            <Shield size={15} />
            <span>AI CCTV & Security</span>
          </button>
        </div>
      </div>

      {/* Interactive Node Flow Grid */}
      <div className="diagram-flow-container">
        <div className="diagram-nodes-grid">
          {current.nodes.map((node, index) => {
            const NodeIcon = node.icon
            return (
              <div key={node.id} className="diagram-node">
                <div className="node-number-tag">0{index + 1}</div>
                <div className="node-icon-box">
                  <NodeIcon size={22} />
                </div>
                <div className="node-tag">{node.tag}</div>
                <h4 className="node-name">{node.name}</h4>
                <p className="node-sub">{node.subtitle}</p>
                <div className="node-specs">{node.specs}</div>
                <div className="node-status">
                  <span className="status-indicator"></span>
                  <span>{node.status}</span>
                </div>

                {index < current.nodes.length - 1 && (
                  <div className="node-connector-arrow" aria-hidden="true">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Engineering Metrics Strip */}
      <div className="diagram-metrics-strip">
        <div className="metrics-label">
          <CheckCircle2 size={16} />
          <span>Engineering Standard:</span>
        </div>
        <div className="metrics-items">
          {current.metrics.map((m, idx) => (
            <div key={idx} className="metric-box">
              <span className="metric-val">{m.value}</span>
              <span className="metric-lbl">{m.label}</span>
              <span className="metric-desc">{m.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
