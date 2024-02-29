import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import proxyState from "../proxyStore/proxy";
import CustomBtn from "./CustomBtn";
import DragIndicator from "./DragIndicator";
import "./components.css";

function HomeContent({
	largeText,
	smallText,
	largeSize,
	smallSize,
	btnText,
	isContentDraggable,
}) {
	const navigateTo = useNavigate();
	const snap = useSnapshot(proxyState);
	const [showDragIndicator, setShowDragIndicator] = useState(false);

	const customStyle = {
		backgroundColor: snap.homeBtn,
		color: getContrastingColor(snap.homeBtn),
	};

	return (
		<motion.div
			className="home-content"
			onMouseEnter={() => setShowDragIndicator(true)}
			onMouseLeave={() => setShowDragIndicator(false)}
			drag={isContentDraggable}
			dragElastic={1.18}
		>
			<div>
				<div className="title-1" style={{ fontSize: `${largeSize}rem` }}>
					{" "}
					{largeText}
				</div>
				<div className="text-2" style={{ fontSize: `${smallSize}rem` }}>
					{smallText}
				</div>
				<CustomBtn
					type={"filled"}
					title={btnText}
					handleClick={() => {
						navigateTo("/upload");
					}}
					btnText={btnText}
					customStyles={customStyle}
				/>
			</div>
			<DragIndicator showDragIndicator={showDragIndicator} />
		</motion.div>
	);
}

export default HomeContent;
