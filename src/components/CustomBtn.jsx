import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function CustomBtn({ type, title, customStyles, handleClick }) {
	const snap = useSnapshot(proxyState);
	function generateStyle(type) {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: "#fff",
			};
		}
	}

	return (
		<button
			className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
}

export default CustomBtn;
