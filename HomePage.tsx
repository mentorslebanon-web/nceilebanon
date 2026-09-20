/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EcosystemTelemetryNode {
  id: string;
  name: string;
  region: string;
  type: 'RAG Knowledge Oracle' | 'HPC Compute Cluster' | 'Hospital FHIR Gateway' | 'Smart Escrow Vault' | 'Civic API Bridge' | 'Angel Dealroom Relay';
  status: 'operational' | 'syncing' | 'verifying';
  latencyMs: number;
  uptime: string;
  peersConnected: number;
  protocol: string;
  throughputKbs: number;
}

const REGIONS = [
  'Beirut - Hamra District',
  'Beirut - Central District (BCD)',
  'Beirut - Achrafieh Tech Hub',
  'Beirut - Badaro Creative Loft',
  'Mount Lebanon - Berytech Mar Roukoz',
  'Mount Lebanon - Mkalles Industrial Cluster',
  'Tripoli - Mina Knowledge District',
  'Tripoli - Azm Digital Sandbox',
  'Byblos - LAU Sovereign Server Lab',
  'Sidon - South Tech Corridor',
  'Zahle - Bekaa AgTech Gateway',
  'Tyre - Coastal IoT Hub',
  'Chouf - EcoTech Node',
  'Diaspora - Dubai DIFC Relay',
  'Diaspora - Riyadh KAFD Bridge',
  'Diaspora - Paris Station F Portal'
];

const NODE_TYPES: EcosystemTelemetryNode['type'][] = [
  'RAG Knowledge Oracle',
  'HPC Compute Cluster',
  'Hospital FHIR Gateway',
  'Smart Escrow Vault',
  'Civic API Bridge',
  'Angel Dealroom Relay'
];

const PROTOCOLS = [
  'mTLS Zero-Knowledge Proof',
  'WireGuard Sovereign Tunnel',
  'gRPC High-Throughput Bus',
  'QUIC / HTTP/3 Edge Transport'
];

/**
 * 466 Sovereign Telemetry Nodes across Lebanon and the Global Diaspora
 * High-density dataset utilized for testing virtualization and sub-millisecond filtering.
 */
export const ECOSYSTEM_TELEMETRY_NODES: EcosystemTelemetryNode[] = Array.from({ length: 466 }, (_, index) => {
  const nodeNum = index + 1;
  const region = REGIONS[index % REGIONS.length];
  const type = NODE_TYPES[index % NODE_TYPES.length];
  const protocol = PROTOCOLS[index % PROTOCOLS.length];
  const status: EcosystemTelemetryNode['status'] = index % 37 === 0 ? 'syncing' : index % 73 === 0 ? 'verifying' : 'operational';
  const baseLatency = 6 + (index % 25);
  const latencyMs = status === 'syncing' ? baseLatency + 18 : baseLatency;
  const peersConnected = 14 + (index * 7) % 80;
  const throughputKbs = 180 + (index * 43) % 1200;

  const paddedNum = String(nodeNum).padStart(3, '0');
  const code = type.split(' ').map(w => w[0]).join('');

  return {
    id: `node-${paddedNum}`,
    name: `NCEI-${code}-${paddedNum} // ${region.split(' - ')[1] || region}`,
    region,
    type,
    status,
    latencyMs,
    uptime: index % 50 === 0 ? '99.92%' : '99.99%',
    peersConnected,
    protocol,
    throughputKbs
  };
});
