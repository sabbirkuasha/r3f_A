import { Canvas } from "@react-three/fiber";
// import Box from "./components/ThreeComponent/Box";

import HTMLContent from "../../components/ThreeComponent/HTMLContents";
import {
  CameraControls,
  ContactShadows,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Cybertruck } from "../ThreeComponent/Cybertruck";
import { Suspense } from "react";

function ShaderPage() {
  return (
    <>
      <title>Shader | Shader & Leva & Contact Shadow</title>
      <main className="px-5">
        <div className="border-2 h-[700px] my-5 rounded-lg">
          <Canvas>
            <Suspense fallback={null}>
              <HTMLContent title="Shader & Leva" />
              <Cybertruck />
              <ContactShadows
                opacity={1}
                scale={10}
                blur={1}
                far={10}
                resolution={256}
                color="#000000"
              />
              <Environment files="/HDR/stone_alley_01k.hdr" />
            </Suspense>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <PerspectiveCamera
              makeDefault
              position={[5, 2, 7]}
            ></PerspectiveCamera>
            <CameraControls />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default ShaderPage;
