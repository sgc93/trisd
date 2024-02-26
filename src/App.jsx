import { useState } from "react";
import { useSnapshot } from "valtio";
import Cursor from "./components/Cursor";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import UploadPage from "./pages/UploadPage";
import proxyState from "./proxyStore/proxy";

function App() {
	const snap = useSnapshot(proxyState);
	const [glbData, setGlbData] = useState("./jebena.glb");
	const [cursorClass, setCursorClass] = useState("def_cursor");

	return (
		<main className="app transition-all ease-in relative">
			<Cursor cursorClass={cursorClass} />
			<IntroPage />
			<HomePage />
			<UploadPage setGlbData={setGlbData} />
			<DisplayPage glbData={glbData} />
		</main>
	);
}

export default App;
