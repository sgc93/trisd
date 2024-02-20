import { motion, useMotionValue, useTransform } from "framer-motion";
import CustomBtn from "../components/CustomBtn";

function FeatureCard({ title, description, imgUrl, btnTxt, handleOnClick }) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(x, [-100, 100], [30, -30]);
	const rotateY = useTransform(y, [-100, 100], [-30, 30]);

	return (
		<motion.div
			className="card"
			style={{ x, y, rotateX, rotateY, z: 100 }}
			drag
			dragElastic={0.18}
			// dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
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
				<div className="feature-btn">
					<CustomBtn
						title={btnTxt}
						type={"filled"}
						handleClick={handleOnClick}
					/>
				</div>
			</div>
			<div className="card_part2">
				<img src={imgUrl} alt="sample model" draggable={false} />
			</div>
		</motion.div>
	);
}

export default FeatureCard;
