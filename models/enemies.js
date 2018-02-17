module.exports = function(sequelize, DataTypes) { 
  var Enemy = sequelize.define("Enemy", {
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

return Enemy;
};