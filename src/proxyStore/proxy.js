import { proxy } from "valtio";

const proxyState = proxy({
	inHome: false,
	inDisplayer: false,
	inCustomizer: false,
	inFeaturePage: true,
	inMockup: false,
	color: "#EFBD48",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export default proxyState;
