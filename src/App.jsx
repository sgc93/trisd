import CustomizerPage from "./pages/CustomizerPage";
import FeaturePage from "./pages/FeaturePage";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<main className="app transition-all ease-in">
			<HomePage />
			<CustomizerPage />
			<FeaturePage />
		</main>
	);
}

export default App;
