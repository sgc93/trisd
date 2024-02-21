import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import proxyState from "../proxyStore/proxy";

function DisplayPage() {
	const snap = useSnapshot(proxyState);
	return (
		snap.inDisplayer && (
			<section className="display_page">
				<div className="feature-header">
					<img src="./logo.png" alt="trisD" />
				</div>
				<div className="display-section">
					<div className="display-section1 section">
						<div className="display-section1_text">
							<h1>WELCOME</h1>
							<h4>Display Your 3D Model and See Though</h4>
						</div>
						<div className="display-section_dropZone">
							<h4>drag and drop your .glb file here</h4>
						</div>
					</div>
					<div className="display-section2 section">
						<div className="display-section_file">
							<input
								type="file"
								accept="image/*"
								id="glb-loader"
								onChange={(e) => {}}
							/>
							<label htmlFor="glb-loader">upload .glb file</label>
						</div>
						<div className="display-section_fileName">No file is selected</div>
						<div className="display-section_btns">
							<CustomBtn type={"outline"} title={"Change File"} />
							<CustomBtn type={"filled"} title={"Display"} />
						</div>
					</div>
				</div>
			</section>
		)
	);
}

export default DisplayPage;
