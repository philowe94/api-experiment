import axios from 'axios';


export function queryYGOrgCard(id) {

	const url = `https://db.ygorganization.com/data/card/${id}`;

	axios.get(url, { responseType: 'json' })
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		});
}