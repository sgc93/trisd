import { useState } from "react";
import EditPanel from "../components/EditPanel";
import HomeContent from "../components/HomeContent";
import Logo from "../components/Logo";
import { reader } from "../config/helpers";
import "./pages.css";

function HomePage() {
	const [newLogo, setNewLogo] = useState("");
	const [logoUrl, setLogoUrl] = useState("");

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
	}
	return (
		<section className="home">
			{/* <div className="home-model">
				<HomeCanvas />
			</div> */}
			<Logo url={logoUrl} />
			<HomeContent />
			<EditPanel
				newLogo={newLogo}
				handleLogoUploading={handleLogoUploading}
				handleLogoReset={handleLogoReset}
			/>
		</section>
	);
}

export default HomePage;
