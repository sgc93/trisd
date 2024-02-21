import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function DisplayPage() {
	const snap = useSnapshot(proxyState);
	return (
		snap.inDisplayer && <section className="display_page"> DisplayPage</section>
	);
}

export default DisplayPage;
