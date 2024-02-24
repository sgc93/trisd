import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HomeModel from "./HomeModel";

function HomeCanvas() {
	return (
		<Canvas>
			<color attach={"background"} args={["#101010"]} />
			<fog attach={"fog"} args={["#101010", 5, 10]} />

			<Suspense fallback={null}>
				<HomeModel />
			</Suspense>
		</Canvas>
	);
}

export default HomeCanvas;
