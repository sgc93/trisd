import { motion } from "framer-motion";
import { useState } from "react";
import DragIndicator from "../components/DragIndicator";
import { textures } from "../config/constants";
import "./components.css";
function MaterialEditor({ changeMaterial, hideHomeContents }) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	return (
		<motion.div
			className="material-editor"
			drag
			dragElastic={1.18}
			onMouseEnter={() => {
				setShowDragIndicator(true);
				hideHomeContents(true);
			}}
			onMouseLeave={() => {
				setShowDragIndicator(false);
				hideHomeContents(false);
			}}
		>
			<div>
				{textures.map((texture) => {
					return (
						<div
							key={texture.id}
							className="material-golden texture"
							onClick={() => changeMaterial(texture.id)}
						>
							<img src={texture.avatar} alt={texture.id} />
						</div>
					);
				})}
			</div>
			<DragIndicator showDragIndicator={showDragIndicator} />
		</motion.div>
	);
}

export default MaterialEditor;
