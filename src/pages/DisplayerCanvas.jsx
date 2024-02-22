import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { easing } from "maath";
import { Suspense, useRef, useState } from "react";
import { BiScreenshot } from "react-icons/bi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { MdDragIndicator } from "react-icons/md";
import { useSnapshot } from "valtio";
import ColorPicker from "../components/ColorPicker";
import CustomBtn from "../components/CustomBtn";
import Loading from "../components/Loading";
import Logo from "../components/Logo";
import proxyState from "../proxyStore/proxy";

function Model({ glbData, controller }) {
	const { movement } = controller;
	const { scene } = useGLTF(glbData);
	const model = useRef();

	useFrame((state, delta) => {
		if (model.current && movement) {
			easing.dampE(
				model.current.rotation,
				[state.pointer.y, state.pointer.x, 0],
				0.5
			);
		}
	});

	// if (error) console.log(error.message);
	if (!glbData) return;

	return (
		<group ref={model}>
			<Center>
				<primitive scale={[1.5, 1.5, 1.5]} object={scene} />
			</Center>
		</group>
	);
}

function ModelController({
	controller,
	setController,
	screenshot,
	setDisplayModal,
	setScreenshotImg,
	setIsColorPicker,
}) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	const { zoom, rotate, movement } = controller;

	function handleShotScreen() {
		if (!screenshot.current) return;
		const imgUrl = screenshot.current.toDataURL();
		setScreenshotImg((url) => imgUrl);
		setDisplayModal(true);

		console.log("converting...done!");
		// const link = document.createElement("a");

		// link.href = imgUrl;
		// link.download = "trisD-screenshot.png";
		// document.body.appendChild(link);
		// link.click();
	}

	function ShowColorPicker() {
		setIsColorPicker((isColorPicker) => !isColorPicker);
	}

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
					<div onClick={ShowColorPicker}>
						<IoIosColorPalette size={30} />
					</div>
					<div onClick={handleShotScreen}>
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
	const [screenshotImg, setScreenshotImg] = useState("");
	const [displayModal, setDisplayModal] = useState(false);
	const [isColorPicker, setIsColorPicker] = useState(false);

	const { zoom, rotate } = controller;
	const screenshot = useRef();

	return (
		snap.inCanvas && (
			<div className="display-canvas_page" style={{ backgroundColor: snap.bg }}>
				<Logo newClass={"display-logo"} />
				<ModelController
					controller={controller}
					setController={setController}
					screenshot={screenshot}
					setScreenshotImg={setScreenshotImg}
					setDisplayModal={setDisplayModal}
					setIsColorPicker={setIsColorPicker}
				/>
				{isColorPicker && <ColorPicker purpose={"themeChange"} />}
				{displayModal && (
					<div className="screenshot-modal_container">
						<div className="screenshot-modal">
							<div>
								<h4>Your screenshot</h4>
							</div>
							<div className="img-container">
								<img
									src={screenshotImg ? screenshotImg : "/model.png"}
									alt="model_screenshot"
								/>
							</div>
						</div>
					</div>
				)}
				<Suspense fallback={<Loading message={"rendering ..."} />}>
					<div className="display-canvas">
						<Canvas ref={screenshot}>
							<ambientLight intensity={1.5} />
							<spotLight position={[10, 10, 10]} castShadow />
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
