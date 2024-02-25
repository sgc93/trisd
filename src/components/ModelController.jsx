import { motion } from "framer-motion";
import { useState } from "react";
import { BiScreenshot } from "react-icons/bi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import CustomBtn from "../components/CustomBtn";
import proxyState from "../proxyStore/proxy";
import DragIndicator from "./DragIndicator";

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
			<DragIndicator showDragIndicator={showDragIndicator} />
		</motion.div>
	);
}

export default ModelController;
