import { textures } from "../config/constants";
import "./components.css";

function MaterialEditor({ changeMaterial }) {
	return (
		<div className="material-editor">
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
	);
}

export default MaterialEditor;
