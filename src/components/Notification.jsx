import { introProxy } from "../proxyStore/proxy";
import CustomBtn from "./CustomBtn";
import "./components.css";

export default function Notification({ message, type }) {
	return (
		<div className="notifier-box glassmorphism">
			<span>Notification:-</span> <span className="message">{message}</span>
			<div className="notifier-btns">
				<CustomBtn type={"outlined"} title={"what?"} />
				<CustomBtn
					type={"outlined"}
					title={"continue with 3D"}
					handleClick={() => {
						introProxy.isNotifying = false;
					}}
				/>
				<CustomBtn
					type={"filled"}
					title={"continue with 2D"}
					handleClick={() => {
						introProxy.isNotifying = false;
						introProxy.showBtn = true;
						introProxy.is3DHome = false;
						introProxy.is2DHome = true;
					}}
				/>
			</div>
		</div>
	);
}
