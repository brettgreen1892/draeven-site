'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function CognitionField() {
  const group = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const count = 5200;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 70;
      const z = (Math.random() - 0.5) * 42;
      const wave =
        Math.sin(x * 0.22) * 1.8 +
        Math.cos(z * 0.34) * 1.2 +
        Math.sin((x + z) * 0.14) * 1.1;

      arr[i * 3] = x;
      arr[i * 3 + 1] = wave + (Math.random() - 0.5) * 0.5;
      arr[i * 3 + 2] = z;
    }

    return arr;
  }, []);

  const links = useMemo(() => {
    return Array.from({ length: 38 }).map((_, i) => {
      const x = -28 + i * 1.55;
      return [
        new THREE.Vector3(x, Math.sin(i * 0.7) * 2, -8 + Math.cos(i) * 4),
        new THREE.Vector3(x + 1.4, Math.sin(i * 0.7 + 1) * 2, -4 + Math.sin(i) * 3),
      ];
    });
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.08) * 0.08;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.25) * 0.18;
  });

  return (
    <group ref={group} position={[0, -2.2, 0]} rotation={[-0.32, 0, 0]}>
      <Points positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#5bbcff"
          size={0.035}
          sizeAttenuation
          depthWrite={false}
          opacity={0.82}
        />
      </Points>

      {links.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={i % 7 === 0 ? '#ff415c' : '#5bbcff'}
          lineWidth={0.6}
          transparent
          opacity={i % 7 === 0 ? 0.32 : 0.18}
        />
      ))}

      {[-18, -7, 5, 17, 27].map((x, i) => (
        <mesh key={x} position={[x, 1.8 + Math.sin(i) * 0.9, -3 + i * 1.3]}>
          <sphereGeometry args={[i === 2 ? 0.32 : 0.18, 32, 32]} />
          <meshBasicMaterial
            color={i === 2 ? '#38f29b' : i === 4 ? '#ff415c' : '#5bbcff'}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

function BeliefCore() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = clock.elapsedTime * 0.08;
    group.current.rotation.y = clock.elapsedTime * 0.05;
  });

  return (
    <group ref={group} position={[13, 1.2, -2]}>
      {[3.2, 5.4, 8.1, 11.5].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2, 0, i * 0.6]}>
          <torusGeometry args={[radius, 0.012, 8, 220]} />
          <meshBasicMaterial
            color={i === 0 ? '#38f29b' : '#5bbcff'}
            transparent
            opacity={i === 0 ? 0.42 : 0.18}
          />
        </mesh>
      ))}

      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color="#38f29b" />
      </mesh>
    </group>
  );
}

export default function WorldModelScene() {
  return (
    <div className="worldScene">
      <Canvas camera={{ position: [0, 8, 22], fov: 54 }}>
        <ambientLight intensity={0.8} />
        <CognitionField />
        <BeliefCore />
      </Canvas>
    </div>
  );
}