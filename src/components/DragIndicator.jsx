import { MdDragIndicator } from "react-icons/md";

function DragIndicator({ showDragIndicator }) {
	return (
		<MdDragIndicator
			className="drag_indicator"
			color="white"
			size={23}
			fillOpacity={showDragIndicator ? 0.4 : 0}
		/>
	);
}

export default DragIndicator;
