import HomeCanvas from "../canvas/homeCanvas/HomeCanvas";
import HomeContent from "../components/HomeContent";
import Logo from "../components/Logo";
import "./pages.css";

function HomePage() {
	return (
		<section className="home">
			<div className="home-model">
				<HomeCanvas />
			</div>
			<Logo />
			<HomeContent />
		</section>
	);
}

export default HomePage;
