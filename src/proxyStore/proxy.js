import { proxy } from "valtio";

const proxyState = proxy({
	inHome: false,
	inDisplayer: true,
	inCustomizer: false,
	inFeaturePage: false,
	inMockup: false,
	inCanvas: false,
	color: "#EFBD48",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export default proxyState;
