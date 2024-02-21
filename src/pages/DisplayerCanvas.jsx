import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function DisplayCanvas({ glbData }) {
	// const { scene, error } = useGLTF(glbData);
	const snap = useSnapshot(proxyState);

	// if (error) console.log(error.message);
	if (!glbData) return;

	return snap.inCanvas && <div>Model displayer page</div>;
}

export default DisplayCanvas;
