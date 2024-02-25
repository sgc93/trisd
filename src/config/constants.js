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

export const textures = [
	{
		id: "clay",
		texture: {
			map: "./textures/earth/RammedEarth006_COL_2K_METALNESS.png",
			normalMap: "./textures/earth/RammedEarth006_NRM_2K_METALNESS.png",
			roughnessMap:
				"./textures/earth/RammedEarth006_ROUGHNESS_2K_METALNESS.png",
			aoMap: "./textures/earth/RammedEarth006_AO_2K_METALNESS.png",
		},
		avatar: "./textures/earth/clay.png",
	},
	{
		id: "golden",
		texture: {
			map: "./textures/golden/MetalGoldPaint002_COL_2K_METALNESS.png",
			normalMap: "./textures/golden/MetalGoldPaint002_NRM_2K_METALNESS.png",
			roughnessMap:
				"./textures/golden/MetalGoldPaint002_ROUGHNESS_2K_METALNESS.png",
			dispMap: "./textures/golden/MetalGoldPaint002_DISP_2K_METALNESS.png",
		},
		avatar: "./textures/golden/golden.svg",
	},
	{
		id: "metalic",
		texture: {
			map: "./textures/metalic/Metal_006_basecolor.jpg",
			normalMap: "./textures/metalic/Metal_006_normal.jpg",
			roughnessMap: "./textures/metalic/Metal_006_roughness.jpg",
			aoMap: "./textures/metalic/Metal_006_ambientOcclusion.jpg",
		},
		avatar: "./textures/metalic/metal.svg",
	},
	{
		id: "terrazzo",
		texture: {
			map: "./textures/terrazzoSlab/TerrazzoSlab028_COL_2K_METALNESS.png",
			normalMap: "./textures/terrazzoSlab/TerrazzoSlab028_NRM_2K_METALNESS.png",
			roughnessMap:
				"./textures/terrazzoSlab/TerrazzoSlab028_ROUGHNESS_2K_METALNESS.png",
			aoMap: "./textures/terrazzoSlab/TerrazzoSlab028_AO_2K_METALNESS.png",
		},
		avatar: "./textures/terrazzoSlab/terrazzo.png",
	},
];
