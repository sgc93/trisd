import CustomBtn from "./CustomBtn";
import "./components.css";

function HomeContent() {
	return (
		<div className="home-content">
			<div className="title-1"> 3D DISPLAYER</div>
			<div className="text-2">DISPLAY YOUR 3D MODELS</div>
			<CustomBtn
				type={"filled"}
				title={"try displaying"}
				handleClick={() => {}}
			/>
		</div>
	);
}

export default HomeContent;
