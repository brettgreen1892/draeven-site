'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function LivingUniverseField() {
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<THREE.Mesh[]>([]);

  const stars = useMemo(() => {
    const count = 14000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 0.36) * 95;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 36;

      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = y + Math.sin(r * 0.12) * 2.5;
      arr[i * 3 + 2] = Math.sin(a) * r * 0.62;
    }

    return arr;
  }, []);

  const nodes = useMemo(() => {
    return Array.from({ length: 46 }).map((_, i) => {
      const a = (i / 46) * Math.PI * 2;
      const r = 12 + ((i * 7) % 38);

      return {
        pos: new THREE.Vector3(
          Math.cos(a) * r,
          Math.sin(i * 1.618) * 11,
          Math.sin(a) * r * 0.58
        ),
        type: i % 13 === 0 ? 'threat' : i % 7 === 0 ? 'trusted' : 'evidence',
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  const links = useMemo(() => {
    const out: [THREE.Vector3, THREE.Vector3, string][] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].pos.distanceTo(nodes[j].pos);
        if (d < 22 || (i + j) % 23 === 0) {
          out.push([nodes[i].pos, nodes[j].pos, nodes[i].type]);
        }
      }
    }

    return out.slice(0, 120);
  }, [nodes]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.035) * 0.24;
      group.current.rotation.x = -0.32 + Math.sin(t * 0.025) * 0.045;
      group.current.position.y = Math.sin(t * 0.12) * 0.9;
    }

    nodeRefs.current.forEach((node, i) => {
      if (!node) return;
      const pulse = 1 + Math.sin(t * 1.8 + nodes[i].phase) * 0.28;
      node.scale.setScalar(pulse);
      node.position.y = nodes[i].pos.y + Math.sin(t * 0.7 + nodes[i].phase) * 0.45;
    });
  });

  return (
    <group ref={group} position={[7, -1, -8]}>
      <Points positions={stars} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#72c7ff"
          size={0.026}
          sizeAttenuation
          depthWrite={false}
          opacity={0.58}
        />
      </Points>

      {links.map(([a, b, type], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={type === 'threat' ? '#ff334e' : type === 'trusted' ? '#29ff88' : '#5bbcff'}
          lineWidth={type === 'threat' ? 0.85 : 0.45}
          transparent
          opacity={type === 'threat' ? 0.28 : type === 'trusted' ? 0.2 : 0.105}
        />
      ))}

      {nodes.map((node, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) nodeRefs.current[i] = el;
          }}
          position={node.pos}
        >
          <sphereGeometry args={[node.type === 'threat' ? 0.27 : node.type === 'trusted' ? 0.22 : 0.12, 24, 24]} />
          <meshBasicMaterial
            color={node.type === 'threat' ? '#ff334e' : node.type === 'trusted' ? '#29ff88' : '#72c7ff'}
            transparent
            opacity={0.92}
          />
        </mesh>
      ))}
    </group>
  );
}

function DeepFieldRings() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.z = t * 0.018;
    group.current.rotation.y = Math.sin(t * 0.03) * 0.18;
  });

  return (
    <group ref={group} position={[8, -1, -22]}>
      {[18, 29, 43, 61, 82].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2.35, 0, i * 0.46]}>
          <torusGeometry args={[r, 0.006, 8, 360]} />
          <meshBasicMaterial
            color={i === 4 ? '#ff334e' : '#2f9cff'}
            transparent
            opacity={i === 4 ? 0.045 : 0.07}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function WorldModelScene() {
  return (
    <div className="worldScene">
      <Canvas camera={{ position: [0, 11, 44], fov: 64 }}>
        <ambientLight intensity={0.85} />
        <LivingUniverseField />
        <DeepFieldRings />
      </Canvas>
    </div>
  );
}