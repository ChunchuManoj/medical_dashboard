import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "./Human3DView.css";

function HumanModel() {
  const model = useLoader(OBJLoader, "/models/FinalBaseMesh.obj");
  return (
    <primitive
      object={model}
      scale={0.10}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Human3DView() {
  return (
    <div className="human-3d-view">
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 55,
          near: 0.1,
          far: 1000,
        }}
        style={{ height: "100%" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1.4} />
        <pointLight position={[-10, -10, -10]} intensity={0.7} />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          }
        >
          <HumanModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
          target={[0, 0, 0]}
          minDistance={2}
          maxDistance={4}
        />
      </Canvas>
      <div className="health-tag heart">
          <span className="tag-icon">❤️</span>
          <span className="tag-text">Healthy Heart</span>
        </div>

        <div className="health-tag leg">
          <span className="tag-icon">🦵</span>
          <span className="tag-text">Healthy Leg</span>
        </div>
    </div>
  );
}
