const Header2 = () => {
	const List = [
		{ name: "banglore" },
		{ name: "pune" },
		{ name: "Kolkata" },
		{ name: "Mumbai" },
		{ name: "Bhopal" },
		{ name: "Delhi" },
		{ name: "Lucknow" },
		{ name: "Indore" },
	];

	return (
		<div>
			<div className="flex px-10 py-2 bg-gray-200 justify-between">
				{List.map((elem) => {
					return <span key={elem.name}>{elem.name}</span>;
				})}
			</div>
		</div>
	);
};

export default Header2;
