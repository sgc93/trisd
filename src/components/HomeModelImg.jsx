export default function HomeModelImg({ texture }) {
	if (texture === "") {
		texture = "metalic";
	}
	return (
		<div>
			<img src={`./imgTextures/${texture}.png`} alt={`${texture}_jebena`} />
		</div>
	);
}
