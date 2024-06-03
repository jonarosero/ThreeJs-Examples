import React, { useLayoutEffect, useRef } from "react";
import { OrbitControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/Artics.glb");

  //animations control
  const scrollControl = useScroll();
  const timeline = useRef();

  //meshes ref
  const generalGroupRef = useRef();
  const coverLeftRef = useRef();
  const coverRightRef = useRef();
  const rightCoverInnerRef = useRef();
  const inside1Ref = useRef();
  const inside2Ref = useRef();
  const controls = useRef();
  const camera = useThree((state) => state.camera);

  const page_1_ref = useRef();
  const page_2_ref = useRef();
  const page_3_ref = useRef();
  const page_4_ref = useRef();
  const page_5_ref = useRef();
  const page_6_ref = useRef();

  useLayoutEffect(() => {
    page_1_ref.current = document.getElementById("page-1");
    page_2_ref.current = document.getElementById("page-2");
    page_3_ref.current = document.getElementById("page-3");
    page_4_ref.current = document.getElementById("page-4");
    page_5_ref.current = document.getElementById("page-5");
    page_6_ref.current = document.getElementById("page-6");
  }, []);

  //animations
  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    let AnimationsData = [];

    //Animation to headband zoom in headband
    const HeadbandAnimations = [
      {
        objectToAnimate: page_1_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 0.5,
      },
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 1.3,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          y: 3.0974,
          x: 0,
          z: 0,
        },
        timelinePoint: 0.8,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 6.6097,
          z: 8.3,
          duration: 0.8,
        },
        timelinePoint: 1,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 2.5,
          duration: 0.8,
          onUpdtae: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 1,
      },
    ];

    AnimationsData = [...AnimationsData, ...HeadbandAnimations];

    //Sounds control animation zoon in control and rotation of all
    const SoundControlsAnimations = [
      {
        objectToAnimate: page_2_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 2.1,
      },
      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 1,
          duration: 0.3,
        },
        timelinePoint: 2.3,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: -1.5761,
          y: -1.3143,
          z: 0,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
        },
        timelinePoint: 2,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 2,
          duration: 0.3,
          onUpdtae: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 2.3,
      },
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: -0.38311,
          y: 0.26447,
          z: -0.1356,
          duration: 0.8,
        },
        timelinePoint: 2.1,
      },
    ];

    AnimationsData = [...AnimationsData, ...SoundControlsAnimations];

    //Animation Battery cover left opacity 0 zoom in battery and rotate all object
    const BatteryAnimations = [
      {
        objectToAnimate: page_3_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 3.1,
      },
      {
        objectToAnimate: page_4_ref.current,
        properties: {
          opacity: 1,
          duration: 0.3,
        },
        timelinePoint: 3.3,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.5,
          duration: 0.8,
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 2.5,
          duration: 0.8,
          onUpdtae: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 3,
      },
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0,
          y: 1.59699,
          z: -0.63054,
          duration: 0.8,
        },
        timelinePoint: 3.3,
      },
      {
        objectToAnimate: coverLeftRef.current.material,
        properties: {
          opacity: 0,
          transparent: true,
          duration: 0.4,
        },
        timelinePoint: 3.3,
      },
    ];
    AnimationsData = [...AnimationsData, ...BatteryAnimations];

    //Constructions animation move object inside headset
    const ConstructionAnimations = [
      {
        objectToAnimate: page_4_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 4.1,
      },
      {
        objectToAnimate: page_5_ref.current,
        properties: {
          opacity: 1,
          duration: 0.3,
        },
        timelinePoint: 4.3,
      },
      //Restore previous animations
      {
        objectToAnimate: coverLeftRef.current.material,
        properties: {
          opacity: 1,
          transparent: false,
          duration: 0.3,
        },
        timelinePoint: 4.3,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: 4.4156,
          y: -1.996,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 4.1873,
          y: 0,
          z: 8.2999,
          duration: 0.8,
        },
        timelinePoint: 4,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 1.2517,
          duration: 0.8,
          onUpdtae: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 4.3,
      },
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0.21692,
          y: -0.52559,
          z: 0.21692,
          duration: 0.8,
        },
        timelinePoint: 4.3,
      },
      {
        objectToAnimate: coverRightRef.current.position,
        properties: {
          x: 4.33,
          y: -0.89,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
      {
        objectToAnimate: rightCoverInnerRef.current.position,
        properties: {
          x: 2.96,
          y: -0.59,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
      {
        objectToAnimate: inside1Ref.current.position,
        properties: {
          x: 1.78,
          y: -0.4,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
      {
        objectToAnimate: inside2Ref.current.position,
        properties: {
          x: 0.99,
          y: -0.2,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 4.8,
      },
    ];

    AnimationsData = [...AnimationsData, ...ConstructionAnimations];

    //Brand logo animation
    const BrandLogoAnimations = [
      {
        objectToAnimate: page_5_ref.current,
        properties: {
          opacity: 0,
          duration: 0.3,
        },
        timelinePoint: 5.8,
      },
      {
        objectToAnimate: page_6_ref.current,
        properties: {
          opacity: 1,
          duration: 0.8,
        },
        timelinePoint: 6.2,
      },
      //Restore previous animation
      {
        objectToAnimate: coverRightRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: rightCoverInnerRef.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: inside1Ref.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: inside2Ref.current.position,
        properties: {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.6,
      },
      {
        objectToAnimate: controls.current.target,
        properties: {
          x: -1.8,
          y: 1.10198,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.5,
      },
      {
        objectToAnimate: camera.position,
        properties: {
          x: 0,
          y: 0,
          z: 8.3,
          duration: 0.8,
        },
        timelinePoint: 5.5,
      },
      {
        objectToAnimate: camera,
        properties: {
          zoom: 1.8,
          duration: 0.8,
          onUpdtae: () => {
            camera.updateProjectionMatrix();
          },
        },
        timelinePoint: 5.8,
      },
      {
        objectToAnimate: generalGroupRef.current.rotation,
        properties: {
          x: 0,
          y: 1.30195,
          z: 0,
          duration: 0.8,
        },
        timelinePoint: 5.9,
      },
    ];

    AnimationsData = [...AnimationsData, ...BrandLogoAnimations];

    // eslint-disable-next-line array-callback-return
    AnimationsData.map((animation) => {
      timeline.current.to(
        animation.objectToAnimate,
        { ...animation.properties },
        animation.timelinePoint
      );
    });

    // timeline.current.to(
    //   generalGroupRef.current.rotation,
    //   { y: Math.PI * 2, duration: 3 },
    //   5
    // );
  }, []);

  useFrame(() => {
    timeline.current.seek(scrollControl.offset * timeline.current.duration());
  });
  return (
    <>
      <group {...props} dispose={null} ref={generalGroupRef}>
        <mesh
          name="Cylinders"
          castShadow
          receiveShadow
          geometry={nodes.Cylinders.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Pads"
          castShadow
          receiveShadow
          geometry={nodes.Pads.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Supports"
          castShadow
          receiveShadow
          geometry={nodes.Supports.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Cover_Right"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Right.geometry}
          material={materials.ArticsMaterial}
          ref={coverRightRef}
        />
        <mesh
          name="Headband_Inner"
          castShadow
          receiveShadow
          geometry={nodes.Headband_Inner.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Brand"
          castShadow
          receiveShadow
          geometry={nodes.Brand.geometry}
          material={materials.ArticsMaterial}
        />
        <mesh
          name="Battery"
          castShadow
          receiveShadow
          geometry={nodes.Battery.geometry}
          material={materials.Battery_Texture}
        />
        <mesh
          name="Inside_1"
          castShadow
          receiveShadow
          geometry={nodes.Inside_1.geometry}
          material={materials.Blue_Metallic}
          position={[0.01, 0, 0]}
          ref={inside1Ref}
        />
        <mesh
          name="Inside_2"
          castShadow
          receiveShadow
          geometry={nodes.Inside_2.geometry}
          material={materials.Orage_Mertallic}
          position={[0.011, 0, 0]}
          ref={inside2Ref}
        />
        <mesh
          name="Headband_outter"
          castShadow
          receiveShadow
          geometry={nodes.Headband_outter.geometry}
          material={materials.ArticsMaterial_Headband}
        />
        <mesh
          name="Battery_Holder"
          castShadow
          receiveShadow
          geometry={nodes.Battery_Holder.geometry}
          material={materials.ArticsMaterial}
          position={[-0.002, 0.013, 0]}
        />
        <mesh
          name="Neon"
          castShadow
          receiveShadow
          geometry={nodes.Neon.geometry}
          material={materials.Material}
        />
        <mesh
          name="Cover_Left_Inn"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left_Inn.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.006, 0]}
        />
        <mesh
          name="Cover_Left"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Left.geometry}
          material={materials.ArticsMaterial_CoverLeft}
          ref={coverLeftRef}
        />
        <mesh
          name="Cover_Right_Inn"
          castShadow
          receiveShadow
          geometry={nodes.Cover_Right_Inn.geometry}
          material={materials.ArticsMaterial}
          position={[0, 0.006, 0]}
          ref={rightCoverInnerRef}
        />
        <mesh
          name="Sounds"
          castShadow
          receiveShadow
          geometry={nodes.Sounds.geometry}
          material={materials.Orange_Plastic}
          rotation={[0, 0, 0.004]}
        />
      </group>
      <OrbitControls enableZoom={false} ref={controls} />
    </>
  );
}

useGLTF.preload("/models/Artics.glb");
