function Logo({ newClass, handleClick }) {
	return (
		<div className={`feature-header ${newClass}`} onClick={handleClick}>
			<img src="./logo.png" alt="trisD" />
		</div>
	);
}

export default Logo;
