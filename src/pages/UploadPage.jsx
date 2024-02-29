import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import CustomBtn from "../components/CustomBtn";
import Logo from "../components/Logo";
import proxyState from "../proxyStore/proxy";
import "./pages.css";

function UploadPage({ setGlbData }) {
	const navigateTo = useNavigate();
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
			navigateTo("/display");
		} else {
			setIsFalsy(true);
		}
	}

	return (
		<section className="display-page">
			<Logo
				handleClick={() => {
					proxyState.inDisplayer = false;
					proxyState.inHome = true;
				}}
			/>
			<div className="display-content">
				<div className="display-content_text">
					<h1>TRISD [3D]</h1>
					<h4>Upload Your 3D Model and See Though</h4>
				</div>
				<div className="uploader">
					<div className="drag-uploader section glassmorphism">
						<div
							className="dropZone"
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
					<div className="input-uploader section">
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
						<div className="input-uploader_btns">
							<CustomBtn type={"outline"} title={"Change File"} />
							<CustomBtn
								type={"filled"}
								title={"Display"}
								handleClick={handleDisplaying}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default UploadPage;
