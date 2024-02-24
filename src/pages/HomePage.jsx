import { useState } from "react";
import EditPanel from "../components/EditPanel";
import HomeContent from "../components/HomeContent";
import Logo from "../components/Logo";
import { reader } from "../config/helpers";
import "./pages.css";

import { useSnapshot } from "valtio";
import HomeCanvas from "../canvas/homeCanvas/HomeCanvas";
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

	return (
		snap.inHome && (
			<section className="home">
				<div className="home-model">
					<HomeCanvas />
				</div>
				<Logo url={logoUrl} width={logoWidth} />
				<HomeContent
					largeText={largeText}
					smallText={smallText}
					largeSize={largeSize}
					smallSize={smallSize}
				/>
				<EditPanel
					newLogo={newLogo}
					handleLogoUploading={handleLogoUploading}
					handleLogoReset={handleLogoReset}
					updateLogoWidth={updateLogoWidth}
					logoWidth={logoWidth}
					updateLargerText={updateLargerText}
					updateSmallerText={updateSmallerText}
					updateLargeSize={updateLargeSize}
					updateSmallSize={updateSmallSize}
					resetTextChange={resetTextChange}
					largeSize={largeSize}
					smallSize={smallSize}
					largeText={largeText}
					smallText={smallText}
				/>
			</section>
		)
	);
}

export default HomePage;
