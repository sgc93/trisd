import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

import { PresentationControls, Stage } from "@react-three/drei";

function DisplayModel({ glbData, controller }) {
	const { movement } = controller;
	const { scene } = useGLTF(glbData);
	const model = useRef();

	const texture = useTexture({
		map: "./textures/metalic/Metal_006_basecolor.jpg",
		normalMap: "./textures/metalic/Metal_006_normal.jpg",
		roughnessMap: "./textures/metalic/Metal_006_roughness.jpg",
		aoMap: "./textures/metalic/Metal_006_ambientOcclusion.jpg",
	});
	const terrazzo = useTexture({
		map: "./textures/terrazzo/Terrazzo_003_basecolor.jpg",
		normalMap: "./textures/terrazzo/Terrazzo_003_normal.jpg",
		roughnessMap: "./textures/terrazzo/Terrazzo_003_roughness.jpg",
		aoMap: "./textures/terrazzo/Terrazzo_003_ambientOcclusion.jpg",
	});
	const dirt = useTexture({
		map: "./textures/dirt/dirt_floor_basecolor.jpg",
		normalMap: "./textures/dirt/dirt_floor_normal.jpg",
		roughnessMap: "./textures/dirt/dirt_floor_roughness.jpg",
		aoMap: "./textures/dirt/dirt_floor_ao.jpg",
	});
	const mosaic = useTexture({
		map: "./textures/mosaic/TilesMosaicPennyround001_COL_2K.png",
		normalMap: "./textures/mosaic/TilesMosaicPennyround001_NRM_2K.png",
		roughnessMap: "./textures/mosaic/TilesMosaicPennyround001_BUMP_2K.png",
		aoMap: "./textures/mosaic/TilesMosaicPennyround001_AO_2K.png",
		dispMap: "./textures/mosaic/TilesMosaicPennyround001_DISP_2K.png",
	});
	const bronze = useTexture({
		map: "./textures/bronze/MetalBronzeWorn001_COL_2K_METALNESS.png",
		normalMap: "./textures/bronze/MetalBronzeWorn001_NRM_2K_METALNESS.png",
		roughnessMap:
			"./textures/bronze/MetalBronzeWorn001_ROUGHNESS_2K_METALNESS.png",
		dispMap: "./textures/bronze/MetalBronzeWorn001_DISP_2K_METALNESS.png",
	});
	const oak = useTexture({
		map: "./textures/oak/oak_col.png",
		normalMap: "./textures/oak/oak_nrm.png",
		roughnessMap: "./textures/oak/oak_roughness.png",
		dispMap: "./textures/oak/oak_disp.png",
	});

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
				<meshStandardMaterial {...oak} />
				{/* <MeshReflectorMaterial
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
				/> */}
			</mesh>
		</PresentationControls>
	);
}

export default DisplayModel;
