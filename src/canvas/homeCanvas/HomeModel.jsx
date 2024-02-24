import {
	MeshReflectorMaterial,
	PresentationControls,
	Stage,
	useTexture,
} from "@react-three/drei";
import { Model } from "./Jebena";
function HomeModel() {
	const texture = useTexture({
		map: "./textures/metalic/Metal_006_basecolor.jpg",
		normalMap: "./textures/metalic/Metal_006_normal.jpg",
		roughnessMap: "./textures/metalic/Metal_006_roughness.jpg",
		aoMap: "./textures/metalic/Metal_006_ambientOcclusion.jpg",
	});

	return (
		<PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4.5]}>
			<Stage environment={"city"} intensity={1} castShadow={false}>
				<Model />
			</Stage>
			<mesh rotation={[-Math.PI / 2.07, 0, Math.PI]} position={[0, 0, -35]}>
				<planeGeometry args={[170, 170]} />
				<meshStandardMaterial {...texture} />
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
			</mesh>
		</PresentationControls>
	);
}

export default HomeModel;
