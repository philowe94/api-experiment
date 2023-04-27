const { queryYGOrgCard } = require('./functions/queryYGOrgCard.js');
const { queryYugipediaBanlists } = require('./functions/queryYugipediaBanlists.js');
const { insertYugipediaBanlistTableIntoDatabase } = require('./functions/insertYugipediaBanlistTableIntoDatabase.js');

queryYugipediaBanlists()
	.then(banlistTable => {
		insertYugipediaBanlistTableIntoDatabase(banlistTable);
		
	})
	.catch(error => {
		console.log(error);
	});

