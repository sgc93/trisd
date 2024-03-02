import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loading from "../../components/Loading";
import HomeModel from "./HomeModel";

function HomeCanvas({ newTexture }) {
	return (
		<Suspense fallback={<Loading type={"notify"} />}>
			<Canvas style={{ touchAction: "none" }}>
				<color attach={"background"} args={["#101010"]} />
				<fog attach={"fog"} args={["#101010", 5, 10]} />

				<HomeModel newTexture={newTexture} />
			</Canvas>
		</Suspense>
	);
}

export default HomeCanvas;
