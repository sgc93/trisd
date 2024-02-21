import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import FeatureCard from "../components/FeatureCard";
import proxyState from "../proxyStore/proxy";

const featureData = [
	{
		title: "3D MODEL DISPLAYER",
		description: "display your .glb format 3D models",
		imgUrl: "./model.png",
		btnTxt: "Display 3D",
		onclick: () => {
			proxyState.inFeaturePage = false;
			proxyState.inDisplayer = true;
		},
	},
	{
		title: "3D MODEL Customizer",
		description: "customize your 3d models and see the rendered final result.",
		imgUrl: "./model.png",
		btnTxt: "Start Customizing",
		onclick: () => {
			proxyState.inFeaturePage = false;
			proxyState.inCustomizer = true;
		},
	},
	{
		title: "DO MOCKING UP ON 3D MODELS",
		description: "do your mockup on template and have the screenshot.",
		imgUrl: "./model.png",
		btnTxt: "Try Mocking Up",
		onclick: () => {
			proxyState.inFeaturePage = false;
			proxyState.inMockup = true;
		},
	},
];

function FeaturePage({ changeCursorClass }) {
	const snap = useSnapshot(proxyState);
	const xyz = useRef();
	const featurePage = useRef();
	const [showDragIndicator, setShowDragIndicator] = useState(false);

	function handleHoverStart() {
		setShowDragIndicator(true);
	}

	function handleHoverEnd() {
		setShowDragIndicator(false);
	}
	// const [constraints, setConstraints] = useState({
	// 	right: 500,
	// 	left: 0,
	// 	top: 78,
	// 	bottom: 0,
	// });

	// useEffect(() => {
	// 	function updateOffsets() {
	// 		if (featurePage.current) {
	// 			setConstraints((constraints) => {
	// 				return {
	// 					left: featurePage.current.offsetWidth,
	// 					right: 0,
	// 					top: featurePage.current.offsetHeight,
	// 					bottom: 0,
	// 				};
	// 			});
	// 			console.log(
	// 				featurePage.current,
	// 				featurePage.current.offsetWidth,
	// 				featurePage.current.offsetHeight
	// 			);
	// 		}
	// 	}

	// 	updateOffsets();

	// 	// Update constraints on content or style changes
	// 	const observer = new MutationObserver(updateOffsets);
	// 	observer.observe(featurePage.current, {
	// 		attributes: true,
	// 		childList: true,
	// 		subtree: true,
	// 	});

	// 	// Cleanup
	// 	return () => observer.disconnect();
	// }, []);

	useEffect(() => {
		if (featurePage.current) {
			featurePage.current.addEventListener("mousemove", (e) => {
				const x = e.clientX;
				const y = e.clientY;
				if (xyz.current !== null) {
					xyz.current.style.top = `${y + 15}px`;
					xyz.current.style.left = `${x + 15}px`;
				}
			});
		}
	});

	function handleDragEnd(event, info) {
		// calculate the dragged distance : using
		const dragDistance = Math.sqrt(
			Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2)
		);
		const clickThreshold = 5; // Adjust threshold as needed
		// Check if drag distance is below a threshold
		if (dragDistance > clickThreshold) {
			console.log("dragging");
		} else {
			proxyState.inFeaturePage = false;
			proxyState.inHome = true;
			console.log("clicking");
		}
	}

	return (
		snap.inFeaturePage && (
			<section ref={featurePage} className="feature_page">
				<div className="feature-header">
					<motion.div
						drag
						dragElastic={1.18}
						onHoverStart={() => changeCursorClass("logo_cursor")}
						onHoverEnd={() => changeCursorClass("def_cursor")}
					>
						<img src="./logo.png" alt="trisD" draggable={false} />
					</motion.div>
					<motion.div
						drag
						className="btn_container"
						onHoverStart={handleHoverStart}
						onHoverEnd={handleHoverEnd}
					>
						<CustomBtn
							type={"filled"}
							title={"Go Back"}
							handleClick={() => {
								proxyState.inFeaturePage = false;
								proxyState.inHome = true;
							}}
							customStyles={"w-fit px-4 font-bold text-sm "}
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
				<div className="feature-cards">
					{featureData.map((data) => {
						return (
							<FeatureCard
								key={data.title}
								title={data.title}
								description={data.description}
								imgUrl={data.imgUrl}
								btnTxt={data.btnTxt}
								handleOnClick={data.onclick}
							/>
						);
					})}
				</div>
				<div ref={xyz} className="xyz">
					try to drag things
				</div>
			</section>
		)
	);
}

export default FeaturePage;
