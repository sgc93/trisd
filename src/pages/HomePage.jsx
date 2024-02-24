import HomeModel from "../components/HomeModel";
import Logo from "../components/Logo";
import "./pages.css";

function HomeContent() {
	return <div className="home-content_text">TrisD</div>;
}

function HomePage() {
	return (
		<section className="home">
			<div className="home-model">
				<HomeModel />
			</div>
			<div className="home-content">
				<Logo />
				<HomeContent />
			</div>
		</section>
	);
}

export default HomePage;
