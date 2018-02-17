
var test = {
	player: {
		username: "davidmcdougs",
		name: "Umber",
		level: 0,
		max_hp: 25,
		base_attack: 5,
		known_skills: "0",
		current_attack: 5,
	},
	enemy: {
		name: 'goblin',
		level: 0,
		max_hp: 50,
		base_attack: 3,
		known_skills: "0",
	},
	player_skill: {
		name: 'player_attack',
		attack_scaling: 50,
		random_damage: 100,
		special_effects: 'none',
	},
	enemy_skill: {
		name: 'enemy_attack',
		attack_scaling: 100,
		random_damage:	50,
		special_effects: 'none',
	}

};

module.exports = test;



