import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSnapshot } from "valtio";
import Cursor from "./components/Cursor";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import NotificationPage from "./pages/NotificationPage";
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

function Home() {
	return (
		<>
			<IntroPage />
			<HomePage />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <CommonComponent />,
		children: [
			{
				path: "/",
				element: <Home />,
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
	const [inUpdateState] = useState(false);
	const snap = useSnapshot(proxyState);
	const [glbData, setGlbData] = useState("./jebena.glb");
	const [cursorClass, setCursorClass] = useState("def_cursor");

	return (
		<main className="app transition-all ease-in relative">
			{inUpdateState ? (
				<>
					<Cursor />
					<NotificationPage />
				</>
			) : (
				<RouterProvider router={router} />
			)}
		</main>
	);
}

export default App;
