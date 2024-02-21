import { useState } from "react";
import Cursor from "./components/Cursor";
import CustomizerPage from "./pages/CustomizerPage";
import DisplayPage from "./pages/DisplayerPage";
import FeaturePage from "./pages/FeaturePage";
import HomePage from "./pages/HomePage";

function App() {
	const [cursorClass, setCursorClass] = useState("def_cursor");
	function changeCursorClass(newClass) {
		setCursorClass(newClass);
	}
	return (
		<main className="app transition-all ease-in">
			<Cursor cursorClass={cursorClass} />
			<HomePage />
			<CustomizerPage />
			<FeaturePage changeCursorClass={changeCursorClass} />
			<DisplayPage />
		</main>
	);
}

export default App;
