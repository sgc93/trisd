import { ai, fileIcon, logoShirt, stylishShirt, swatch } from "../assets";

export const EditorTabs = [
	{
		name: "colorpicker",
		icon: swatch,
	},
	{
		name: "filepicker",
		icon: fileIcon,
	},
	{
		name: "aipicker",
		icon: ai,
	},
];

export const FilterTabs = [
	{
		name: "logoShirt",
		icon: logoShirt,
	},
	{
		name: "stylishShirt",
		icon: stylishShirt,
	},
];

export const DecalTypes = {
	logo: {
		stateProperty: "logoDecal",
		filterTab: "logoShirt",
	},
	full: {
		stateProperty: "fullDecal",
		filterTab: "stylishShirt",
	},
};

export const textures = {
	goldenTexture: {
		map: "./textures/golden/MetalGoldPaint002_COL_2K_METALNESS.png",
		normalMap: "./textures/golden/MetalGoldPaint002_NRM_2K_METALNESS.png",
		roughnessMap:
			"./textures/golden/MetalGoldPaint002_ROUGHNESS_2K_METALNESS.png",
		aoMap: "./textures/golden/MetalGoldPaint002_METALNESS_2K_METALNESS.png",
	},
	metalicTexture: {
		map: "./textures/metalic/Metal_006_basecolor.jpg",
		normalMap: "./textures/metalic/Metal_006_normal.jpg",
		roughnessMap: "./textures/metalic/Metal_006_roughness.jpg",
		aoMap: "./textures/metalic/Metal_006_ambientOcclusion.jpg",
	},
};
