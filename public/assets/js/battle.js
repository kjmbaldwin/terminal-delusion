
var test = {
	player: {
		username: "davidmcdougs",
		name: "Umber",
		level: 0,
		max_hp: 25,
		current_hp: 25,
		base_attack: 5,
		known_skills: "0",
		current_attack: 5,
	},
	enemy: {
		name: 'goblin',
		level: 0,
		max_hp: 50,
		current_hp: 50,
		base_attack: 3,
		known_skills: "0",
		// Added current_attack key
		current_attack: 1,
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

var attack = function(attackerObj, skillObj){
	var base_damage = ((skillObj.attack_scaling)/100)*attackerObj.current_attack;
	var random_damage_range = ((skillObj.random_damage)/100)*attackerObj.current_attack;
	
	var randomized_damage =  Math.floor((Math.random() * random_damage_range));
	console.log("i am base_damage "+base_damage+" || I am random_damage "+randomized_damage);
		
		return(Math.round(base_damage + randomized_damage));
};

$(".skill-button").on('click', function(e) {
		animate("/assets/img/wizard-attack2.png");
		var playerDmg = attack(test.player, test.player_skill);
		console.log(playerDmg);
		test.enemy.current_hp = test.enemy.current_hp - playerDmg;
		console.log(test.enemy.current_hp);
		var enemyDmg = attack(test.enemy, test.enemy_skill);
		test.player.current_hp = test.player.current_hp - enemyDmg;
		console.log(test.player.current_hp);
		if (test.player.current_hp > 10) {
			returnAnimate("/assets/img/wizard-healthy2.png");
			if (test.enemy.current_hp < 10 && test.enemy.current_hp > 0) {
				monsterAnimate("/assets/img/monster-injured2.png");
			}
			else if (test.enemy.current_hp <= 0) {
				monsterAnimate("/assets/img/monster-injured2.png");
			}
		}
		else if (test.player.current_hp > 0 && test.player.current_hp < 10) {
			returnAnimate("/assets/img/wizard-injured2.png"); 
		}
		else {
			returnAnimate("/assets/img/wizard-injured2.png");
		}
});

function animate(z) {
	setTimeout(function() {
    $("#wizard").attr("src", z);
    	}, 200);
}

function returnAnimate(z) {
	setTimeout(function() {
    $("#wizard").attr("src", z);
    	}, 1000);
}

$(".dmg-button").on('click', function(e) {
		monsterAnimate("/assets/img/monster-injured2.png");
});

function monsterAnimate(z) {
	setTimeout(function() {
    $("#monster").attr("src", z);
    	}, 200);
}




// $(document).on('click', '.skill-button', function() {
// 		console.log("wtf");
// 		animate("../../public/assets/img/wizard-attack2.png");
// });
