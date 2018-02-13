// Dependencies
var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function(req, res) {
  db.Character.findAll({
    
    //seqeulize stuff
    
  }]
  }).then(function(allCharacter) { //this is probably wrong, pulled if from burgers homework
      var handleBarsObj = {
          characters: allCharacters
      };
      res.render("index", handleBarsObj);
  });
});




module.exports = router;
