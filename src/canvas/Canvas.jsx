import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import BackdropShadow from "./BackdropShadow";
import CameraReg from "./CameraReg";
import ObjectModel from "./ObjectModel";

export default function CanvasModel() {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 50 }}
			gl={{ preserveDrawingBuffer: true }}
			className="w-full max-w-full h-full transition-all ease-in"
		>
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
