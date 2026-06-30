"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import FloatingParticles from "./FloatingParticles";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-20">

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 60,
        }}
      >
        <ambientLight intensity={1} />

        <pointLight
          position={[5, 5, 5]}
          intensity={30}
          color="#4f8cff"
        />

        <Float
          speed={2}
          rotationIntensity={0.3}
          floatIntensity={1}
        >
          <FloatingParticles />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.15}
        />
      </Canvas>

    </div>
  );
}