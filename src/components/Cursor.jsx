import { useEffect, useRef } from "react";

function Cursor() {
	const cursor = useRef();

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			const cursorPosX = e.clientX;
			const cursorPosY = e.clientY;

			if (cursor.current !== null) {
				cursor.current.style.left = `${cursorPosX}px`;
				cursor.current.style.top = `${cursorPosY}px`;
			}
		});
	});
	return <div ref={cursor} className="cursor"></div>;
}

export default Cursor;
