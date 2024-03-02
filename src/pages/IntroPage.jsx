import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import Loading from "../components/Loading";
import LogoSVG from "../components/LogoSVG";
import Notification from "../components/Notification";
import proxyState, { introProxy } from "../proxyStore/proxy";
import "./pages.css";

const btnVariants = {
	initial: {
		opacity: 0,
		translateY: 1000,
	},
	animate: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 1,
			delay: 2,
			ease: "easeInOut",
		},
	},
};
function IntroPage() {
	const snap = useSnapshot(proxyState);
	const bntSnap = useSnapshot(introProxy);
	const isReady = bntSnap.showBtn;
	useEffect(() => {
		const timeOutId = setTimeout(() => {
			if (!isReady) {
				introProxy.isNotifying = true;
			}
		}, 10000);

		return () => clearTimeout(timeOutId);
	}, [isReady]);

	return (
		snap.inIntro && (
			<>
				{bntSnap.isNotifying && (
					<Notification
						message={
							"This rendering, of homepage's 3D model, will take a little long time - around 1.5 minutes, do you want to continue with its 2D version?"
						}
					/>
				)}
				<section
					className="intro"
					style={
						bntSnap.isNotifying
							? {
									filter: "blur(10px)",
									border: "5px solid var(--color-text-secondary2)",
							  }
							: {}
					}
				>
					{bntSnap.showBtn && <LogoSVG />}
					<div className="intro-loading">
						{bntSnap.showBtn ? (
							<span>TRISD is ready to serve you!</span>
						) : (
							<Loading message={"rendering..."} type={"notify-intro"} />
						)}
					</div>
					{bntSnap.showBtn && (
						<motion.button
							variants={btnVariants}
							initial="initial"
							animate="animate"
							className="intro-btn glassmorphism"
							onClick={() => {
								proxyState.inIntro = false;
							}}
						>
							go to TRISD
						</motion.button>
					)}
				</section>
			</>
		)
	);
}

export default IntroPage;
