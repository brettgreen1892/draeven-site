'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const capabilities = [
  ['001', 'Observe', 'Ingest fragmented signals from degraded, disconnected, and contested environments.'],
  ['002', 'Verify', 'Challenge every input before it is allowed to influence operational belief.'],
  ['003', 'Believe', 'Fuse evidence into probabilistic understanding with uncertainty preserved.'],
  ['004', 'Predict', 'Forecast adversarial movement, terrain change, spoofing risk, and mission state.'],
  ['005', 'Decide', 'Convert trusted belief into action-ready intelligence at the edge.'],
  ['006', 'Recover', 'Detect compromised reality states and restore decision integrity.'],
  ['007', 'Adapt', 'Continuously update the world model as conditions change.'],
];

const architecture = [
  'Reality Integrity Assessment',
  'Evidence Reservoir',
  'Belief-State Engine',
  'Temporal Prediction',
  'Autonomous Decision Layer',
];

const telemetryTemplates = [
  'MISSION status=CONTINUED authority=FLEET_CONSENSUS_RECOVERED',
  'MISSION status=DEGRADED operational=true',
  'DEFENSE rf_denied_nodes=4 reduced_trust_consensus=ACTIVE',
  'RIA deception={deception} reality={reality}',
  'RIA env={env} consensus={consensus} fused={fused}',
  'RIA spoof_vector=REJECTED belief_recovery=ACTIVE',
  'TRUST continuity=0.95 confidence={confidence} trust={trust}',
  'GNSS alpha=3D sats={sats} hdop=0.9 cno={cno} res=0.0m',
  'EVIDENCE observations={evidence} hypotheses={hypotheses}',
  'TEMPORAL divergence={divergence} entropy={entropy}',
  'WORLD_MODEL nodes={nodes}k edges={edges}k latency={latency}ms',
  'RECOVERY clean_gnss=true physics=true consensus=true',
  'MISSION_INTEGRITY status=TRUSTED spoof_vector=REJECTED',
  'EDGE_KRIGING terrain_prior=STABLE residual={residual}',
  'PREDICT horizon=180s confidence={confidence} drift={drift}',
  'CONSENSUS fleet_authority=REDUCED_TRUST',
  'EDGE_LINK contested_network=true degraded_transport=true',
  'AUTHORITY protocol=ACTIVE trust_restoration=true',
  'PREDICTION adversarial_drift={divergence}',
];

type TelemetryLine = {
  id: number;
  text: string;
};

function generateTelemetryLine() {
  const template =
    telemetryTemplates[Math.floor(Math.random() * telemetryTemplates.length)];

  const values: Record<string, string> = {
    deception: (0.05 + Math.random() * 0.04).toFixed(3),
    reality: (0.88 + Math.random() * 0.08).toFixed(3),
    env: (0.108 + Math.random() * 0.021).toFixed(3),
    consensus: (0.82 + Math.random() * 0.12).toFixed(3),
    fused: (0.083 + Math.random() * 0.018).toFixed(3),
    trust: (0.86 + Math.random() * 0.09).toFixed(3),
    confidence: (0.9 + Math.random() * 0.06).toFixed(3),
    sats: String(13 + Math.floor(Math.random() * 3)),
    cno: String(41 + Math.floor(Math.random() * 6)),
    evidence: String(17000 + Math.floor(Math.random() * 500)),
    hypotheses: String(30 + Math.floor(Math.random() * 12)),
    latency: (12 + Math.random() * 8).toFixed(1),
    divergence: (0.03 + Math.random() * 0.05).toFixed(3),
    entropy: (0.11 + Math.random() * 0.08).toFixed(3),
    nodes: (12.4 + Math.random() * 0.7).toFixed(1),
    edges: (87 + Math.random() * 6).toFixed(1),
    residual: (0.025 + Math.random() * 0.04).toFixed(3),
    drift: (0.012 + Math.random() * 0.018).toFixed(3),
  };

  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}

function LiveEventStream() {
  const initialLines = [
    'MISSION status=DEGRADED operational=true',
    'DEFENSE rf_denied_nodes=4 reduced_trust_consensus=ACTIVE',
    'RIA deception=0.071 reality=0.912',
    'TRUST continuity=0.95 confidence=0.934 trust=0.891',
    'CONSENSUS fleet_authority=REDUCED_TRUST',
    'WORLD_MODEL nodes=12.8k edges=89.1k latency=14.2ms',
    'EDGE_LINK contested_network=true degraded_transport=true',
    'RECOVERY clean_gnss=true physics=true consensus=true',
  ];

  const [lines, setLines] = useState<TelemetryLine[]>(
    initialLines.map((text, index) => ({
      id: index,
      text,
    }))
  );

  useEffect(() => {
    let idCounter = initialLines.length;

    const interval = setInterval(() => {
      setLines((current) => {
        idCounter += 1;

        return [
          ...current,
          {
            id: idCounter,
            text: generateTelemetryLine(),
          },
        ].slice(-22);
      });
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
  <aside className="telemetryGhost">
    <div className="telemetryTitle">LIVE_EVENT_STREAM</div>

    <div className="telemetryViewport">
      <div className="telemetryLines">
        {lines.map((item) => {
          const [label, ...rest] = item.text.split(' ');

          return (
            <div className="telemetryRow" key={item.id}>
              <b>{label}</b> {rest.join(' ')}
            </div>
          );
        })}
      </div>
    </div>
  </aside>
);
}

export default function Home() {
  return (
    <main className="site">
      <div className="noise" />

      <nav className="nav">
        <div className="brand">DRAEVEN</div>

        <div className="navLinks">
          <a href="#capabilities">Capabilities</a>
          <a href="#architecture">Architecture</a>
          <a href="mailto:brett@draeven.us">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroImage" />
        <div className="heroGradient" />

        <motion.div
          className="heroInner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="programLabel">PARALLAX by DRAEVEN</p>

          <h1>Redefining decision superiority.</h1>

          <p className="heroSub">
            Autonomous intelligence that verifies reality before systems act.
          </p>

          <a className="briefLink" href="mailto:brett@draeven.us">
            Request capability brief
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <LiveEventStream />
      </section>

      <section className="capabilities" id="capabilities">
        <div className="sectionHeader">
          <p>Capabilities</p>
          <h2>Parallax transforms uncertainty into trusted operational belief.</h2>
        </div>

        <div className="capabilityRows">
          {capabilities.map(([num, title, text]) => (
            <motion.article
              key={title}
              className="capabilityRow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65 }}
            >
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="architecture" id="architecture">
        <div className="sectionHeader">
          <p>Architecture</p>
          <h2>Observation becomes evidence. Evidence becomes belief. Belief becomes action.</h2>
        </div>

        <div className="architectureRows">
          {architecture.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="final">
        <p>Bad information does not get to decide.</p>
        <a href="mailto:brett@draeven.us">Contact Draeven</a>
      </section>
    </main>
  );
}