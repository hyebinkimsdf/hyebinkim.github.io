import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

export function Three() {
  return (
    <Canvas>
      {/* 3D 씬을 구성하는 요소들 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="red" />
      </Box>
      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <OrbitControls />
    </Canvas>
  );
}
