import { motion } from "framer-motion";
import { useState } from "react";
import { useSnapshot } from "valtio";
import DragIndicator from "../components/DragIndicator";
import { textures } from "../config/constants";
import { homeProxy } from "../proxyStore/proxy";
import "./components.css";
function MaterialEditor({ changeMaterial }) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	const [textureName, setTextureName] = useState("");
	const [textureList, setTextureList] = useState(textures);
	const snap = useSnapshot(homeProxy);

	function circleCurrentMaterial(id) {
		const newLlist = textureList.filter((texture) => {
			if (texture.id === id) {
				texture.current = true;
				return texture;
			} else {
				texture.current = false;
				return texture;
			}
		});
		setTextureList((textureList) => newLlist);
	}

	return (
		snap.showMaterials && (
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
					{textureList &&
						textureList.map((texture) => {
							return (
								<div
									key={texture.id}
									className={`texture ${
										texture.current ? "texture-current" : ""
									}`}
									onClick={() => {
										changeMaterial(texture.id);
										circleCurrentMaterial(texture.id);
									}}
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
		)
	);
}

export default MaterialEditor;
