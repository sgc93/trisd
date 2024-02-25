import { useRef, useState } from "react";
import EditPanel from "../components/EditPanel";
import HomeContent from "../components/HomeContent";
import Logo from "../components/Logo";
import { reader } from "../config/helpers";
import "./pages.css";

import { useSnapshot } from "valtio";
import MaterialEditor from "../components/MaterialEditor";
import proxyState from "../proxyStore/proxy";

function HomePage() {
	const snap = useSnapshot(proxyState);
	const [newLogo, setNewLogo] = useState("");
	const [logoUrl, setLogoUrl] = useState("");
	const [logoWidth, setLogoWidth] = useState(5);

	const [largeText, setLargeText] = useState("3D DISPLAYER");
	const [largeSize, setLargeSize] = useState(5);
	const [smallText, setSmallText] = useState("display your 3d models");
	const [smallSize, setSmallSize] = useState(2);

	const [btnText, setBtnText] = useState("try displaying");

	const [isLogoDraggable, setIsLogoDraggable] = useState(true);
	const [isContentDraggable, setIsContentDraggable] = useState(true);

	const [onlyMaterial, setOnlyMaterial] = useState(false);

	const [texture, setTexture] = useState("");

	const canvas = useRef();

	function handleLogoUploading(e) {
		const file = e.target.files[0];
		try {
			reader(file).then((url) => {
				setNewLogo(file);
				setLogoUrl(url);
			});
		} catch (error) {
			console.log(error);
		}
	}

	function handleLogoReset() {
		setNewLogo("");
		setLogoUrl("");
		setLogoWidth(5);
	}

	function updateLogoWidth(newWidth) {
		if (newWidth) setLogoWidth(newWidth);
		console.log("width: " + newWidth);
	}

	function updateLargerText(e) {
		setLargeText(e.target.value);
	}
	function updateSmallerText(e) {
		setSmallText(e.target.value);
	}

	function resetTextChange() {
		setLargeText("3D DISPLAYER");
		setSmallText("display your 3d models");
	}

	function updateLargeSize(e) {
		setLargeSize(e.target.value);
	}
	function updateSmallSize(e) {
		setSmallSize(e.target.value);
	}

	function updateBtnText(e) {
		setBtnText(e.target.value);
	}

	function resetBtnChange() {
		proxyState.homeBtn = "#484848";
		setBtnText("try displaying");
	}

	function handleLogoDraggable() {
		setIsLogoDraggable((isLogoDraggable) => !isLogoDraggable);
	}

	function handleContentDraggable() {
		setIsContentDraggable((isContentDraggable) => !isContentDraggable);
	}

	function changeMaterial(textureId) {
		setTexture(textureId);
		// handleShotScreen();
	}

	function hideHomeContents(state) {
		setOnlyMaterial(state);
	}

	// function handleShotScreen() {
	// 	if (!canvas.current) return;
	// 	const imgUrl = canvas.current.toDataURL();
	// 	const link = document.createElement("a");

	// 	link.href = imgUrl;
	// 	link.download = "trisD-screenshot.png";
	// 	document.body.appendChild(link);
	// 	link.click();
	// }

	return (
		snap.inHome && (
			<section className="home">
				{/* <div className="home-model">
					<HomeCanvas newTexture={texture} canvas={canvas} />
				</div> */}
				<MaterialEditor
					changeMaterial={changeMaterial}
					hideHomeContents={hideHomeContents}
				/>
				{!onlyMaterial && (
					<>
						<Logo
							url={logoUrl}
							width={logoWidth}
							isLogoDraggable={isLogoDraggable}
						/>
						<HomeContent
							largeText={largeText}
							smallText={smallText}
							largeSize={largeSize}
							smallSize={smallSize}
							btnText={btnText}
							isContentDraggable={isContentDraggable}
						/>
						<EditPanel
							newLogo={newLogo}
							logoWidth={logoWidth}
							handleLogoUploading={handleLogoUploading}
							handleLogoReset={handleLogoReset}
							updateLogoWidth={updateLogoWidth}
							largeSize={largeSize}
							smallSize={smallSize}
							largeText={largeText}
							smallText={smallText}
							updateLargerText={updateLargerText}
							updateSmallerText={updateSmallerText}
							updateLargeSize={updateLargeSize}
							updateSmallSize={updateSmallSize}
							resetTextChange={resetTextChange}
							btnText={btnText}
							updateBtnText={updateBtnText}
							resetBtnChange={resetBtnChange}
							isLogoDraggable={isLogoDraggable}
							handleLogoDraggable={handleLogoDraggable}
							isContentDraggable={isContentDraggable}
							handleContentDraggable={handleContentDraggable}
						/>
					</>
				)}
			</section>
		)
	);
}

export default HomePage;
