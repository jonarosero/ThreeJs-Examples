import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "./Laptop";
import "./App.css";
import { toneMapping } from "three/examples/jsm/nodes/Nodes.js";
import * as THREE from "three";
import { toneMappingExposure } from "three/examples/jsm/nodes/display/ToneMappingNode.js";

function App() {
  return (
    <div className="container">
      <Canvas camera={{ position: [0, 6, 25], fov: 65 }} gl={{toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 3.4}}>
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
        <directionalLight
          position={[10, 10, 10]}
          color={"ffffff"}
          intensity={1.3}
        />
        <ambientLight color={"ffffff"} intensity={0.5} />
        <OrbitControls target={[0, 5, 1]} />
      </Canvas>
    </div>
  );
}

export default App;
