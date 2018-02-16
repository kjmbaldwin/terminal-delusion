module.exports = function(sequelize, DataTypes) { 
  var Player = sequelize.define("Player", {
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

return Player;
};