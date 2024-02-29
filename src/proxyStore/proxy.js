import { proxy } from "valtio";

export const introProxy = proxy({
	showBtn: false,
});

const proxyState = proxy({
	inIntro: true,

	bg: "#101010",
	homeBtn: "#484848",
});

export const homeProxy = proxy({
	showMaterials: true,
	showEditPanel: false,
});

export default proxyState;
