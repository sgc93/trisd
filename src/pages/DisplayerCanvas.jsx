import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { easing } from "maath";
import { Suspense, useRef, useState } from "react";
import { BiScreenshot } from "react-icons/bi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { MdDragIndicator } from "react-icons/md";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import Loading from "../components/Loading";
import Logo from "../components/Logo";
import proxyState from "../proxyStore/proxy";

function Model({ glbData, controller }) {
	const { movement } = controller;
	const snap = useSnapshot(proxyState);
	const { scene } = useGLTF(glbData);
	const model = useRef();

	useFrame((state, delta) => {
		if (model.current && movement) {
			easing.dampE(
				model.current.rotation,
				[state.pointer.y / 4, state.pointer.x / 3, 0],
				0.5
			);
		}
	});

	// if (error) console.log(error.message);
	if (!glbData) return;

	return (
		<group ref={model}>
			<primitive object={scene} />
		</group>
	);
}

function handleDownload() {
	const canvas = document.querySelector("canvas");
	const dataURL = canvas.current.toDataURL();
	const link = document.createElement("a");

	link.href = dataURL;
	link.download = "canvas.png";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
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
				<div className="controller-btns">
					<CustomBtn
						type={"outline"}
						title={"Change File"}
						handleClick={() => {
							proxyState.inCanvas = false;
							proxyState.inDisplayer = true;
						}}
					/>
					<div onClick={handleDownload}>
						<BiScreenshot size={30} opacity={0.7} />
					</div>
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
	const { zoom, rotate, movement } = controller;

	return (
		snap.inCanvas && (
			<div className="display-canvas_page">
				<Logo newClass={"display-logo"} />
				<ModelController
					controller={controller}
					setController={setController}
				/>
				<Suspense fallback={<Loading message={"rendering ..."} />}>
					<div className="display-canvas">
						<Canvas className="modelCanvas">
							<ambientLight />
							<pointLight position={[10, 10, 10]} />
							<OrbitControls enableZoom={zoom} enableRotate={rotate} />
							<Model glbData={glbData} controller={controller} />
						</Canvas>
					</div>
				</Suspense>
			</div>
		)
	);
}

export default DisplayCanvas;
