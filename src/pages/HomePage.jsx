import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import HomeModel from "../components/HomeModel";
import {
	headContainerAnimation,
	headContentAnimation,
	slideAnimation,
} from "../config/motion";
import proxyState from "../proxyStore/proxy";

function HomePage() {
	const snap = useSnapshot(proxyState);
	return (
		<AnimatePresence>
			{snap.inHome && (
				<motion.section className="home" {...slideAnimation("left")}>
					<motion.header {...slideAnimation("down")} className="header">
						<img
							src="./logo.png"
							alt="logo"
							className="logo w-16 object-contain"
						/>
					</motion.header>
					<motion.div className="home-content" {...headContainerAnimation}>
						<div className="home-content_textual">
							<motion.h1 className="head-text" {...slideAnimation("left")}>
								EXPLORE <br /> 3D WORLD
							</motion.h1>
							<motion.div
								{...headContentAnimation}
								className="flex flex-col gap-5"
							>
								<p className="max-w-wd font-normal text-gray-600 text-base">
									Create your unique and exclusive 3D models and display them
									with our brand-new 3D display-er and customization tool.
									<strong>Unleash your imagination</strong>, define and share
									your own style.
								</p>
							</motion.div>
							<motion.div
								{...slideAnimation("bottom")}
								className="btn-container"
							>
								<CustomBtn
									type="filled"
									title="what to do with TRISD?"
									handleClick={() => {
										proxyState.inHome = false;
										proxyState.inFeaturePage = true;
									}}
									customStyles="home-btn px-4 py-2.5 font-bold text-sm"
								/>
							</motion.div>
						</div>
						<motion.div className="home-content_model ">
							{/* <img
								{...slideAnimation("right")}
								src="./square.png"
								alt="model"
								className="model"
							/> */}

							<HomeModel />
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default HomePage;
