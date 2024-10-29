import { useState } from 'react';
import './assets/css/style.css';
import iconSource from './assets/images/icon-source.svg';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import MobileNavbar from './components/mobile-navbar.jsx';
import Button from './components/button.jsx';
import planets from './assets/data/data.json';

function App() {
	const [currentPlanet, setCurrentPlanet] = useState(0);
	const [showPlanetImage, setShowPlanetImage] = useState('planet');
	const [showPlanetInfo, setShowPlanetInfo] = useState('overview');
	const [showGeology, setShowGeology] = useState(false);
	const [showMobileNav, setshowMobileNav] = useState(false);

	// console.log(showPlanetImage);
	function handleNavClick(i) {
		setCurrentPlanet(i);
		setshowMobileNav(false);
	}

	function overviewClicked() {
		setShowPlanetImage('planet');
		setShowPlanetInfo('overview');
		setShowGeology(false);
	}

	function internalClicked() {
		setShowPlanetImage('internal');
		setShowPlanetInfo('structure');
		setShowGeology(false);
	}

	function geologyClicked() {
		setShowPlanetImage('planet');
		setShowPlanetInfo('geology');
		setShowGeology(true);
	}

	return (
		<div className={planets[currentPlanet].name.toLowerCase()}>
			<Navbar
				handleNavClick={handleNavClick}
				setshowMobileNav={setshowMobileNav}
				showMobileNav={showMobileNav}
			/>
			{showMobileNav && <MobileNavbar handleNavClick={handleNavClick} />}
			<div className="mobile-inner-nav d-flex d-md-none">
				<h4 onClick={overviewClicked}>overview</h4>
				<h4 onClick={internalClicked}>structure</h4>
				<h4 onClick={geologyClicked}>surface geology</h4>
			</div>
			<main className="mt-4">
				<div className="outer-wrapper">
					<div className="position-relative">
						<img
							id="planet-image"
							src={planets[currentPlanet].images[showPlanetImage]}
							alt="Mercury"
							className="my-5"
							width={400}
						/>
						{showGeology && (
							<img
								id="geology-image"
								src={planets[currentPlanet].images.geology}
								alt="Mercury"
								className="my-5"
							/>
						)}
					</div>
					<div className="wrapper">
						<div className="planet-text">
							<div>
								<h1 className="mb-4">{planets[currentPlanet].name}</h1>
								<p>{planets[currentPlanet][showPlanetInfo].content}</p>
								<span className="source">
									<br />
									Source :{' '}
									<a
										href={planets[currentPlanet][showPlanetInfo].source}
										target="_blank">
										Wikipedia
										<img className="ms-1" src={iconSource} alt="Wikipedia" />
									</a>
								</span>
							</div>
						</div>
						<div className="d-none d-md-block">
							<div>
								<Button
									handleClick={overviewClicked}
									updateString="planetsss"
									num="01"
									text="overview"
									active={showPlanetInfo === 'overview' ? true : false}
								/>
							</div>
							<Button
								handleClick={internalClicked}
								num="02"
								text="internal structure"
								active={showPlanetInfo === 'structure' ? true : false}
							/>
							<Button
								handleClick={geologyClicked}
								num="03"
								text="surface geology"
								active={showGeology ? true : false}
							/>
						</div>
					</div>
				</div>
				<div className="box-wrapper">
					<div className="info-box">
						<span>rotation time</span>
						<h2>{planets[currentPlanet].rotation}</h2>
					</div>
					<div className="info-box">
						<span>radius</span>
						<h2>{planets[currentPlanet].revolution}</h2>
					</div>
					<div className="info-box">
						<span>radius</span>
						<h2>{planets[currentPlanet].radius}</h2>
					</div>
					<div className="info-box">
						<span>radius</span>
						<h2>{planets[currentPlanet].temperature}</h2>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
