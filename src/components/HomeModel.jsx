import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

function HomeModel() {
	const { scene } = useGLTF("/]ebena.glb");
	const maxZoom = 5;

	return (
		scene && (
			<Canvas>
				<ambientLight />
				<directionalLight position={[0, 5, 5]} intensity={1} />
				<OrbitControls
					maxZoom={maxZoom}
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					target={new Vector3(0, 0, 0)}
				/>
				<Center>
					<primitive
						object={scene}
						scale={[2, 2, 2]}
						rotation={[0, -Math.PI / 2, 0]}
					/>
				</Center>
			</Canvas>
		)
	);
}

export default HomeModel;
