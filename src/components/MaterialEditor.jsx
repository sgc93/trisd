import { motion } from "framer-motion";
import { useState } from "react";
import { useSnapshot } from "valtio";
import DragIndicator from "../components/DragIndicator";
import { floorTextures, textures } from "../config/constants";
import { homeProxy } from "../proxyStore/proxy";
import "./components.css";
function MaterialEditor({ changeMaterial, changeTMaterial, style, type }) {
	const [showDragIndicator, setShowDragIndicator] = useState(false);
	const [textureName, setTextureName] = useState("");
	const [textureList, setTextureList] = useState(textures);
	const [floorTList, setFloorTList] = useState(floorTextures);
	const snap = useSnapshot(homeProxy);

	function circleCurrentMaterial(id) {
		if (type === "floor") {
			const newLlist = floorTList.filter((texture) => {
				if (texture.id === id) {
					texture.current = true;
					return texture;
				} else {
					texture.current = false;
					return texture;
				}
			});
			setFloorTList((textureList) => newLlist);
		} else if (type === "object") {
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
	}
	if (type === "floor") {
		return (
			<motion.div
				className="material-editor"
				style={type === "floor" ? { zIndex: 999, top: "3rem" } : {}}
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
					{floorTList &&
						floorTList.map((texture) => {
							return (
								<div
									key={texture.id}
									className={`texture ${
										texture.current ? "texture-current_floor" : ""
									}`}
									onClick={() => {
										changeTMaterial(texture.id);
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
		);
	}

	return (
		snap.showMaterials && (
			<motion.div
				className="material-editor"
				style={{ bottom: "4rem" }}
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
