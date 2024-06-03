import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/laptop.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Screen.geometry}
        // material={materials.Screen}
      >
        <Html 
            transform
            occlude
            position={[0,13,-5.38028]}
            style={{ backgroundColor: "red", width: "914px", height:"660px"
            }}>
          <h1>Hola mundo</h1>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
    </group>
  );
}

useGLTF.preload("/laptop.glb");
