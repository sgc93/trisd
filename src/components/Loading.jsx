import "./components.css";

function Loading({ message, type }) {
	const isNotify = type === "notify";
	const isNotifyIntro = type === "notify-intro";

	if (isNotify || isNotifyIntro) {
		return (
			<div className={`${isNotify ? "only-spinner" : "notify-intro"}`}>
				<div className="only-spinner"></div>
				<span>{message}</span>
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
