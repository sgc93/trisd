import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import ColorPicker from "../../components/ColorPicker";
import Loading from "../../components/Loading";
import Logo from "../../components/Logo";
import ModelController from "../../components/ModelController";
import proxyState from "../../proxyStore/proxy";
import DisplayModel from "./DisplayModel";

const initialController = {
	zoom: false,
	rotate: false,
	movement: true,
};

function DisplayCanvas({ glbData }) {
	const snap = useSnapshot(proxyState);
	const [controller, setController] = useState(initialController);
	const [screenshotImg, setScreenshotImg] = useState("");
	const [displayModal, setDisplayModal] = useState(false);
	const [isColorPicker, setIsColorPicker] = useState(false);

	const { zoom, rotate } = controller;
	const screenshot = useRef();

	return (
		snap.inCanvas && (
			<div className="display-canvas_page" style={{ backgroundColor: snap.bg }}>
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
					screenshot={screenshot}
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
				<Suspense fallback={<Loading message={"rendering ..."} />}>
					<div className="display-canvas">
						<Canvas ref={screenshot}>
							<ambientLight intensity={1.5} />
							<spotLight position={[10, 10, 10]} castShadow />
							<OrbitControls enableZoom={zoom} enableRotate={rotate} />
							<DisplayModel glbData={glbData} controller={controller} />
						</Canvas>
					</div>
				</Suspense>
			</div>
		)
	);
}

export default DisplayCanvas;
