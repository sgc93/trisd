function CustomBtn({ type, title, customStyles, handleClick }) {
	return (
		<button
			className={`custom-btn ${type}`}
			onClick={handleClick}
			style={customStyles}
		>
			{title}
		</button>
	);
}

export default CustomBtn;
