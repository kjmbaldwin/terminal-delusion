'use strict';
module.exports = (sequelize, DataTypes) => {
  var enemy_skills = sequelize.define('enemy_skills', {
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
  return enemy_skills;
};