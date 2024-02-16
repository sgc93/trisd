import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import { MeshStandardMaterial } from "three";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function Model() {
	const snap = useSnapshot(proxyState);
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);
	const { nodes, materials, error } = useGLTF("./shirt_model.glb");
	const CustomMaterial = new MeshStandardMaterial({ color: "orange" });
	const stringSnap = JSON.stringify(snap);

	// playing with easing
	// useFrame((state, delta) =>
	// 	easing.dampC(state.materials.lambert1.color, snap.color, 0.25, delta)
	// );

	if (error) {
		console.log(error.message);
		return;
	}

	return (
		<group key={stringSnap}>
			<mesh
				castShadow
				geometry={nodes.t_shirt.geometry}
				material={materials.lambert1}
				material-roughness={1}
				dispose={null}
			>
				{snap.isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture}
					/>
				)}

				{snap.isLogoTexture && (
					<Decal
						position={[0, 0, 0.2]}
						rotation={[0, 0, 0]}
						scale={0.18}
						map={logoTexture}
					/>
				)}
			</mesh>
		</group>
	);
}

export default function ObjectModel() {
	// const { scene } = useGLTF("/sgc.glb");
	return (
		<Suspense fallback={null}>
			<Model />
		</Suspense>
		// <Canvas>
		// 	{/* <ambientLight />
		// 	<directionalLight position={[0, 5, 5]} intensity={1} />
		// 	<OrbitControls />
		// 	<primitive object={scene} /> */}
		// </Canvas>
	);
}
