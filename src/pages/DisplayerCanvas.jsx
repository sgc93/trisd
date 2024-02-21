import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function DisplayCanvas({ glbData }) {
	const { scene, nodes, materials, error } = useGLTF(glbData);
	const snap = useSnapshot(proxyState);

	// if (error) console.log(error.message);
	if (!glbData) return;

	console.log(materials, "in canvas");
	return (
		snap.inCanvas && (
			<div>
				Model displayer page
				<Canvas>
					<primitive object={scene} />
				</Canvas>
			</div>
		)
	);
}

export default DisplayCanvas;
