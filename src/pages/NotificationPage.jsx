import { motion } from "framer-motion";
import LogoSVG from "../components/LogoSVG";
import "./pages.css";

const boxVariants = {
	initial: {
		opacity: 0,
		translateX: 1000,
	},
	animate: {
		opacity: 1,
		translateX: 0,
		transition: {
			duration: 1,
			delay: 2,
			ease: "easeInOut",
		},
	},
};

const btnVariants = {
	initial: {
		opacity: 0,
		translateX: -1000,
	},
	animate: {
		opacity: 1,
		translateX: 0,
		transition: {
			duration: 1,
			delay: 2,
			ease: "easeInOut",
		},
	},
};

export default function NotificationPage() {
	function handleClosingTab() {
		window.close();
	}
	return (
		<section className="notification-page">
			<LogoSVG />
			<motion.div
				variants={boxVariants}
				initial="initial"
				animate="animate"
				className="message-box glassmorphism"
			>
				<span>TRISD is being updated 🔥</span>
				<span>
					it will come with new features and in more optimized manner ---
					SOON!👍🏻
				</span>
				<motion.button
					variants={btnVariants}
					initial="initial"
					animate="animate"
					className="close-tab-btn"
					onClick={handleClosingTab}
				>
					close the app
				</motion.button>
			</motion.div>
		</section>
	);
}
