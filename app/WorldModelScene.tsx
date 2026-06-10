'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function QuantumCognitionField() {
  const group = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const count = 9000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = Math.random();
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.pow(r, 0.42) * 72;

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius * 0.58;

      const manifold =
        Math.sin(x * 0.12) * 2.2 +
        Math.cos(z * 0.18) * 1.8 +
        Math.sin((x * z) * 0.006) * 2.6;

      arr[i * 3] = x;
      arr[i * 3 + 1] = manifold + (Math.random() - 0.5) * 4.5;
      arr[i * 3 + 2] = z;
    }

    return arr;
  }, []);

  const nodes = useMemo(() => {
    return Array.from({ length: 34 }).map((_, i) => {
      const angle = (i / 34) * Math.PI * 2;
      const radius = 10 + (i % 7) * 4.8;

      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(i * 1.71) * 5.5,
        Math.sin(angle) * radius * 0.72
      );
    });
  }, []);

  const links = useMemo(() => {
    const result: [THREE.Vector3, THREE.Vector3, boolean][] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);

        if (distance < 17 || (i + j) % 19 === 0) {
          result.push([nodes[i], nodes[j], (i + j) % 11 === 0]);
        }
      }
    }

    return result.slice(0, 86);
  }, [nodes]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    group.current.rotation.y = Math.sin(t * 0.06) * 0.22;
    group.current.rotation.x = -0.38 + Math.sin(t * 0.04) * 0.04;
    group.current.position.y = Math.sin(t * 0.18) * 0.55;
  });

  return (
    <group ref={group} position={[0, -2.5, 0]}>
      <Points positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#5bbcff"
          size={0.032}
          sizeAttenuation
          depthWrite={false}
          opacity={0.72}
        />
      </Points>

      {links.map(([a, b, anomaly], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={anomaly ? '#ff334e' : i % 5 === 0 ? '#29ff88' : '#5bbcff'}
          lineWidth={anomaly ? 0.75 : 0.45}
          transparent
          opacity={anomaly ? 0.34 : i % 5 === 0 ? 0.24 : 0.14}
        />
      ))}

      {nodes.map((node, i) => (
        <mesh key={i} position={node}>
          <sphereGeometry args={[i % 9 === 0 ? 0.28 : 0.14, 24, 24]} />
          <meshBasicMaterial
            color={i % 13 === 0 ? '#ff334e' : i % 7 === 0 ? '#29ff88' : '#72c7ff'}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}
    </group>
  );
}

function BeliefClusters() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;
    group.current.rotation.z = t * 0.035;
    group.current.rotation.y = Math.sin(t * 0.05) * 0.28;
  });

  return (
    <group ref={group} position={[0, 0, -8]}>
      {[7, 13, 21, 34].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2.15, 0, i * 0.72]}>
          <torusGeometry args={[radius, 0.01, 8, 260]} />
          <meshBasicMaterial
            color={i === 0 ? '#29ff88' : '#5bbcff'}
            transparent
            opacity={i === 0 ? 0.22 : 0.11}
          />
        </mesh>
      ))}

      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * 1.04]}>
          <torusGeometry args={[4.5 + i * 2.4, 0.018, 8, 180]} />
          <meshBasicMaterial color="#29ff88" transparent opacity={0.16} />
        </mesh>
      ))}
    </group>
  );
}

function ConfidenceWaves() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;
    group.current.scale.setScalar(1 + Math.sin(t * 0.45) * 0.025);
    group.current.rotation.y = t * -0.025;
  });

  return (
    <group ref={group} position={[0, -1, -10]}>
      {[18, 28, 40, 54].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2, 0, i * 0.35]}>
          <torusGeometry args={[radius, 0.006, 8, 320]} />
          <meshBasicMaterial
            color={i === 3 ? '#ff334e' : '#2f9cff'}
            transparent
            opacity={i === 3 ? 0.08 : 0.09}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function WorldModelScene() {
  return (
    <div className="worldScene">
      <Canvas camera={{ position: [0, 10, 38], fov: 62 }}>
        <ambientLight intensity={0.9} />
        <QuantumCognitionField />
        <BeliefClusters />
        <ConfidenceWaves />
      </Canvas>
    </div>
  );
}