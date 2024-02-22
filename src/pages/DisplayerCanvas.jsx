import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
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

function ModelController({ controller, setController }) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	const { zoom, rotate, movement } = controller;

	return (
		<motion.div
			className="controller-box"
			drag
			dragElastic={1.18}
			onHoverStart={() => setShowDragIndicator(true)}
			onHoverEnd={() => setShowDragIndicator(false)}
		>
			<div className="model-controller">
				<div
					className="rotation-controller controller"
					onClick={() => {
						setController((state) => ({ ...state, rotate: !rotate }));
					}}
				>
					{rotate ? (
						<FaToggleOn className="toggle_icon on" />
					) : (
						<FaToggleOff className="toggle_icon" />
					)}
					<span>Enable Rotation</span>
				</div>

				<div
					className="zoom-controller controller"
					onClick={() => {
						setController((state) => ({ ...state, zoom: !zoom }));
					}}
				>
					{zoom ? (
						<FaToggleOn className="toggle_icon on" />
					) : (
						<FaToggleOff className="toggle_icon" />
					)}
					<span>Enable zoom in/out</span>
				</div>

				<div
					className="orbit-controller controller"
					onClick={() => {
						setController((state) => ({ ...state, movement: !movement }));
					}}
				>
					{movement ? (
						<FaToggleOn className="toggle_icon on" />
					) : (
						<FaToggleOff className="toggle_icon" />
					)}
					<span>Disable movement with cursor</span>
				</div>
			</div>
			<MdDragIndicator
				className="drag_indicator"
				color="white"
				size={23}
				fillOpacity={showDragIndicator ? 0.4 : 0}
			/>
		</motion.div>
	);
}

const initialController = {
	zoom: false,
	rotate: false,
	movement: true,
};

function DisplayCanvas({ glbData }) {
	const snap = useSnapshot(proxyState);
	const [controller, setController] = useState(initialController);
	const [zoom, setZoom] = useState(false);
	return (
		snap.inCanvas && (
			<div className="display-canvas_page">
				<Logo newClass={"display-logo"} />
				<ModelController
					controller={controller}
					setController={setController}
					zoom={zoom}
					setZoom={setZoom}
				/>
				<Suspense fallback={<Loading message={"rendering ..."} />}>
					<Model glbData={glbData} />
				</Suspense>
			</div>
		)
	);
}

export default DisplayCanvas;
