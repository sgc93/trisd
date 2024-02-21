import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContextProvider";

export function useCursor() {
	const result = useContext(CursorContext);
	return result;
}
