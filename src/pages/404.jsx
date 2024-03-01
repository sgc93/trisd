import React from "react";
import { useRouteError } from "react-router-dom";
import "./pages.css";

export default function PageNotFound() {
	const error = useRouteError();
	return (
		<section className="page-not-found">
			<span className="four-o-four">404</span>
			<span className="not-found-text">Page Not Found!😒</span>
			<span className="message">
				{error ? error.message || error.data : ""}
			</span>
		</section>
	);
}
