'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';



const architecture = [
  'Reality Integrity Assessment',
  'Evidence Reservoir',
  'Belief-State Engine',
  'Temporal Prediction',
  'Autonomous Decision Layer',
];




function WordReveal({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: delay + index * 0.08,
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.35em',
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
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
          <p className="programLabel">DRAEVEN INDUSTRIES, INC.</p>

          <motion.h1 className="heroTitle">
  {['REDEFINING', 'DECISION', 'SUPERIORITY.'].map((word, index) => (
    <motion.span
      key={word}
      className="heroTitleLine"
      initial={{
        opacity: 0,
        y: 70,
        filter: 'blur(4px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 1.5,
        delay: 0.7 + index * 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {word}
    </motion.span>
  ))}
</motion.h1>

          <p className="heroSub">
  <WordReveal
    delay={2.8}
    text="Verifying reality before systems act."
  />
</p>

          <a className="briefLink" href="mailto:brett@draeven.us">
            Request capability brief
            <ArrowRight size={15} />
          </a>
        </motion.div>

        
      </section>

      <section className="capabilities sectionWithImage" id="capabilities">
  <div className="sectionTwoImage" />
  <div className="sectionTwoGradient" />

  <motion.div
    className="capabilitiesInner"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-120px' }}
    transition={{ duration: 0.7 }}
  >
    <p className="sectionEyebrow">Capabilities</p>

    <h2>
      Systems built to act when certainty disappears.
    </h2>

    <p className="capabilitiesLead">
      Draeven develops edge-native intelligence systems for contested,
      degraded, and high-consequence environments.
    </p>

    <div className="capabilityPills">
      <span>Reality Validation</span>
      <span>Edge Autonomy</span>
      <span>Mission Assurance</span>
    </div>
  </motion.div>
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