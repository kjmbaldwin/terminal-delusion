console.log($("#skillButton0").text());
var player = JSON.parse(localStorage.player);
//grab db object from localstorage
var enemy;
getEnemy(player.level);

//add a currenthp stat to localstorage object
var test = {
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
	var skillName = this.value;
	//start primay function on click.
	if(player.current_hp && enemy.current_hp >0) {
	skillClicked(player, enemy);
		if(skillName === "fireball"){
			animateSkill("/assets/img/fireball.png");
		}
		if(skillName === "lightning"){
			animateSkill("/assets/img/lightning.png");
		}
		if(skillName === "ice"){
			animateSkill("/assets/img/ice.png");
		}
	}
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
			injuryCheck(playerObj, enemyObj);
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
function animate(z) {
	setTimeout(function() {
    $("#wizard").attr("src", z);
    	}, 0);
}
function injuryCheck(player, enemy){
	if (player.current_hp > player.max/2) {
		returnAnimate("/assets/img/wizard-healthy2.png");		
	}
	else if (player.current_hp < 1) {
		returnAnimate("/assets/img/wizard-incapacitated.png")
	} 
	else {
		returnAnimate("/assets/img/wizard-injured2.png")
	}
	if (enemy.current_hp > enemy.max_hp/2  ) {
		returnMonsterAnimate("/assets/img/monster-healthy2.png");
	}
	else if (enemy.current_hp < 1) {
		returnMonsterAnimate("/assets/img/monster-incapacitated2.png");
	}  
	else {
		returnMonsterAnimate("/assets/img/monster-injured2.png");
	}
}	
function returnAnimate(z) {
	setTimeout(function() {
    $("#wizard").attr("src", z);
    	}, 1000);
}
function returnMonsterAnimate(z) {
	setTimeout(function() {
    $("#monster").attr("src", z);
    	}, 1000);
}
function monsterAnimate(z) {
	setTimeout(function() {
    $("#monster").attr("src", z);
    	}, 200);
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
function makeTimeStats(z){
	z.current_hp = z.max_hp;
	z.current_attack = z.base_attack;
}
function skillReader(){
	console.log(this.value);
}
function animateSkill(z){
	$("#animationBox").attr("src", z);	
	$('#animationBox').css('visibility', 'visible');
	$('#animationBox').show()
	$("#animationBox").animate({left: '800px'}, 'slow', function () { $(this).removeAttr('style'); });

	   setTimeout(function() {
        $('#animationBox').hide();
        $("#animationBox").attr("src", "");
    }, 500);

}


