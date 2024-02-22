import { proxy } from "valtio";

const proxyState = proxy({
	inHome: true,
	inDisplayer: false,
	inCustomizer: false,
	inFeaturePage: false,
	inMockup: false,
	inCanvas: false,
	color: "#EFBD48",
	bg: "#101010",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export default proxyState;
