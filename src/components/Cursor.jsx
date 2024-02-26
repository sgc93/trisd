import { useEffect, useRef } from "react";
import "./components.css";

function Cursor({ cursorClass }) {
	const cursor = useRef();
	const cursorBox = useRef();

	useEffect(() => {
		function moveCursor(e) {
			const cursorPosX = e.clientX;
			const cursorPosY = e.clientY;

			if (cursor.current && cursorBox.current) {
				cursor.current.style.left = `${cursorPosX}px`;
				cursor.current.style.top = `${cursorPosY}px`;

				cursorBox.current.style.left = `${cursorPosX + 20}px`;
				cursorBox.current.style.top = `${cursorPosY + 20}px`;
			}
		}
		window.addEventListener("mousemove", moveCursor);
	});
	return (
		<>
			<div className="cursor-box" ref={cursorBox}></div>
			<div ref={cursor} className={`cursor ${cursorClass}`}></div>
		</>
	);
}

export default Cursor;
