import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import CustomBtn from "../components/CustomBtn";

function FeatureCard({ title, description, imgUrl, btnTxt, handleOnClick }) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(x, [-100, 100], [30, -30]);
	const rotateY = useTransform(y, [-100, 100], [-30, 30]);
	const [showDragIndicator, setShowDragIndicator] = useState(false);

	function handleHoverStart() {
		setShowDragIndicator(true);
	}

	function handleHoverEnd() {
		setShowDragIndicator(false);
	}

	return (
		<motion.div
			className="card"
			style={{ x, y, rotateX, rotateY, z: 100 }}
			drag
			dragElastic={0.18}
			// dragConstraints={constraints}
			// whileTap={{ cursor: "grabbing" }}
		>
			<div className="card_part1">
				<div className="logo">
					<img src="./logo.png" alt="trisD" />
				</div>
				<div className="feature">
					<div className="feature-title">{title}</div>
					<div className="feature-description">{description}</div>
				</div>
				<motion.div
					drag
					className="feature-btn btn_container"
					onHoverStart={handleHoverStart}
					onHoverEnd={handleHoverEnd}
				>
					<CustomBtn
						title={btnTxt}
						type={"filled"}
						handleClick={handleOnClick}
						draggable={false}
					/>
					<MdDragIndicator
						className="drag_indicator"
						color="white"
						size={23}
						fillOpacity={showDragIndicator ? 0.4 : 0}
					/>
				</motion.div>
			</div>
			<div className="card_part2">
				<img src={imgUrl} alt="sample model" draggable={false} />
			</div>
		</motion.div>
	);
}

export default FeatureCard;
