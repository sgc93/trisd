import { useSnapshot } from "valtio";
import Loading from "../components/Loading";
import proxyState from "../proxyStore/proxy";
import "./pages.css";

function IntroPage() {
	const snap = useSnapshot(proxyState);
	return (
		snap.inIntro &&
		snap.inHome && (
			<section className="intro">
				<Loading message={"Welcome to TRISD 👋"} />
			</section>
		)
	);
}

export default IntroPage;
