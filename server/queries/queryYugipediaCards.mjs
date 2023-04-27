import axios from 'axios';

const yugipediaUrl = 'https://yugipedia.com/api.php';
const options = {
	action: 'query',
	list: 'search',
	srsearch: 'id',
	srnamespace: '0',
	srlimit: '1',
	format: 'json'
};

export function queryYugipediaCards() {
	axios.get(yugipediaUrl, { params: options })
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		});
}
