import { useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";

export default function Error() {
	const navigateTo = useNavigate();
	const homeError = useRouteError();
	const [showDetail, setShowDetail] = useState();
	console.log(homeError);
	return (
		<section className="error-page">
			<div className="error-message glassmorphism">
				<div>
					<span>No Internet</span>
					<CustomBtn
						type={"outlined"}
						title={showDetail ? "hide details" : "Show details"}
						customStyles={{ fontWeight: "200" }}
						handleClick={() => setShowDetail((showDetail) => !showDetail)}
					/>
				</div>

				<div className={`error ${showDetail ? "showError" : "hideError"}`}>
					<span>{homeError.message || homeError.data} </span>
					<span>
						You Have Lost Your Connection with the Internet World, at least for
						know😊
					</span>
				</div>
				<CustomBtn
					type={"filled"}
					title={"back"}
					handleClick={() => navigateTo("/display")}
					customStyles={{ margin: "-2rem 3rem 0rem 0rem " }}
				/>
			</div>
		</section>
	);
}
