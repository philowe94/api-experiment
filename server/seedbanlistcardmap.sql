DROP TABLE banlist_card_map;
CREATE TABLE IF NOT EXISTS banlist_card_map (
	banlist_id INT NOT NULL,
	-- Banlist ID
	card_id INT NOT NULL,
	-- Card ID
	status TEXT NOT NULL,
	PRIMARY KEY (banlist_id, card_id),
	FOREIGN KEY (banlist_id) REFERENCES banlists(id),
	FOREIGN KEY (card_id) REFERENCES cards(id)
);


INSERT INTO banlist_card_map (banlist_id, card_id, status)
VALUES (1, 1, 'Limited'),
	(1, 2, 'Limited'),
	(1, 3, 'Limited'),
	(1, 4, 'Limited'),
	(1, 5, 'Limited'),
	(1, 6, 'Limited'),
	(1, 7, 'Limited'),
	(1, 8, 'Limited'),
	(1, 9, 'Limited'),
	(1, 10, 'Limited'),
	(1, 11, 'Semi-Limited'),
	(1, 12, 'Semi-Limited'),
	(2, 1, 'Limited'),
	(2, 2, 'Limited'),
	(2, 3, 'Limited'),
	(2, 4, 'Limited'),
	(2, 5, 'Limited'),
	(2, 6, 'Limited'),
	(2, 7, 'Limited'),
	(2, 8, 'Limited'),
	(2, 9, 'Limited'),
	(2, 10, 'Limited'),
	(2, 11, 'Semi-Limited'),
	(2, 12, 'Semi-Limited'),
	(2, 13, 'Limited'),
	(2, 14, 'Semi-Limited'),
	(2, 15, 'Semi-Limited'),
	(2, 16, 'Semi-Limited');
