import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HomeModel from "./HomeModel";

function HomeCanvas() {
	return (
		<Canvas>
			<Center>
				<Suspense fallback={null}>
					<HomeModel />
				</Suspense>
			</Center>
		</Canvas>
	);
}

export default HomeCanvas;
