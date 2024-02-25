import { motion } from "framer-motion";
import { useState } from "react";
import DragIndicator from "../components/DragIndicator";
import { textures } from "../config/constants";
import "./components.css";
function MaterialEditor({ changeMaterial }) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	const [textureName, setTextureName] = useState("");

	return (
		<motion.div
			className="material-editor"
			drag
			dragElastic={1.18}
			onMouseEnter={() => {
				setShowDragIndicator(true);
			}}
			onMouseLeave={() => {
				setShowDragIndicator(false);
			}}
		>
			<span
				className={`panel-name glassmorphism ${
					showDragIndicator ? "show" : "hide"
				}`}
			>
				{textureName ? textureName : ""} Texture
			</span>
			<div>
				{textures.map((texture) => {
					return (
						<div
							key={texture.id}
							className="material-golden texture"
							onClick={() => changeMaterial(texture.id)}
							onMouseEnter={() => setTextureName(texture.id)}
							onMouseLeave={() => setTextureName("")}
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
