import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

export default function BackdropShadow() {
	return (
		<AccumulativeShadows position={[0, 0, -0.2]}>
			<RandomizedLight amount={4} />
		</AccumulativeShadows>
	);
}
