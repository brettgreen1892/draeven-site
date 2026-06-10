'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WorldModelScene from './WorldModelScene';

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

export default function Home() {
  return (
    <main className="site">
      <div className="noise" />
      <WorldModelScene />

      <nav className="nav">
        <div className="brand">DRAEVEN</div>
        <div className="navLinks">
          <a href="#capabilities">Capabilities</a>
          <a href="#architecture">Architecture</a>
          <a href="mailto:brett@draeven.us">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="heroInner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="programLabel">PARALLAX / DRAEVEN</p>

          <h1>Redefining decision superiority.</h1>

          <p className="heroSub">
            Autonomous intelligence that verifies reality before systems act.
          </p>

          <a className="briefLink" href="mailto:brett@draeven.us">
            Request capability brief <ArrowRight size={15} />
          </a>

          <motion.div
            className="liveReadout"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          >
            <span>LIVE COGNITION READOUT</span>
            <strong>OBS 17,422</strong>
            <strong>TRUST 0.934</strong>
            <strong>CONFLICTS 2,183</strong>
          </motion.div>
        </motion.div>
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