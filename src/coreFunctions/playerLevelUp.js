var test = require("../test/test.js");
//inccreases the imputed player's base stats by the specified amount.
//should make changes to database afterwards.
//currently only adds one skill for level 1.

console.log(test.player);
var playerLevelUp = function(player) {
	player.level ++;
	player.max_hp = player.max_hp + 5;
	player.base_attack = player.base_attack + 3;
	switch(player.level) {
		case 1: player.known_skills = player.known_skills + ",1";
		break;
		//create more cases here to add to the skills string.
	}
};
module.exports = playerLevelUp;