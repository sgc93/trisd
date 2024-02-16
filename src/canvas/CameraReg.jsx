import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

export default function CameraReg({ children }) {
	const snap = useSnapshot(proxyState);
	const group = useRef();
	useFrame((state, delta) => {
		const isBreakPoint = window.innerWidth <= 1260;
		const isMobile = window.innerWidth <= 600;

		// set the initial position of the model
		let targetPostion = [-0.4, 0, 2];
		if (snap.intro) {
			if (isBreakPoint) targetPostion = [0, 0, 2];
			if (isMobile) targetPostion = [0, 0.2, 2.5];
		} else {
			if (isMobile) targetPostion = [0, 0, 2.5];
			else targetPostion = [0, 0, 1];
		}

		// set model camera position

		easing.damp3(state.camera.position, targetPostion, 0.25, delta);

		// set the model rotation smoothly
		if (group.current) {
			easing.dampE(
				group.current.rotation,
				[state.pointer.y, state.pointer.x, 0],
				0.25
			);
		}
	});
	return <group ref={group}>{children}</group>;
}
