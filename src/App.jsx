import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSnapshot } from "valtio";
import Cursor from "./components/Cursor";
import Error from "./components/Error";
import PageNotFound from "./pages/404";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import NotificationPage from "./pages/NotificationPage";
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
	const snap = useSnapshot(proxyState);
	return (
		<>
			{snap.inIntro && <IntroPage />}
			<HomePage />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <CommonComponent />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
				errorElement: <Error />,
			},
			{
				path: "/display",
				element: <DisplayPage />,
				errorElement: <Error />,
			},
			{
				path: "*",
				element: <PageNotFound />,
				errorElement: <Error />,
			},
		],
	},
]);

function App() {
	const [inUpdateState] = useState(false);
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
