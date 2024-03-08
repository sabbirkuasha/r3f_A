import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/ThreeComponent/Box";
import HTMLContent from "./components/ThreeComponent/HTMLContents";
import { CameraControls } from "@react-three/drei";
import { FlyingCar } from "./components/ThreeModels/FlyingCar";
import { Suspense } from "react";

function App() {
  return (
    <>
      <title>My Site: Contact Us</title>
      <main className="p-5">
        <div className="border-2 h-[700px] my-5 rounded-lg">
          <Canvas>
            <Suspense fallback={null}>
              <HTMLContent />
              <FlyingCar />
            </Suspense>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <CameraControls />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <Box position={[-1.2, 0, 0]} color={"hotpink"} />
            <Box position={[1.2, 0, 0]} color={"orange"} />
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default App;
