import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

export default function BackdropShadow() {
	const shadows = useRef();
	return (
		<AccumulativeShadows
			color="green"
			ref={shadows}
			position={[0, 0, -0.14]}
			temporal
			frames={40}
			alphaTest={0.85}
			scale={10}
			rotation={[Math.PI / 2, 0, 0]}
		>
			<RandomizedLight
				amount={5}
				radius={9}
				intensity={0.5}
				ambient={0.25}
				position={[5, 5, -10]}
			/>
			<RandomizedLight
				amount={5}
				radius={5}
				intensity={0.23}
				ambient={0.55}
				position={[-5, 5, -9]}
			/>
		</AccumulativeShadows>
	);
}
