
$(".skill-button").on('click', function(e) {
		animate("../../public/assets/img/wizard-attack2.png");
});

function animate(z) {
	setTimeout(function() {
    $("#wizard").attr("src", z);
    	}, 200);
}

$(".dmg-button").on('click', function(e) {
		monsterAnimate("../../public/assets/img/monster-injured2.png");
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
