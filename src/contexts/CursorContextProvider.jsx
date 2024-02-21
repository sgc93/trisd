import { createContext, useState } from "react";

export const CursorContext = createContext();

export function CursorContextProvider({ children }) {
	const [cursorClass, setCursorClass] = useState("cursor");
	function changeCursorClass(newClass) {
		setCursorClass((cursorClass) => newClass);
	}
	return (
		<CursorContext.Provider value={(cursorClass, changeCursorClass)}>
			{children}
		</CursorContext.Provider>
	);
}
