import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import file3D from "../../assets/3d/logo.glb";

// function Model(props) {
//   const { scene } = useGLTF(file3D);
//   return <primitive object={scene} />;
// }

// export default function App() {
//   return (
//     <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>
//       <ambientLight intensity={1} />
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// }

function Scene(props) {
  // const controls = new THREE.OrbitControls( camera );
  // controls.enableZoom = false;

  const { scene } = useGLTF(file3D);
  return <primitive object={scene} />;
}

function Model() {
  return (
    <>
      <Canvas camera={{ position: [0, 15, 15], fov: 15, }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Model;
