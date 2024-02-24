import { useState } from "react";
import EditPanel from "../components/EditPanel";
import HomeContent from "../components/HomeContent";
import Logo from "../components/Logo";
import { reader } from "../config/helpers";
import "./pages.css";

function HomePage() {
	const [newLogo, setNewLogo] = useState("");
	const [logoUrl, setLogoUrl] = useState("");
	const [logoWidth, setLogoWidth] = useState(5);

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

	return (
		<section className="home">
			{/* <div className="home-model">
				<HomeCanvas />
			</div> */}
			<Logo url={logoUrl} width={logoWidth} />
			<HomeContent />
			<EditPanel
				newLogo={newLogo}
				handleLogoUploading={handleLogoUploading}
				handleLogoReset={handleLogoReset}
				updateLogoWidth={updateLogoWidth}
				logoWidth={logoWidth}
			/>
		</section>
	);
}

export default HomePage;
