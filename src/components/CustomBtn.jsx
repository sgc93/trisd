function CustomBtn({ type, title, customStyles, handleClick }) {
	return (
		<button className={`custom-btn ${type}`} onClick={handleClick}>
			{title}
		</button>
	);
}

export default CustomBtn;
