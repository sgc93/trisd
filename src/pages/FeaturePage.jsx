import { useEffect, useRef } from "react";
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

function FeaturePage() {
	const snap = useSnapshot(proxyState);
	const xyz = useRef();
	const featurePage = useRef();

	useEffect(() => {
		if (featurePage.current !== undefined) {
			featurePage.current.addEventListener("mousemove", (e) => {
				const x = e.clientX;
				const y = e.clientY;
				if (xyz.current !== undefined) {
					xyz.current.style.top = `${y}px`;
					xyz.current.style.left = `${x}px`;
				}
			});
		}
	});

	return (
		snap.inFeaturePage && (
			<section ref={featurePage} className="feature_page">
				<div className="feature-header">
					<img src="./logo.png" alt="trisD" />
					<CustomBtn
						type={"filled"}
						title={"Go Back"}
						handleClick={() => {
							proxyState.inFeaturePage = false;
							proxyState.inHome = true;
						}}
						customStyles={"w-fit px-4 font-bold text-sm "}
					/>
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
