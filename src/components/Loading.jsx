import "./components.css";

function Loading({ message }) {
	return (
		<div className="render-loading_spinner glassmorphism">
			<div className="message">{message}</div>
			<div className="spinner"></div>
		</div>
	);
}

export default Loading;
