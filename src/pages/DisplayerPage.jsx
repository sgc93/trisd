import { useState } from "react";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import proxyState from "../proxyStore/proxy";

function DisplayPage({ setGlbData }) {
	const snap = useSnapshot(proxyState);
	const [fileName, setFileName] = useState("");
	// useEffect(() => {
	// 	return () => {
	// 		if (glbData) {
	// 			URL.revokeObjectURL(glbData);
	// 		}
	// 	};
	// }, []);

	async function handleFileUpload(event) {
		const file = event.target.files[0];
		if (!file) return;

		setFileName(file.name);

		try {
			const glb_data = await readFile(file);
			const blob = new Blob([glb_data], { type: "model/gltf-binary" });
			const url = URL.createObjectURL(blob);
			setGlbData(url);
		} catch (error) {
			console.log(error.message);
		}
	}

	function readFile(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader(); // create file loader

			reader.onload = (event) => {
				resolve(event.target.result); // read result
			};

			reader.onerror = (error) => {
				reject(error);
			};

			reader.readAsArrayBuffer(file);
		});
	}

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
								accept=".glb"
								id="glb-loader"
								onChange={handleFileUpload}
							/>
							<label htmlFor="glb-loader">
								{fileName ? "Change File" : "upload .glb file"}
							</label>
						</div>
						<div className="display-section_fileName">
							{fileName ? fileName : "No file is selected"}
						</div>
						<div className="display-section_btns">
							<CustomBtn type={"outline"} title={"Change File"} />
							<CustomBtn
								type={"filled"}
								title={"Display"}
								handleClick={() => {
									proxyState.inDisplayer = false;
									proxyState.inCanvas = true;
								}}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	);
}

export default DisplayPage;
