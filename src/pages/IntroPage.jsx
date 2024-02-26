import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import Loading from "../components/Loading";
import LogoSVG from "../components/LogoSVG";
import proxyState, { introProxy } from "../proxyStore/proxy";
import "./pages.css";
function IntroPage() {
	const snap = useSnapshot(proxyState);
	const bntSnap = useSnapshot(introProxy);
	return (
		snap.inIntro &&
		snap.inHome && (
			<section className="intro">
				{bntSnap.showBtn && <LogoSVG />}
				<div className="intro-loading">
					{bntSnap.showBtn ? (
						<span>TRISD is ready to serve you!</span>
					) : (
						<Loading message={"rendering..."} type={"notify-intro"} />
					)}
				</div>
				{bntSnap.showBtn && (
					<motion.button drag className="intro-btn glassmorphism">
						go to TRISD
					</motion.button>
				)}
			</section>
		)
	);
}

export default IntroPage;
