import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function ColorPicker({ purpose }) {
	const snap = useSnapshot(proxyState);
	const isBg = purpose === "themeChange";
	const isColor = purpose === "customize";
	const isTabEdit = purpose === "editTab";
	function performPurpose(color) {
		if (isColor) {
			proxyState.color = color.hex;
		} else if (isBg) {
			proxyState.bg = color.hex;
		} else if (isTabEdit) {
			proxyState.homeBtn = color.hex;
		}
	}
	return (
		<div
			className={
				isTabEdit ? "picker-in-tab" : "colorPicker absolute left-full ml-3"
			}
		>
			<SketchPicker
				color={isColor ? snap.color : snap.bg}
				disableAlpha
				onChange={(color) => performPurpose(color)}
			/>
		</div>
	);
}

export default ColorPicker;
