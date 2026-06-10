'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Radio, Orbit, Network } from 'lucide-react';
import WorldModelScene from './WorldModelScene';

const loop = ['OBSERVE', 'VERIFY', 'BELIEVE', 'PREDICT', 'DECIDE'];

const pillars = [
  {
    icon: Shield,
    title: 'Reality Integrity',
    text: 'Parallax evaluates whether incoming information reflects reality before it is allowed to influence operational decisions.',
  },
  {
    icon: Network,
    title: 'Belief-State Intelligence',
    text: 'Fragmented observations become probabilistic understanding through uncertainty-aware reasoning and evidence fusion.',
  },
  {
    icon: Radio,
    title: 'Contested Edge Autonomy',
    text: 'Designed for spoofing, RF denial, degraded sensors, disconnected operations, and environments where certainty does not exist.',
  },
];

export default function Home() {
  return (
    <main className="site">
      <div className="noise" />
      <div className="mesh" />
      <WorldModelScene />
      <div className="orbital o1" />
      <div className="orbital o2" />

      <nav className="nav">
        <div className="brand">DRAEVEN</div>
        <div className="navLinks">
          <a href="#mission">Mission</a>
          <a href="#loop">Cognition</a>
          <a href="#architecture">Architecture</a>
          <a href="mailto:contact@draeven.us">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="heroText"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">PARALLAX / EDGE-NATIVE AUTONOMOUS INTELLIGENCE</p>

          <h1>
            Autonomous intelligence for the edge of certainty.
          </h1>

          <p className="sub">
            Parallax transforms fragmented observations into trusted operational
            understanding across degraded, contested, and disconnected environments.
          </p>

          <div className="heroActions">
            <a href="mailto:brett@draeven.us">
              Request Access <ArrowRight size={16} />
            </a>
            <span>Controlled capability preview</span>
          </div>
        </motion.div>
        </section>


        <motion.div
  className="brainPanel"
  initial={{ opacity: 0, scale: 0.96, y: 30 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ delay: 0.35, duration: 1 }}
>
  <div className="brainHeader">
    <span>PARALLAX COGNITION ENGINE</span>
    <b>LIVE</b>
  </div>

  <div className="brainVisual">
    
  </div>

  <div className="brainStats">
    <div>
      <span>OBSERVATIONS</span>
      <strong>17,422</strong>
    </div>
    <div>
      <span>ACTIVE HYPOTHESES</span>
      <strong>38</strong>
    </div>
    <div>
      <span>BELIEF CONFIDENCE</span>
      <strong>0.934</strong>
    </div>
    <div>
      <span>CONFLICTS RESOLVED</span>
      <strong>2,183</strong>
    </div>
  </div>
</motion.div>

      <section className="statement" id="mission">
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8 }}
        >
          Most systems collect observations.
          <span> Parallax evaluates reality.</span>
        </motion.h2>
      </section>

      <section className="loopSection" id="loop">
        <p className="eyebrow">COGNITION LOOP</p>
        <div className="loop">
          {loop.map((item, index) => (
            <motion.div
              key={item}
              className="loopNode"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
            >
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pillars">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article
              key={pillar.title}
              className="pillar"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
            >
              <Icon size={28} />
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </motion.article>
          );
        })}
      </section>

      <section className="architecture" id="architecture">
        <p className="eyebrow">SYSTEM ARCHITECTURE</p>
        <h2>Observation becomes evidence. Evidence becomes belief. Belief becomes action.</h2>

        <div className="archFlow">
          {[
            'Reality Integrity Assessment',
            'Evidence Reservoir',
            'Belief-State Engine',
            'Planetary Core',
            'Temporal Prediction',
            'Autonomous Decision Layer',
          ].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="final">
        <p>Prevent bad information from becoming bad decisions.</p>
        <a href="mailto:brett@draeven.us">Contact Draeven</a>
      </section>
    </main>
  );
}