import proxyState from "../proxyStore/proxy";
import CustomBtn from "./CustomBtn";
import "./components.css";

function HomeContent({ largeText, smallText, largeSize, smallSize }) {
	return (
		<div className="home-content">
			<div className="title-1" style={{ fontSize: `${largeSize}rem` }}>
				{" "}
				{largeText}
			</div>
			<div className="text-2" style={{ fontSize: `${smallSize}rem` }}>
				{smallText}
			</div>
			<CustomBtn
				type={"filled"}
				title={"try displaying"}
				handleClick={() => {
					proxyState.inHome = false;
					proxyState.inDisplayer = true;
					console.log(proxyState);
				}}
			/>
		</div>
	);
}

export default HomeContent;
