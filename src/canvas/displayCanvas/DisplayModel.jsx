import { MeshReflectorMaterial, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

import { PresentationControls, Stage } from "@react-three/drei";
import { floorTextures } from "../../config/constants";

function DisplayModel({ glbData, controller, newTexture }) {
	const { movement } = controller;
	const { scene } = useGLTF(glbData);
	const model = useRef();

	const bronze = useTexture(floorTextures[1].texture);
	const metalic = useTexture(floorTextures[2].texture);
	const mozaic = useTexture(floorTextures[3].texture);
	const oak = useTexture(floorTextures[4].texture);
	let texture;
	if (newTexture === "bronze") {
		texture = bronze;
	} else if (newTexture === "metalic") {
		texture = metalic;
	} else if (newTexture === "mosaic") {
		texture = mozaic;
	} else if (newTexture === "oak") {
		texture = oak;
	} else if (newTexture === "reflector") {
		texture = "";
	}

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
		<PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4.5]}>
			<Stage environment={"city"} intensity={1} castShadow={false}>
				<primitive object={scene} />
			</Stage>
			<mesh rotation={[-Math.PI / 2.07, 0, Math.PI]} position={[0, 0, -35]}>
				<planeGeometry args={[170, 170]} />
				{texture && <meshStandardMaterial {...texture} />}
				{!texture && (
					<MeshReflectorMaterial
						blur={[1000, 200]}
						resolution={[2049]}
						mixBlur={1}
						mixStrength={40}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color="#484848"
						metalness={0.9}
					/>
				)}
			</mesh>
		</PresentationControls>
	);
}

export default DisplayModel;
