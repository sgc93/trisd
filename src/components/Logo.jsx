import { motion } from "framer-motion";
import "./components.css";

function Logo({ newClass, handleClick, url }) {
	return (
		<motion.div
			drag
			dragElastic={1.18}
			className={`logo ${newClass}`}
			onClick={handleClick}
		>
			<img src={url ? url : "./logo.png"} alt="trisD" draggable={false} />
		</motion.div>
	);
}

export default Logo;
