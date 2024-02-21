import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSnapshot } from "valtio";
import Loading from "../components/Loading";
import proxyState from "../proxyStore/proxy";

function Model({ glbData }) {
	const { scene, nodes, materials, error } = useGLTF(glbData);
	const snap = useSnapshot(proxyState);

	// if (error) console.log(error.message);
	if (!glbData) return;

	console.log(materials, "in canvas");
	return (
		snap.inCanvas && (
			<div className="display-canvas">
				<Canvas>
					<ambientLight />
					<OrbitControls />
					<primitive object={scene} />
				</Canvas>
			</div>
		)
	);
}

function DisplayCanvas({ glbData }) {
	const snap = useSnapshot(proxyState);
	return (
		snap.inCanvas && (
			<div className="display-canvas">
				<Suspense fallback={<Loading message={"rendering ..."} />}>
					<Model glbData={glbData} />
				</Suspense>
			</div>
		)
	);
}

export default DisplayCanvas;
