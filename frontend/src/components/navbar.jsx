import planets from '../assets/data/data.json';
import menuImage from '../assets/images/icon-hamburger.svg';

export default function NavBar({
	handleNavClick,
	setshowMobileNav,
	showMobileNav,
}) {
	return (
		<nav>
			<h1 className="py-2">The Planets</h1>
			<div className="d-none d-md-block">
				{planets.map((planet, i) => (
					<a className="mx-2" key={i} onClick={() => handleNavClick(i)}>
						{planet.name}
					</a>
				))}
			</div>
			<img
				id="hamburger-menu"
				onClick={() => setshowMobileNav(!showMobileNav)}
				className="d-block d-md-none"
				src={menuImage}
				alt="Hamburger Menu"
			/>
		</nav>
	);
}
