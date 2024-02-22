import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import Logo from "../components/Logo";
import proxyState from "../proxyStore/proxy";

function DisplayPage({ setGlbData }) {
	const snap = useSnapshot(proxyState);
	const [fileName, setFileName] = useState("");
	const [isReady, setIsReady] = useState(false);
	const [status, setStatus] = useState("");
	const [isFalsy, setIsFalsy] = useState(false);
	const animate = useRef();

	useEffect(() => {
		if (fileName) {
			const fileExtension = fileName.split(".").pop().toLowerCase();
			const isGLBFile = fileExtension === "glb";
			if (isGLBFile) {
				setIsReady(true);
			} else {
				setStatus("You have dropped non glb file, try again!");
			}
		}
	}, [fileName]);

	useEffect(() => {
		if (animate.current && isFalsy) {
			animate.current.classList.add("animate");
		}
	}, [isFalsy]);

	async function handleFileUpload(event) {
		setIsReady(false);
		animate.current.classList.remove("animate");
		setIsFalsy(false);
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

	function handleDragEnter(e) {
		e.preventDefault();
		setStatus("Drag file here");
	}

	function handleDragLeave(e) {
		e.preventDefault();
		setStatus("");
	}

	function handleDragOver(e) {
		e.preventDefault();
		setStatus("Drop here");
	}

	async function handleFileDrop(e) {
		e.preventDefault();
		setIsReady(false);
		setIsFalsy(false);
		animate.current.classList.remove("animate");
		setStatus("");

		try {
			const dropedfile = e.dataTransfer.files[0];
			setFileName(dropedfile.name);
			const glb_data = await readFile(dropedfile);
			const blob = new Blob([glb_data], { type: "model/gltf-binary" });
			const url = URL.createObjectURL(blob);
			setGlbData(url);
		} catch (error) {
			console.log(error.message);
		}
	}

	function handleDisplaying() {
		// check file validity
		if (isReady) {
			proxyState.inDisplayer = false;
			proxyState.inCanvas = true;
		} else {
			setIsFalsy(true);
		}
	}

	return (
		snap.inDisplayer && (
			<section className="display_page">
				<Logo
					handleClick={() => {
						proxyState.inDisplayer = false;
						proxyState.inHome = true;
					}}
				/>
				<div className="display-section">
					<div className="display-section1 section">
						<div className="display-section1_text">
							<h1>WELCOME</h1>
							<h4>Display Your 3D Model and See Though</h4>
						</div>
						<div
							className="display-section_dropZone"
							onDragEnter={handleDragEnter}
							onDragLeave={handleDragLeave}
							onDragOver={handleDragOver}
							onDrop={handleFileDrop}
						>
							<h4>
								<span>drag and drop your .glb file here</span>
								<span>{status ? status : ""}</span>
								<span>{isReady && fileName ? fileName : ""}</span>
							</h4>
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
						<div className="display-section_fileName" ref={animate}>
							{fileName
								? isReady
									? fileName
									: `${fileName} in not a glb file,try again!`
								: "No file is selected"}
						</div>
						<div className="display-section_btns">
							<CustomBtn type={"outline"} title={"Change File"} />
							<CustomBtn
								type={"filled"}
								title={"Display"}
								handleClick={handleDisplaying}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	);
}

export default DisplayPage;
