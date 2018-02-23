// Dependencies
var express = require("express");
var router = express.Router();
var models = require("../models");
var path = require("path");


//initial homepage, this is a html page we are sending
router.get("/", function(req,res){
  res.sendfile(path.join(__dirname, "../public/titlepage.html"));
});


router.get("/battle", function(req,res){
  var hbsObject = {
      character_name: "Paul",
      hp: 300
    };
  res.render("index", hbsObject);
});


//get your character based on the username
router.post("/api/character/:username", function(req, res) {
    var username = req.params.username;
    models.Player.findOne({
      where: {
        username: req.params.username
      },
      include: [models.player_skills]
    }).then(function(result) { //this is probably wrong, pulled if from burgers homework
        if(result === null){
           models.Player.create({
            username: username,
            name: "John",
            level: 0,
            max_hp: 25,
            base_attack: 5,
            known_skills: "0",
            }).then(function(dbAdd){
                res.json(dbAdd);
                console.log(dbAdd);
              });
        }
        else {
          res.json(result);
           console.log(result);
        } 
  });  
});
//get the enemy based on name
router.post("/api/enemy/:name", function(req, res){
  db.Enemy.findAll({
    where: {
      name: req.params.name
    },
    include: [models.enemy_skills]
  }).then(function(enemies){
    res.json(enemies);
      console.log(enemies);
  });
});
//this is for testing and needs to be removed
router.post("/api/new", function(req, res){
  models.Player.create({
    username: req.body.username,
    name: req.body.name,
    level: req.body.level,
    max_hp: req.body.max_hp,
    base_attack: req.body.base_attack,
    known_skills: req.body.known_skills
}).then(function(dbAdd){
    res.json(dbAdd);
    console.log(dbAdd);
  });
});

module.exports = router;
