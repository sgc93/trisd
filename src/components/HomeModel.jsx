import { Center, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

function Model({ currentMesh, setCurrentMesh }) {
	const { scene, materials, nodes } = useGLTF("/jebena.glb");
	const [homeColor, setHomeColor] = useState("");
	const [isAnimating, setIsAnimating] = useState(false);
	const [animatedMesh, setAnimatedMesh] = useState("");

	const kdanRef = useRef();
	const jebenaRef = useRef();
	const chairRef = useRef();
	const group = useRef();

	const texture = useTexture({
		map: "./textures/metalic/Metal_006_basecolor.jpg",
		normalMap: "./textures/metalic/Metal_006_normal.jpg",
		roughnessMap: "./textures/metalic/Metal_006_roughness.jpg",
		aoMap: "./textures/metalic/Metal_006_ambientOcclusion.jpg",
	});

	// useFrame((state, delta) => {
	// 	if (isAnimating && animatedMesh) {
	// 		// Fall animation
	// 		animatedMesh.current.position.z = 1 * delta; // Adjust the speed of falling

	// 		// Rotate the mesh gradually
	// 		animatedMesh.current.rotation.x += 0.01;
	// 		animatedMesh.current.rotation.y += 0.01;
	// 	}

	// 	// model rotation

	// 	if (group.current) {
	// 		easing.dampE(
	// 			group.current.rotation,
	// 			[state.pointer.y / 4, state.pointer.x / 3, 0],
	// 			0.25
	// 		);
	// 	}
	// 	if (currentMesh) {
	// 		// Assuming 'nodes' is the object containing mesh nodes
	// 		// and 'textureImagePath' is the path to the image file
	// 		// Load the image to be used as a texture
	// 		const textureLoader = new THREE.TextureLoader();
	// 		const texture = textureLoader.load(
	// 			"./textures/metalic/Metal_006_basecolor.jpg"
	// 		);

	// 		// Create a material that uses the texture
	// 		const material = new THREE.MeshBasicMaterial({
	// 			color: "white",
	// 			map: texture,
	// 		});

	// 		// Access the mesh node with the name "jebena"
	// 		const meshNode = nodes["jebena"];

	// 		// Assign the material to the mesh node
	// 		meshNode.material = material;

	// 		// easing.dampC(nodes[currentMesh].material.texture, homeColor, 0.25, delta);
	// 	}
	// });

	useEffect(() => {
		if (currentMesh) setHomeColor("/cube.png");
	}, [currentMesh]);

	if (!nodes) return;

	return (
		<group>
			<mesh geometry={nodes["jebena"].geometry}>
				<meshStandardMaterial {...texture} />
			</mesh>
		</group>
	);

	// function handleClick(nodeName) {
	// 	setCurrentMesh(nodeName);
	// }

	// return (
	// 	<group ref={group}>
	// 		{Object.keys(nodes).map((nodeName) => {
	// 			return (
	// 				<group key={nodeName}>
	// 					<primitive
	// 						key={nodeName}
	// 						object={nodes[nodeName]}
	// 						material-map={texture}
	// 						onClick={() => {
	// 							handleClick(nodeName);
	// 						}}
	// 					/>
	// 				</group>
	// 			);
	// 		})}
	// 	</group>
	// );

	// <group ref={group}>
	// 	<primitive
	// 		ref={kdanRef}
	// 		object={nodes.j_kdan}
	// 		onClick={() => {
	// 			setCurrentMesh("kdan_material");
	// 			// setIsAnimating(true);
	// 			// setAnimatedMesh(kdanRef);
	// 		}}
	// 	/>
	// 	<primitive
	// 		ref={jebenaRef}
	// 		object={nodes.jebena}
	// 		onClick={() => {
	// 			setCurrentMesh("jebena_material");
	// 			// setIsAnimating(true);
	// 			// setAnimatedMesh(jebenaRef);
	// 		}}
	// 	/>
	// 	<primitive
	// 		ref={chairRef}
	// 		object={nodes.j_chair}
	// 		onClick={() => {
	// 			setCurrentMesh("chair_material");
	// 			// setIsAnimating(true);
	// 			// setAnimatedMesh(chairRef);
	// 		}}
	// 	/>
	// </group>
}

function HomeModel() {
	const canvas = useRef();
	const [currentMesh, setCurrentMesh] = useState("");

	function changeColor() {
		setCurrentMesh("jebena");
	}

	return (
		<Canvas ref={canvas}>
			<ambientLight />
			<directionalLight />
			<OrbitControls enableZoom={true} />
			<Suspense fallback={null}>
				<Center>
					<Model currentMesh={currentMesh} setCurrentMesh={setCurrentMesh} />
				</Center>
			</Suspense>
		</Canvas>
	);
}

export default HomeModel;
