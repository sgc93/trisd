import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { useSnapshot } from "valtio";
import Loading from "../components/Loading";
import Logo from "../components/Logo";
import proxyState from "../proxyStore/proxy";

function Model({ glbData }) {
	const snap = useSnapshot(proxyState);
	const { scene } = useGLTF(glbData);

	// if (error) console.log(error.message);
	if (!glbData) return;

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

function ModelController() {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	return (
		<motion.div
			className="controller-box"
			drag
			dragElastic={1.18}
			onHoverStart={() => setShowDragIndicator(true)}
			onHoverEnd={() => setShowDragIndicator(false)}
		>
			<div className="model-controller">Controller</div>
			<MdDragIndicator
				className="drag_indicator"
				color="white"
				size={23}
				fillOpacity={showDragIndicator ? 0.4 : 0}
			/>
		</motion.div>
	);
}

function DisplayCanvas({ glbData }) {
	const snap = useSnapshot(proxyState);
	return (
		snap.inCanvas && (
			<div className="display-canvas_page">
				<Logo newClass={"display-logo"} />
				<ModelController />
				<Suspense fallback={<Loading message={"rendering ..."} />}>
					<Model glbData={glbData} />
				</Suspense>
			</div>
		)
	);
}

export default DisplayCanvas;
