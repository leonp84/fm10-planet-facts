import planets from '../assets/data/data.json';
import iconChevron from '../assets/images/icon-chevron.svg';

export default function MobileNavBar({
	handleNavClick,
	setshowMobileNav,
	showMobileNav,
}) {
	return (
		<div className="mobile-main-nav d-flex d-md-none">
			{planets.map((planet, i) => (
				<div
					key={i}
					className="mobile-nav-button"
					onClick={() => handleNavClick(i)}>
					<div className="d-flex align-items-center">
						<div
							className="button-icon"
							id={planets[i].name.toLowerCase()}></div>
						<span className="ms-4">{planet.name}</span>
					</div>
					<img src={iconChevron} alt="Chevron Icon" height={15} />
				</div>
			))}
		</div>
	);
}
