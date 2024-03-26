import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="app">
      <div className="profile">
        <h1>Duong Huu Thang</h1>
      </div>
      <div className="Experience">
        <Canvas
          camera={{
            fov: 50,
            position: [5, 2, 2.5],
          }}
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}
useGLTF.preload("./models/WawaOffice.glb");

export default App;
