import { useRouteError } from "react-router-dom";

export default function Error() {
	const homeError = useRouteError();
	console.log(homeError.message);
	return <section className="error-page">{homeError.message + ""}</section>;
}
