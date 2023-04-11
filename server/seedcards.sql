DROP TABLE cards;
CREATE TABLE IF NOT EXISTS cards (
	id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID
	name TEXT NOT NULL, -- Name of the card
	cardtype TEXT NOT NULL, -- Monster, Spell, Trap
	level INTEGER, -- 1-12
	attribute TEXT, -- Fire, Water, Earth, Wind, Light, Dark
	type TEXT, -- Spellcaster, Warrior, etc.
	monstercardtype TEXT, -- Normal, Effect, Fusion, etc.
	spelltrapcardtype TEXT, -- Normal, Continuous, Equip, Quick-Play etc.
	ability TEXT, -- Flip, Toon, etc.
	atk INTEGER, -- Attack
	def INTEGER, -- Defense
	description TEXT, -- Flavor text
	effect TEXT, -- Effect text
	pendulumeffect TEXT -- Pendulum Effect text
);
INSERT INTO cards (name, cardtype)
VALUES 
	('Left Arm of the Forbidden One', 'Monster'),
	('Left Leg of the Forbidden One', 'Monster'),
	('Right Arm of the Forbidden One', 'Monster'),
	('Right Leg of the Forbidden One', 'Monster'),
	('Exodia the Forbidden One', 'Monster'),
	('Change of Heart', 'Spell'),
	('Dark Hole', 'Spell'),
	('Monster Reborn', 'Spell'),
	('Pot of Greed', 'Spell'),
	('Raigeki', 'Spell'),
	('Card Destruction', 'Spell'),
	('Swords of Revealing Light	', 'Spell'),
	('Mirror Force', 'Trap'),
	('Sangan', 'Monster'),
	('Witch of the Black Forest', 'Monster'),
	('Heavy Storm', 'Spell');
