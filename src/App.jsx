import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSnapshot } from "valtio";
import Cursor from "./components/Cursor";
import Loading from "./components/Loading";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import UploadPage from "./pages/UploadPage";
import proxyState from "./proxyStore/proxy";

function CommonComponent() {
	return (
		<>
			<Cursor />
			<Outlet />
		</>
	);
}
const router = createBrowserRouter([
	{
		element: <CommonComponent />,
		children: [
			{
				path: "/intro",
				element: <IntroPage />,
			},
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "*",
				element: <Loading message={"404"} type={"notify"} />,
			},
			{
				path: "/upload",
				element: <UploadPage />,
			},
			{
				path: "/display",
				element: <DisplayPage />,
			},
		],
	},
]);

function App() {
	const snap = useSnapshot(proxyState);
	const [glbData, setGlbData] = useState("./jebena.glb");
	const [cursorClass, setCursorClass] = useState("def_cursor");

	return (
		<main className="app transition-all ease-in relative">
			<RouterProvider router={router} />
			{/* <Cursor cursorClass={cursorClass} />
			<IntroPage />
			<HomePage />
			<UploadPage setGlbData={setGlbData} />
			<DisplayPage glbData={glbData} /> */}
		</main>
	);
}

export default App;
