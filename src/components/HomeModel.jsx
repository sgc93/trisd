import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";

function Model() {
	const { materials, nodes } = useGLTF("/jebena.glb");
	const [currentMesh, setCurrentMesh] = useState("");
	const [homeColor, setHomeColor] = useState("");
	const [isAnimating, setIsAnimating] = useState(false);
	const [animatedMesh, setAnimatedMesh] = useState("");

	const kdanRef = useRef();
	const jebenaRef = useRef();
	const chairRef = useRef();
	const group = useRef();

	useFrame((state, delta) => {
		if (isAnimating && animatedMesh) {
			// Fall animation
			animatedMesh.current.position.z = 1 * delta; // Adjust the speed of falling

			// Rotate the mesh gradually
			animatedMesh.current.rotation.x += 0.01;
			animatedMesh.current.rotation.y += 0.01;
		}

		// model rotation

		if (group.current) {
			easing.dampE(
				group.current.rotation,
				[state.pointer.y / 4, state.pointer.x / 3, 0],
				0.25
			);
		}

		currentMesh &&
			easing.dampC(materials[currentMesh].color, homeColor, 0.25, delta);
	});

	useEffect(() => {
		if (currentMesh) setHomeColor("red");
	}, [currentMesh]);

	return (
		nodes && (
			<group ref={group}>
				<primitive
					ref={kdanRef}
					object={nodes.j_kdan}
					onClick={() => {
						setCurrentMesh("kdan_material");
						// setIsAnimating(true);
						// setAnimatedMesh(kdanRef);
					}}
				/>
				<primitive
					ref={jebenaRef}
					object={nodes.jebena}
					onClick={() => {
						setCurrentMesh("jebena_material");
						// setIsAnimating(true);
						// setAnimatedMesh(jebenaRef);
					}}
				/>
				<primitive
					ref={chairRef}
					object={nodes.j_chair}
					onClick={() => {
						setCurrentMesh("chair_material");
						// setIsAnimating(true);
						// setAnimatedMesh(chairRef);
					}}
				/>
			</group>
		)
	);
}

function HomeModel() {
	return (
		<Canvas>
			<ambientLight />
			<directionalLight position={[0, 5, 5]} intensity={1} />
			<OrbitControls enableZoom={false} />
			<Suspense fallback={null}>
				<Model />
			</Suspense>
		</Canvas>
	);
}

export default HomeModel;
