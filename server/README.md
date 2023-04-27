# Database Schema

## Yugipedia API

### Get all cards

https://yugipedia.com/api.php?action=query&list=categorymembers&cmtitle=Category:TCG_cards&cmlimit=max&format=json

## Cards Table

Cards have
	- id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID
	-	name TEXT NOT NULL, -- Name of the card
	-	cardtype TEXT NOT NULL, -- Monster, Spell, Trap
	-	level INTEGER, -- 1-12
	- attribute TEXT, -- Fire, Water, Earth, Wind, Light, Dark
	- type TEXT, -- Spellcaster, Warrior, etc.
	- monstercardtype TEXT, -- Normal, Effect, Fusion, etc.
	- spelltrapcardtype TEXT, -- Normal, Continuous, Equip, Quick-Play etc.
	- ability TEXT, -- Flip, Toon, etc.
	- atk INTEGER, -- Attack
	- def INTEGER, -- Defense
	- description TEXT, -- Flavor text
	- effect TEXT, -- Effect text
	- pendulumeffect TEXT -- Pendulum Effect text

## Banlists Table

Banlists have
	-	id INT AUTO_INCREMENT PRIMARY KEY, -- Unique ID
	- date TEXT NOT NULL -- Date of banlist

## BanlistCardMap Table

BanlistCardMaps have
	-	banlist_id INT NOT NULL, -- Banlist ID
	- card_id INT NOT NULL, -- Card ID
	- status TEXT NOT NULL,
	- PRIMARY KEY (banlist_id, card_id),
	- FOREIGN KEY (banlist_id) REFERENCES banlists(id),
	- FOREIGN KEY (card_id) REFERENCES cards(id)