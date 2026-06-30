"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function FloatingParticles() {
    const points = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(3000);

        for (let i = 0; i < 3000; i += 3) {
            positions[i] = (Math.random() - 0.5) * 18;
            positions[i + 1] = (Math.random() - 0.5) * 12;
            positions[i + 2] = (Math.random() - 0.5) * 8;
        }

        return positions;
    }, []);

    useFrame(({ clock }) => {
        if (!points.current) return;

        points.current.rotation.y = clock.elapsedTime * 0.03;
        points.current.rotation.x =
            Math.sin(clock.elapsedTime * 0.2) * 0.05;
    });

    return (
        <points ref={points}>

            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>

            <pointsMaterial
                color="#5EA7FF"
                size={0.04}
                sizeAttenuation
                transparent
                opacity={0.8}
            />

        </points>
    );
}