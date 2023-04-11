import React from 'react'

export default function banlist() {

	const [banlist, setBanlist] = useState({});
	const [cards, setCards] = useState([]);

	const banlistId = 1;

	useEffect(() => {
		fetch('http://localhost:5001/banlist/${banlistId}')
			.then(response => response.json())
			.then(data => setBanlist(data));
	}, []);

	return (
		<div>
			<h1>{banlist.date}</h1>
			{cards.map(card => (
				<div key={card.id}>
					<h2>{card.name}</h2>
				</div>
			))}
		</div>
	)
}
