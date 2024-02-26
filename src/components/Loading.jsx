import "./components.css";

function Loading({ message, type }) {
	if (type === "notify") {
		console.log("loading type: " + type);
		return (
			<div className="notify-spinner">
				<div className="only-spinner"></div>
				<span>loading...</span>
			</div>
		);
	}
	return (
		<div className="render-loading_spinner glassmorphism">
			<div className="message">{message}</div>
			<div className="spinner"></div>
		</div>
	);
}

export default Loading;
