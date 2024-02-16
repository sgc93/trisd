import { useGLTF, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function Model() {
	const snap = useSnapshot(proxyState);
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);
	const { nodes, materials, error } = useGLTF("./shirt_model.glb");
	// const CustomMaterial = new MeshStandardMaterial({ color: "#ffffff" });

	if (error) {
		console.log(error.message);
		return;
	}

	return (
		<group>
			<mesh
				castShadow
				geometry={nodes.t_shirt.geometry}
				material={materials.lambert1}
				material-roughness={1}
				dispose={null}
			/>
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
