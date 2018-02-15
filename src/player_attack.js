var test_skill =  {
name: 'player_attack',
attack_scaling: 50,
random_damage: 100,
special_effects: 'none',
};
var test_player = {
username: "davidmcdougs",
name: "Umber",
level: 0,
max_hp: 25,
base_attack: 5,
known_skills: "0",
current_attack: 5,
};


console.log(test_player);
console.log(test_skill);

var playerAttack = function(skill){
	var base_damage = ((skill.attack_scaling)/100)*test_player.current_attack;
	var random_damage_range = ((skill.random_damage)/100)*test_player.current_attack;
	console.log("i am base_damage "+base_damage+" || I am random_damage "+random_damage_range);
	randomized_damage =  Math.floor((Math.random() * random_damage_range);
	//function should take base stats and skill and return the total damage dealt
};
var enemyAttack = function(){
	//function should take base stats and skill and and return total damage dealt
};
var levelUp = function() {
	//function should modify player stats according to a formula, then push the changes to a database.
};


playerAttack(test_skill);
