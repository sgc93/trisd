import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function DisplayModel({ glbData, controller }) {
	const { movement } = controller;
	const { scene } = useGLTF(glbData);
	const model = useRef();

	useFrame((state, delta) => {
		if (model.current && movement) {
			easing.dampE(
				model.current.rotation,
				[state.pointer.y, state.pointer.x, 0],
				0.5
			);
		}
	});

	// if (error) console.log(error.message);
	if (!glbData) return;

	return (
		<group ref={model}>
			<Center>
				<primitive scale={[1.5, 1.5, 1.5]} object={scene} />
			</Center>
		</group>
	);
}

export default DisplayModel;
