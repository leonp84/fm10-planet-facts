export default function Button({ num, text, active = false, handleClick }) {
	return (
		<div onClick={handleClick} className={active ? 'button active' : 'button'}>
			<span className="button-number mx-4">{num}</span>
			<h3>{text}</h3>
		</div>
	);
}
