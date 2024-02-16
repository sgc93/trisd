import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";

function ColorPicker() {
	const snap = useSnapshot(proxyState);
	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.color}
				disableAlpha
				onChange={(color) => (proxyState.color = color.hex)}
			/>
		</div>
	);
}

export default ColorPicker;
