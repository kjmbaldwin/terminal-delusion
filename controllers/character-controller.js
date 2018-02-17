// Dependencies
var express = require("express");
var router = express.Router();
var models = require("../models");

//get your character
router.get("/api/character", function(req, res) {
  console.log("get api route was hit");
    models.players.findAll({}).then(function(player) { //this is probably wrong, pulled if from burgers homework
    //handlebars stuff: 
    // var handleBarsObj = {
      //     characters: allCharacters
      // };
      // res.render("index", handleBarsObj);
      res.json(player);
      console.log(player);
  });
});

//get the enemy 

router.get("/api/enemy/:id", function(req, res){
  db.Enemy.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(enemies){
    console.log(enemies);
  });
});


//this is for testing and needs to be removed
router.post("/api/new", function(req, res){
  models.players.create({
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
