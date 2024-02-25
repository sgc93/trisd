import clayImg from "../../public/textures/earth/clay.png";
import goldenImg from "../../public/textures/golden/golden.svg";
import metalImg from "../../public/textures/metalic/metal.svg";
import terrazzoImg from "../../public/textures/terrazoSlab/terrazzo.png";
import "./components.css";

function MaterialEditor({ changeMaterial }) {
	return (
		<div className="material-editor">
			<div className="material-golden texture">
				<img src={metalImg} alt="metalic" />
			</div>
			<div className="material-golden texture">
				<img src={goldenImg} alt="golden" />
			</div>
			<div className="material-golden texture">
				<img src={clayImg} alt="golden" />
			</div>
			<div className="material-golden texture">
				<img src={terrazzoImg} alt="golden" />
			</div>
		</div>
	);
}

export default MaterialEditor;
