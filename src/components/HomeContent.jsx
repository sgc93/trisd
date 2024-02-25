import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import proxyState from "../proxyStore/proxy";
import CustomBtn from "./CustomBtn";
import "./components.css";

function HomeContent({ largeText, smallText, largeSize, smallSize, btnText }) {
	const snap = useSnapshot(proxyState);
	const customStyle = {
		backgroundColor: snap.homeBtn,
		color: getContrastingColor(snap.homeBtn),
	};
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
				title={btnText}
				handleClick={() => {
					proxyState.inHome = false;
					proxyState.inDisplayer = true;
					console.log(proxyState);
				}}
				btnText={btnText}
				customStyles={customStyle}
			/>
		</div>
	);
}

export default HomeContent;
