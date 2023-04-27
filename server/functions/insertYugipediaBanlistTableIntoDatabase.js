const express = require('express');
const mysql = require('mysql2');


// Create a connection to the database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'testuser',
	password: 'testpass',
	database: 'ygobanlist'
});

// Test the connection

connection.connect((err) => {
	if (err) {
		console.error('Error connecting to database:', err.stack);
		return;
	}
	console.log('Connected to database as id', connection.threadId);
});
// Purpose: To insert the Yugipedia banlist table into the database
function insertYugipediaBanlistTableIntoDatabase(parsedTable) {

	//parsedTable[column][row]
	//loop through row 2 of the table

	console.log('HERE');

	for (let i = 1; i < parsedTable.length; i++) {
		console.log('HERE2');

		connection.query(`
				INSERT INTO banlists (date)
				VALUES (?)`
			, `${parsedTable[i][1]}-${parsedTable[i][0]}`, (err, results, fields) => {

				console.log('HERE3');

				if (err) {
					console.error('Error executing query:', err.stack);
				}
			}
		);
	}
}

module.exports = { insertYugipediaBanlistTableIntoDatabase };