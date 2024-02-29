import { motion } from "framer-motion";
import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import CustomBtn from "../components/CustomBtn";
import DragIndicator from "./DragIndicator";

function ModelController({
	controller,
	setController,
	setDisplayUploader,
	setIsColorPicker,
}) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	const { zoom, rotate, movement } = controller;

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
			<div className="model-controller glassmorphism">
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
					<span>Enable 3D Rotation</span>
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
				<div className="bg-controller controller" onClick={ShowColorPicker}>
					<IoIosColorPalette className="bg-icon" />
					<span>Change background color</span>
				</div>
				<CustomBtn
					type={"outlined"}
					title={"Change File"}
					handleClick={() => {
						setDisplayUploader((displayUploader) => !displayUploader);
					}}
					customStyles={{ marginTop: ".5rem" }}
				/>
			</div>
			<DragIndicator showDragIndicator={showDragIndicator} />
		</motion.div>
	);
}

export default ModelController;
