// Dependencies
var express = require("express");
var router = express.Router();
var models = require("../models");
var path = require("path");


//initial homepage, this is a html page we are sending
router.get("/", function(req,res){
  res.sendfile(path.join(__dirname, "../public/titlepage.html"));
});


//get your character based on the username
router.get("/api/character/:username", function(req, res) {
  
    models.Player.findOne({
      where: {
        username: req.params.username
      },
      include: [models.player_skills]
    }).then(function(result) { //this is probably wrong, pulled if from burgers homework
    //handlebars stuff: 
    // var handleBarsObj = {
      //     characters: allCharacters
      // };
      // res.render("index", handleBarsObj);
      res.json(result);
      console.log(result);
  });
});


//get the enemy based on name
router.get("/api/enemy/:name", function(req, res){
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
