import { Canvas } from "@react-three/fiber";
// import Box from "./components/ThreeComponent/Box";
import Box from "../../components/ThreeComponent/Box";
// import HTMLContent from "../../components/ThreeComponent/HTMLContents";
import { CameraControls, Environment } from "@react-three/drei";
import { FlyingCar } from "../../components/ThreeModels/FlyingCar";
import { Suspense } from "react";

function LandingPage() {
  return (
    <>
      <title>Landing | GLTF & HDR</title>
      <main className="px-5">
        <h1 className="text-xl uppercase text-center">
          GLTF, HDR, Perspective Camera
        </h1>
        <div className="border-2 h-[700px] my-5 rounded-lg  z-10">
          <Canvas>
            <Suspense fallback={null}>
              {/* <HTMLContent title="GLTF, HDR, Perspective Camera" /> */}
              <FlyingCar />
              <Environment files="/HDR/stone_alley_01k.hdr" />
            </Suspense>
            <ambientLight intensity={1} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={1}
            />
            <CameraControls />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={2} />
            {/* <Box position={[-1.2, 0, 0]} color={"hotpink"} />
            <Box position={[1.2, 0, 0]} color={"orange"} /> */}
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
