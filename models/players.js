'use strict';
module.exports = function(sequelize, DataTypes) { 
  var player = sequelize.define("player", {
    username : {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    name : {
      type : DataTypes.STRING,
      allowNull: false
    }, 
    level : {
      type : DataTypes.INTEGER,
      allowNull: false
    }, 
    max_hp : {
      type : DataTypes.INTEGER,
      allowNull: false
    }, 
    base_attack : {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    known_skills : {
      type : DataTypes.STRING,
      allowNull: false
    }
  });

  player.associate = function(models) {
    player.hasMany(models.player_skills, {});
  };

return player;
};