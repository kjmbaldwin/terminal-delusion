var player = JSON.parse(localStorage.player);
//grab db object from localstorage
var enemy;
getEnemy(player.level);

//add a currenthp stat to localstorage object

var test = {
	// player: {
	// 	username: "davidmcdougs",
	// 	name: "Umber",
	// 	level: 0,
	// 	max_hp: 25,
	// 	current_hp: 25,
	// 	base_attack: 5,
	// 	known_skills: "0",
	// 	current_attack: 5,
	// },
	// enemy: {
	// 	name: 'goblin',
	// 	level: 0,
	// 	max_hp: 50,
	// 	current_hp: 50,
	// 	base_attack: 3,
	// 	known_skills: "0",
	// 	// Added current_attack key
	// 	current_attack: 3,
	// },
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


$(".skill-button").on('click', function(e) {
	//start primay function on click.
		skillClicked(player, enemy);
});

//define functions now
function skillClicked(playerObj, enemyObj){
	//primary function after player clicks a skill button
			animate("/assets/img/wizard-attack2.png");
				var playerDmg = attack(playerObj, test.player_skill);
				enemyObj.current_hp = enemyObj.current_hp - playerDmg;
			var enemyDmg = attack(enemyObj, test.enemy_skill);
			monsterAnimate("/assets/img/monster-attack2.png");
		playerObj.current_hp = playerObj.current_hp - enemyDmg;
		// console.log("I am current player hp "+playerObj.current_hp);
		if (playerObj.current_hp > 10) {
			returnAnimate("/assets/img/wizard-healthy2.png");
			if (enemyObj.current_hp > 10 ) {
				returnMonsterAnimate("/assets/img/monster-healthy2.png");
			}
			else if (enemyObj.current_hp <= 0) {
				monsterAnimate("/assets/img/monster-injured2.png");
			}
		}
		else if (playerObj.current_hp > 0 && playerObj.current_hp < 10) {
			returnAnimate("/assets/img/wizard-injured2.png"); 
		}
		else {
			returnAnimate("/assets/img/wizard-injured2.png");
		}
		enemyBarCheck(enemy);
		playerBarCheck(player);
}
var attack = function(attackerObj, skillObj){
	var base_damage = ((skillObj.attack_scaling)/100)*attackerObj.current_attack;
	var random_damage_range = ((skillObj.random_damage)/100)*attackerObj.current_attack;
	
	var randomized_damage =  Math.floor((Math.random() * random_damage_range));
	console.log("i am base_damage "+base_damage+" || I am random_damage "+randomized_damage);
		
		return(Math.round(base_damage + randomized_damage));
};
function makeTimeStats(z){
	z.current_hp = z.max_hp;
	z.current_attack = z.base_attack;
}
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
function monsterAnimate(z) {
	setTimeout(function() {
    $("#monster").attr("src", z);
    	}, 200);
}
function returnMonsterAnimate(z) {
	setTimeout(function() {
    $("#monster").attr("src", z);
    	}, 1000);
}
function enemyBarCheck(z) {
	if (z.current_hp < 1){
		$('#console').text("you win!");
		}
			newprogress=0;
			newprogress = (z.current_hp/z.max_hp)*100;
			// console.log(newprogress);
			$('#enemyBar').width(newprogress + "%").attr('aria-valuenow', newprogress);
}
function playerBarCheck(z) {
	if(z.current_hp < 1){
		$('#console').text('you lose :(');
	}
		newprogress =0;
		newprogress = (z.current_hp/z.max_hp)*100;
	// console.log("i am player new progress "+newprogress);
	$('#playerBar').width(newprogress + "%").attr('aria-valuenow', newprogress);
}
function getEnemy(player_level) {
	var enemyName = "";
	switch(player.level){
		case 0: enemyName = "ogre";
		break;
	}
	$.post("/api/enemy/"+enemyName).done(function(returnedData){
		 enemy = returnedData;
		 console.log("i am enemy "+ enemy);
			makeTimeStats(player);
			makeTimeStats(enemy);
			setBanners(player, enemy);
	});
}
function setBanners(player, enemy) {
	$("#heroBanner").text(player.name);
	$("#enemyBanner").text(enemy.name);
}