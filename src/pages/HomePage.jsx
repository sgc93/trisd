import HomeCanvas from "../canvas/homeCanvas/HomeCanvas";
import Logo from "../components/Logo";
import "./pages.css";

function HomeContent() {
	return <div className="home-content_text">TrisD</div>;
}

function HomePage() {
	return (
		<section className="home">
			<div className="home-model">
				<HomeCanvas />
			</div>
			<div className="home-content">
				<Logo />
			</div>
		</section>
	);
}

export default HomePage;
