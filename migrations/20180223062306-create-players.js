'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players');
  }
};