const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const cron = require('cron');

const app = express();

app.use(cors());

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

// Root route
app.get('/', (req, res) => {
	res.send('Hello, world!');
});

//Users route
app.get('/users', (req, res) => {
	connection.query('SELECT * FROM users', (err, results, fields) => {
		if (err) {
			console.error('Error executing query:', err.stack);
			return res.status(500).json({ message: 'Internal server error' });
		}
		res.json(results);
	});
});

//Cards route
app.get('/card/all', (req, res) => {
	const cardId = req.params.id;
	connection.query(`
		SELECT *
		FROM cards`
		, [cardId], (err, results, fields) => {
			if (err) {
				console.error('Error executing query:', err.stack);
				return res.status(500).json({ message: 'Card not found' });
			}
			res.json(results);
		}
	);
});

//Card route
app.get('/card/:id', (req, res) => {
	const cardId = req.params.id;
	connection.query(`
		SELECT *
		FROM cards
		WHERE id = ?`
		, [cardId], (err, results, fields) => {
			if (err) {
				console.error('Error executing query:', err.stack);
				return res.status(500).json({ message: 'Card not found' });
			}
			res.json(results);
		}
	);
});

//Banlists route
app.get('/banlist/all', (req, res) => {
	const banlistId = req.params.id;
	connection.query(`
		SELECT *
		FROM banlists`
		, [banlistId], (err, results, fields) => {
			if (err) {
				console.error('Error executing query:', err.stack);
				return res.status(500).json({ message: 'Banlists' });
			}
			res.json(results);
		}
	);
});

//Banlist route
app.get('/banlist/:id', (req, res) => {
	const banlistId = req.params.id;
	connection.query(`
		SELECT *
		FROM banlists
		WHERE id = ?`
		, [banlistId], (err, results, fields) => {
			if (err) {
				console.error('Error executing query:', err.stack);
				return res.status(500).json({ message: 'Banlist not found' });
			}
			res.json(results);
		}
	);
});

//Banlist cards route
app.get('/banlist/:id/cards', (req, res) => {
	const banlistId = req.params.id;
	connection.query(`
		SELECT cards.id, cards.name, banlist_card_map.status
		FROM banlist_card_map
		JOIN cards ON banlist_card_map.card_id = cards.id
		WHERE banlist_card_map.banlist_id = ?`
		, [banlistId], (err, results, fields) => {
			if (err) {
				console.error('Error executing query:', err.stack);
				return res.status(500).json({ message: 'Banlist not found' });
			}
			res.json(results);
		}
	);
});

// const task = cron.schedule('0 0 * * *', () => {
//   console.log('This task will run once a day at midnight');
//   // call your function here
// });

const port = 5001;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
	// task.start();
});