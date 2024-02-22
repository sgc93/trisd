import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function ColorPicker({ purpose }) {
	const snap = useSnapshot(proxyState);
	const isBg = purpose === "themeChange";
	const isColor = purpose === "customize";
	function performPurpose(color) {
		if (isColor) {
			proxyState.color = color.hex;
		} else if (isBg) {
			proxyState.bg = color.hex;
		}
	}
	return (
		<div className="colorPicker absolute left-full ml-3">
			<SketchPicker
				color={isColor ? snap.color : snap.bg}
				disableAlpha
				onChange={(color) => performPurpose(color)}
			/>
		</div>
	);
}

export default ColorPicker;
