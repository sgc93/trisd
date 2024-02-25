import { useState } from "react";
import DisplayCanvas from "./canvas/displayCanvas/DisplayCanvas";
import Cursor from "./components/Cursor";
import DisplayPage from "./pages/DisplayerPage";
import HomePage from "./pages/HomePage";

function App() {
	const [glbData, setGlbData] = useState("./jebena.glb");

	const [cursorClass, setCursorClass] = useState("def_cursor");
	function changeCursorClass(newClass) {
		setCursorClass(newClass);
	}
	return (
		<main className="app transition-all ease-in">
			<Cursor cursorClass={cursorClass} />
			<HomePage />
			<DisplayPage setGlbData={setGlbData} />
			<DisplayCanvas glbData={glbData} />
		</main>
	);
}

export default App;
