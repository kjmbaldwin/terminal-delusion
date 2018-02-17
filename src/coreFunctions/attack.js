var test = require("../test/test.js");

//function should take attacker  and skill object and return the total damage dealt.
//if you need a defense effect, just reduce the output of this function by desired amount.


var attack = function(attackerObj, skillObj){
	var base_damage = ((skillObj.attack_scaling)/100)*attackerObj.current_attack;
	var random_damage_range = ((skillObj.random_damage)/100)*attackerObj.current_attack;
	
	var randomized_damage =  Math.floor((Math.random() * random_damage_range));
	console.log("i am base_damage "+base_damage+" || I am random_damage "+randomized_damage);
		
		return(Math.round(base_damage + randomized_damage));
};

module.exports = attack;

