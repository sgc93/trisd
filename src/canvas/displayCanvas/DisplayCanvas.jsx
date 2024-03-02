import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useSnapshot } from "valtio";
import Loading from "../../components/Loading";
import proxyState from "../../proxyStore/proxy";
import DisplayModel from "./DisplayModel";

function DisplayCanvas({ glbData, controller, texture }) {
	const snap = useSnapshot(proxyState);
	const { zoom, rotate } = controller;
	const screenshot = useRef();

	return (
		<Suspense fallback={<Loading message={"rendering ..."} />}>
			<Canvas ref={screenshot} style={{ touchAction: "none" }}>
				<color attach={"background"} args={[snap.bg]} />
				<fog attach={"fog"} args={[snap.bg, 5, 10]} />
				<ambientLight intensity={1.5} />
				<spotLight position={[10, 10, 10]} castShadow />
				<OrbitControls enableZoom={zoom} enableRotate={rotate} />
				<DisplayModel
					glbData={glbData}
					controller={controller}
					newTexture={texture}
				/>
			</Canvas>
		</Suspense>
	);
}

export default DisplayCanvas;
