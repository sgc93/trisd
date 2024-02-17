import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSnapshot } from "valtio";
import CanvasModel from "../canvas/Canvas";
import ColorPicker from "../components/ColorPicker";
import CustomBtn from "../components/CustomBtn";
import FilePicker from "../components/FilePicker";
import Tab from "../components/Tab";
import { DecalTypes, EditorTabs, FilterTabs } from "../config/constants";
import { reader } from "../config/helpers";
import { fadeAnimation, slideAnimation } from "../config/motion";
import proxyState from "../proxyStore/proxy";

function CustomizerPage() {
	const snap = useSnapshot(proxyState);
	const [file, setFile] = useState("");
	const [activeEditorTab, setActiveEditorTab] = useState("");
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true,
		styleShirt: false,
	});

	// show tab content depending on the acive tab
	function generateTabContent() {
		switch (activeEditorTab) {
			case "colorpicker":
				return <ColorPicker />;
			case "filepicker":
				return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
			default:
				return null;
		}
	}

	function handleActiveFilterTab(tabName) {
		switch (tabName) {
			case "logoShirt":
				proxyState.isLogoTexture = !activeFilterTab[tabName];
				break;
			case "stylishShirt":
				proxyState.isFullTexture = !activeEditorTab[tabName];
				break;
			default:
				proxyState.isFullTexture = true;
				proxyState.isLogoTexture = false;
				break;
		}

		setActiveFilterTab((prevState) => {
			return { ...prevState, [tabName]: !prevState[tabName] };
		});
	}

	function handleDecals(type, result) {
		const decalType = DecalTypes[type];
		proxyState[decalType.stateProperty] = result;

		if (!activeFilterTab[decalType.filterTab]) {
			handleActiveFilterTab(decalType.filterTab);
		}
	}

	function readFile(type) {
		reader(file).then((result) => {
			handleDecals(type, result);
			setActiveEditorTab("");
		});
	}

	return (
		<AnimatePresence>
			{!snap.inHome && (
				<>
					<motion.div
						{...slideAnimation("left")}
						className="absolute top-0 left-0 z-10"
					>
						<div className="flex items-center min-h-screen">
							<div className="editortabs-container tabs">
								{EditorTabs.map((tab) => (
									<Tab
										key={tab.name}
										tab={tab}
										handleClick={() => setActiveEditorTab(tab.name)}
									/>
								))}
								{generateTabContent()}
							</div>
						</div>
					</motion.div>

					<motion.div
						className="absolute z-10 top-5 right-5"
						{...fadeAnimation}
					>
						<CustomBtn
							type={"filled"}
							title={"Go Back"}
							handleClick={() => (proxyState.inHome = true)}
							customStyles={"w-fit px-4 font-bold text-sm "}
						/>
					</motion.div>

					<motion.div
						{...slideAnimation("left")}
						className="filtertabs-container"
					>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								handleClick={() => handleActiveFilterTab(tab.name)}
								isFilterTab
								isActiveTab={activeFilterTab[tab.name]}
							/>
						))}
					</motion.div>
					<CanvasModel />
				</>
			)}
		</AnimatePresence>
	);
}

export default CustomizerPage;
