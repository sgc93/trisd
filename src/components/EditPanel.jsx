import { motion } from "framer-motion";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useSnapshot } from "valtio";
import proxyState from "../proxyStore/proxy";
import ColorPicker from "./ColorPicker";

function EditPanel({
	newLogo,
	logoWidth,
	handleLogoUploading,
	updateLogoWidth,
	updateLargerText,
	handleLogoReset,
	largeText,
	smallText,
	largeSize,
	smallSize,
	updateSmallerText,
	resetTextChange,
	updateLargeSize,
	updateSmallSize,
	btnText,
	updateBtnText,
}) {
	const [showPanel, setShowPanel] = useState(false);
	const [editLogo, setEditLogo] = useState(false);
	const [editText, setEditText] = useState(false);
	const [editBtn, setEditBtn] = useState(false);

	const snap = useSnapshot(proxyState);

	function handleOpeningPanel() {
		setShowPanel(true);
	}

	return (
		<div className="edit-panel">
			{showPanel && (
				<motion.div className="edit-panel_box" drag dragElastic={1.18}>
					<div className="close-btn">
						<IoMdClose className="icon" onClick={() => setShowPanel(false)} />
					</div>

					<div className="edit-panel_content glassmorphism">
						<div className="edit-logo">
							<div
								className="tab"
								style={
									editLogo
										? {
												borderBottomRightRadius: "0",
												borderBottomLeftRadius: "0",
										  }
										: {}
								}
								onClick={() => setEditLogo((editLogo) => !editLogo)}
							>
								<span>change and edit logo</span>
								<IoIosArrowDown
									className={`icon icon-small ${
										editLogo ? "icon-rotate-x" : ""
									}`}
								/>
							</div>
							{editLogo && (
								<div className="edit-tab">
									<div className="edit-tab-file">
										<input
											type="file"
											accept="image/*"
											id="logoInput"
											onChange={handleLogoUploading}
										/>
										<label
											htmlFor="logoInput"
											style={
												newLogo
													? { backgroundColor: "var(--color-border2)" }
													: {}
											}
										>
											{newLogo ? newLogo.name : "upload your logo"}
										</label>
										{newLogo && (
											<button onClick={handleLogoReset}>
												<GrPowerReset className="icon icon-small" />
											</button>
										)}
									</div>
									{newLogo && (
										<div className="edit-tab-size">
											<label htmlFor="widthInput">Width: </label>
											<input
												type="number"
												id="widthInput"
												value={logoWidth}
												onChange={(e) => updateLogoWidth(e.target.value)}
											/>
										</div>
									)}
								</div>
							)}
						</div>
						<div className="edit-text">
							<div
								className="tab"
								style={
									editText
										? {
												borderBottomRightRadius: "0",
												borderBottomLeftRadius: "0",
										  }
										: {}
								}
								onClick={() => setEditText((editText) => !editText)}
							>
								<span>change and edit texts</span>
								<IoIosArrowDown
									className={`icon icon-small ${
										editText ? "icon-rotate-x" : ""
									}`}
								/>
							</div>
							{editText && (
								<div className="edit-tab">
									<div className="edit-tab-text">
										<div className="edit-text-large text">
											<div>
												<label htmlFor="largeText">large: </label>
												<input
													id="largeText"
													type="text"
													value={largeText}
													onChange={updateLargerText}
													placeholder="large text content"
												/>
											</div>
											{largeText && (
												<div className="edit-tab-size">
													<label htmlFor="sizeInput">👆 size: </label>
													<input
														type="number"
														id="sizeInput"
														value={largeSize}
														onChange={updateLargeSize}
													/>
												</div>
											)}
										</div>
										<div className="edit-text-small text">
											<div>
												<label htmlFor="smallText">small: </label>
												<input
													type="text"
													value={smallText}
													onChange={updateSmallerText}
													placeholder="Small text content"
												/>
											</div>
											{smallText && (
												<div className="edit-tab-size">
													<label htmlFor="sizeInput">👆size : </label>
													<input
														type="number"
														id="sizeInput"
														value={smallSize}
														onChange={updateSmallSize}
													/>
												</div>
											)}
										</div>

										{editText && (
											<button onClick={resetTextChange}>
												<GrPowerReset className="icon icon-small" />
											</button>
										)}
									</div>
								</div>
							)}
						</div>
						<div className="edit-btn">
							<div
								className="tab"
								style={
									editBtn
										? {
												borderBottomRightRadius: "0",
												borderBottomLeftRadius: "0",
										  }
										: {}
								}
								onClick={() => setEditBtn((editBtn) => !editBtn)}
							>
								<span>customize button</span>
								<IoIosArrowDown
									className={`icon icon-small ${
										editBtn ? "icon-rotate-x" : ""
									}`}
								/>
							</div>
							{editBtn && (
								<div className="edit-tab">
									<div className="edit-tab-btn">
										<div className="edit-btn-text bntText">
											<div>
												<label htmlFor="btnContent">content: </label>
												<input
													id="btnContent"
													type="text"
													value={btnText}
													onChange={updateBtnText}
													placeholder="btn content.."
												/>
											</div>
											<div>
												<label htmlFor="btnContent">
													bg color: {snap.homeBtn}
												</label>
												<ColorPicker purpose={"editTab"} />
											</div>
										</div>

										{editBtn && (
											<button onClick={resetTextChange}>
												<GrPowerReset className="icon icon-small" />
											</button>
										)}
									</div>
								</div>
							)}
						</div>
					</div>
				</motion.div>
			)}
			{!showPanel && (
				<div className="edit-panel_btn" onClick={() => handleOpeningPanel()}>
					<span className="glassmorphism">customize this page</span>
					<MdEdit className="icon icon-large icon-rotate-y" />
				</div>
			)}
		</div>
	);
}

export default EditPanel;
