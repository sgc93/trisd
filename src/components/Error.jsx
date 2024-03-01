import { useState } from "react";
import { useRouteError } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";

export default function Error() {
	const homeError = useRouteError();
	const [showDetail, setShowDetail] = useState();
	console.log(homeError);
	return (
		<section className="error-page">
			<div className="error-message glassmorphism">
				<span>{homeError.message || homeError.data} </span>
				<CustomBtn
					type={"outlined"}
					title={showDetail ? "hide details" : "see details"}
					customStyles={{ fontWeight: "200" }}
					handleClick={() => setShowDetail((showDetail) => !showDetail)}
				/>
			</div>
		</section>
	);
}
