"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense } from "react";

const fontMap = {
  inter: "/fonts/Inter.ttf",
  lobster: "/fonts/Lobster.ttf",
  roboto: "/fonts/Roboto.ttf",
};

const materialMap = {
  silver: "#c0c0c0",
  gold: "#FFD700",
  plastic: "#ff8c2b",
};

function KeychainModel({ name, font, thickness, material }) {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      {/* Base */}
      <boxGeometry args={[2.5, thickness, 0.4]} />
      <meshStandardMaterial color={materialMap[material]} />

      {/* Text */}
      <Text
        position={[0, 0, 0.26]}
        fontSize={0.3}
        color="black"
        font={fontMap[font]}
        anchorX="center"
        anchorY="middle"
      >
        {name || "Your Name"}
      </Text>
    </mesh>
  );
}

export default function Viewer3D({ name, font, thickness, material }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      <Suspense fallback={null}>
        <KeychainModel
          name={name}
          font={font}
          thickness={thickness}
          material={material}
        />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
