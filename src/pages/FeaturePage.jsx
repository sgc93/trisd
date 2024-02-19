import { useSnapshot } from "valtio";
import FeatureCard from "../components/FeatureCard";
import proxyState from "../proxyStore/proxy";

const featureData = [
	{
		title: "3D MODEL DISPLAYER",
		description: "display your .glb format 3D models",
		imgUrl: "./model.png",
		btnTxt: "Display 3D",
	},
	{
		title: "3D MODEL Customizer",
		description: "customize your 3d models and see the rendered final result.",
		imgUrl: "./model.png",
		btnTxt: "Start Customizing",
	},
	{
		title: "DO MOCKING UP ON 3D MODELS",
		description: "do your mockup on template and have the screenshot.",
		imgUrl: "./model.png",
		btnTxt: "Try Mocking Up",
	},
];

function FeaturePage() {
	const snap = useSnapshot(proxyState);
	return (
		snap.inFeaturePage && (
			<section className="feature_page">
				{featureData.map((data) => {
					return (
						<FeatureCard
							key={data.title}
							title={data.title}
							description={data.description}
							imgUrl={data.imgUrl}
							btnTxt={data.btnTxt}
						/>
					);
				})}
			</section>
		)
	);
}

export default FeaturePage;
