import { useState } from "react";
import Cursor from "./components/Cursor";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

function App() {
	const [glbData, setGlbData] = useState("./jebena.glb");

	const [cursorClass, setCursorClass] = useState("def_cursor");
	return (
		<main className="app transition-all ease-in relative">
			<Cursor cursorClass={cursorClass} />
			<HomePage />
			<UploadPage setGlbData={setGlbData} />
			<DisplayPage glbData={glbData} />
		</main>
	);
}

export default App;
