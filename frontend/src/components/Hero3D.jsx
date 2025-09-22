import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

function Cube() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  // Animate rotation
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    if (hovered) {
      ref.current.scale.x = 1.2;
      ref.current.scale.y = 1.2;
      ref.current.scale.z = 1.2;
    } else {
      ref.current.scale.x = 1;
      ref.current.scale.y = 1;
      ref.current.scale.z = 1;
    }
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#0BA34E" />
      
      {/* Icons on sides */}
      <Html
        position={[0, 0, 1.01]}
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      >
        {"</>"}
      </Html>
      <Html
        position={[0, 0, -1.01]}
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      >
        {"DSA"}
      </Html>
      <Html
        position={[1.01, 0, 0]}
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      >
        {"Algo"}
      </Html>
      <Html
        position={[-1.01, 0, 0]}
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      >
        {"Code"}
      </Html>
      <Html
        position={[0, 1.01, 0]}
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      >
        {"Fun"}
      </Html>
      <Html
        position={[0, -1.01, 0]}
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      >
        {"Learn"}
      </Html>
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Cube />
    </Canvas>
  );
}
