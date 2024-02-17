import { proxy } from "valtio";

const proxyState = proxy({
	intro: true,
	inHome: false,
	inDisplayer: false,
	inCustomizer: false,
	inMockup: false,
	color: "#EFBD48",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export default proxyState;
