'use strict';
module.exports = (sequelize, DataTypes) => {
  var player_skills = sequelize.define('player_skills', {
    name: DataTypes.STRING,
    attack_scaling: DataTypes.INTEGER,
    random_damage: DataTypes.INTEGER,
    special_effects: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return player_skills;
};