import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSnapshot } from "valtio";
import Cursor from "./components/Cursor";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
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
const router = createBrowserRouter([
	{
		element: <CommonComponent />,
		children: [
			{
				path: "/",
				element: <HomePage />,
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
	const [inUpdateState] = useState(true);
	const snap = useSnapshot(proxyState);
	const [glbData, setGlbData] = useState("./jebena.glb");
	const [cursorClass, setCursorClass] = useState("def_cursor");

	return (
		<main className="app transition-all ease-in relative">
			{inUpdateState ? (
				<NotificationPage />
			) : (
				<RouterProvider router={router} />
			)}
		</main>
	);
}

export default App;
