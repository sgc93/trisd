import { useRef } from "react";

export default function CameraReg({ children }) {
	const group = useRef();
	return <group>{children}</group>;
}
