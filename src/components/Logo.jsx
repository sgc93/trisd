import { motion } from "framer-motion";
import "./components.css";

function Logo({ newClass, handleClick, url, width }) {
	return (
		<motion.div
			drag
			dragElastic={1.18}
			className={`logo ${newClass}`}
			onClick={handleClick}
		>
			<img
				src={url ? url : "./logo.png"}
				alt="app_logo"
				draggable={false}
				style={url ? { width: `${width}rem` } : {}}
			/>
		</motion.div>
	);
}

export default Logo;
