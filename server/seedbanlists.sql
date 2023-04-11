DROP TABLE banlists;
CREATE TABLE IF NOT EXISTS banlists (
	id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID
	date TEXT NOT NULL -- Date of banlist
);
INSERT INTO banlists (date)
VALUES 
	('05-01-2002'),
	('07-01-2002');
	