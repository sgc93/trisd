import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import { headContainerAnimation, slideAnimation } from "../config/motion";
import proxyState from "../proxyStore/proxy";

function HomePage() {
	const snap = useSnapshot(proxyState);
	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section className="home" {...slideAnimation("left")}>
					<motion.header {...slideAnimation("down")}>
						<img
							src="./threejs.png"
							alt="logo"
							className="w-8 h-8 object-contain"
						/>
					</motion.header>
					<motion.div className="home-content" {...headContainerAnimation}>
						<h1 className="head-text">
							START <br className="xl:block hidden " /> DISPLAYING
						</h1>
					</motion.div>
					<motion.div
						{...headContainerAnimation}
						className="flex flex-col gap-5"
					>
						<p className="max-w-wd font-normal text-gray-600 text-base">
							Create your unique and exclusive 3D models and display them with
							our brand-new 3D display-er and customization tool.
							<strong>Unleash your imagination</strong>, define and share your
							own style.
						</p>
						<CustomBtn
							type="filled"
							title="try Customizing"
							handleClick={() => (proxyState.intro = false)}
							customStyles="w-fit px-4 py-2.5 font-bold text-sm"
						/>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default HomePage;
