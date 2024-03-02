import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayCanvas from "../canvas/displayCanvas/DisplayCanvas";
import ColorPicker from "../components/ColorPicker";
import Logo from "../components/Logo";
import MaterialEditor from "../components/MaterialEditor";
import ModelController from "../components/ModelController";
import UploadPage from "./UploadPage";

const initialController = {
	zoom: false,
	rotate: false,
	movement: true,
};
function DisplayPage() {
	const navigateTo = useNavigate();
	const [glbData, setGlbData] = useState("");
	const [displayUploader, setDisplayUploader] = useState(true);

	const [controller, setController] = useState(initialController);
	const [isColorPicker, setIsColorPicker] = useState(false);
	const [texture, setTexture] = useState();

	function changeFloorMaterial(textureId) {
		setTexture(textureId);
	}

	function displayModel(glb) {
		setGlbData((glbData) => glb);
	}

	return (
		<div className="display-canvas_page">
			{displayUploader && (
				<UploadPage
					setDisplayUploader={setDisplayUploader}
					displayModel={displayModel}
				/>
			)}
			<Logo
				newClass={"display-logo"}
				handleClick={() => {
					navigateTo("/");
				}}
			/>
			<ModelController
				controller={controller}
				setController={setController}
				setIsColorPicker={setIsColorPicker}
				setDisplayUploader={setDisplayUploader}
			/>
			{isColorPicker && <ColorPicker purpose={"themeChange"} />}
			<MaterialEditor type={"floor"} changeTMaterial={changeFloorMaterial} />
			<div className="display-canvas">
				{glbData && (
					<DisplayCanvas
						controller={controller}
						glbData={glbData}
						texture={texture}
					/>
				)}
			</div>
		</div>
	);
}

export default DisplayPage;
