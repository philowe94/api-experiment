const axios = require('axios');
const cheerio = require('cheerio');
const tableParser = require('cheerio-tableparser');
const fs = require('fs');

const yugipediaUrl = 'https://yugipedia.com/api.php';
const options = {
	action: 'parse',
	page: 'Historic_TCG_Limitations_Chart/2002–2010',
	prop: 'text',
	format: 'json'
};

function queryYugipediaBanlists() {
	return axios.get(yugipediaUrl, { params: options })
		.then(response => {
			const html = response.data.parse.text['*'];

			const $ = cheerio.load(html);
			const table = $('table.wikitable')[1];
			tableParser($);
			const data = $(table).parsetable(true, true, true);

			return data;

		})
		.catch(error => {
			console.log(error);
		});
}

module.exports = { queryYugipediaBanlists };
