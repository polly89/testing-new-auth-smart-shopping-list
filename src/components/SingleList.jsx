import './SingleList.css';

// Takes the name of the shopping list, the path in Firebase to the shopping list, and the set function as variables.
export function SingleList({ name, path, setListPath }) {
	function handleClick() {
		setListPath(path);
	}

	return (
		<li className="SingleList">
			<button onClick={handleClick}>{name}</button>
		</li>
	);
}
