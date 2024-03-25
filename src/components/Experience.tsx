import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export const Experience = () => {
  const { nodes, materials } = useGLTF("./models/WawaOffice.glb");

  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      {/* <ScrollControls damping={0.25}> */}
      {/* <Overlay /> */}
      <mesh
        geometry={(nodes["01_office"] as Mesh).geometry}
        material={materials["01"]}
      />
      {/* <Office /> */}
      {/* </ScrollControls> */}
    </>
  );
};
