import { useState } from "react";
import { MdEdit } from "react-icons/md";

function EditPanel() {
	const [showPanel, setShowPanel] = useState(false);
	return (
		<div className="edit-panel">
			{showPanel && <div>panel</div>}
			<div className="edit-panel_btn">
				<span className="glassmorphism">customize this page</span>
				<MdEdit className="icon" />
			</div>
		</div>
	);
}

export default EditPanel;
