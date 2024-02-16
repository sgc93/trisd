import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BackdropShadow from "./BackdropShadow";
import CameraReg from "./CameraReg";
import ObjectModel from "./ObjectModel";

export default function CanvasModel() {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<Environment preset="city" />
			<CameraReg>
				<BackdropShadow />
				<Center>
					<ObjectModel />
				</Center>
			</CameraReg>
		</Canvas>
	);
}
