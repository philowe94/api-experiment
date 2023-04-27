import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

const yugipediaUrl = 'https://yugipedia.com/api.php';
const options = {
	action: 'parse',
	page: 'Historic_TCG_Limitations_Chart/2002–2010',
	prop: 'text',
	format: 'json'
};

export function queryYugipediaBanlists() {
	axios.get(yugipediaUrl, { params: options })
		.then(response => {
			const html = response.data.parse.text['*'];

			fs.writeFile('logs/queryYugipediaBanlists.html', html, (err) => {
				if (err) throw err;
				console.log('The file has been saved!');
			});

			const $ = cheerio.load(html);
			const table = $('table.wikitable:eq(1)');
		
			const headers = [];
			const rows = [];

			

		})
		.catch(error => {
			console.log(error);
		});
}
