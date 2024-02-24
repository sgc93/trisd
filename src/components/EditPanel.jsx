import { motion } from "framer-motion";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

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
}) {
	const [showPanel, setShowPanel] = useState(false);
	const [editLogo, setEditLogo] = useState(false);
	const [editText, setEditText] = useState(false);

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
						<div className="tab edit-btn">
							<span>changeLogo</span>
							<IoIosArrowDown className="icon icon-small" />
						</div>
						<div className="tab edit-them">
							<span>changeLogo</span>
							<IoIosArrowDown className="icon icon-small" />
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
