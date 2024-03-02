import { proxy } from "valtio";

export const introProxy = proxy({
	showBtn: false,
	isNotifying: false,
	is3DHome: true,
	is2DHome: false,
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
