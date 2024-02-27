import { useState } from "react";
import { useSnapshot } from "valtio";
import DisplayCanvas from "../canvas/displayCanvas/DisplayCanvas";
import ColorPicker from "../components/ColorPicker";
import Logo from "../components/Logo";
import MaterialEditor from "../components/MaterialEditor";
import ModelController from "../components/ModelController";
import proxyState from "../proxyStore/proxy";

const initialController = {
	zoom: false,
	rotate: false,
	movement: true,
};
function DisplayPage({ glbData }) {
	const snap = useSnapshot(proxyState);
	const [controller, setController] = useState(initialController);
	const [screenshotImg, setScreenshotImg] = useState("");
	const [displayModal, setDisplayModal] = useState(false);
	const [isColorPicker, setIsColorPicker] = useState(false);
	const [texture, setTexture] = useState();

	if (!glbData) glbData = "./sgc.glb";

	function changeFloorMaterial(textureId) {
		setTexture(textureId);
	}

	return (
		<div className="display-canvas_page">
			<Logo
				newClass={"display-logo"}
				handleClick={() => {
					proxyState.inCanvas = false;
					proxyState.inHome = true;
				}}
			/>
			<ModelController
				controller={controller}
				setController={setController}
				setScreenshotImg={setScreenshotImg}
				setDisplayModal={setDisplayModal}
				setIsColorPicker={setIsColorPicker}
			/>
			{isColorPicker && <ColorPicker purpose={"themeChange"} />}
			{displayModal && (
				<div className="screenshot-modal_container">
					<div className="screenshot-modal">
						<div>
							<h4>Your screenshot</h4>
						</div>
						<div className="img-container">
							<img
								src={screenshotImg ? screenshotImg : "/model.png"}
								alt="model_screenshot"
							/>
						</div>
					</div>
				</div>
			)}
			<MaterialEditor type={"floor"} changeTMaterial={changeFloorMaterial} />
			<div className="display-canvas">
				<DisplayCanvas
					controller={controller}
					glbData={glbData}
					texture={texture}
				/>
			</div>
		</div>
	);
}

export default DisplayPage;
