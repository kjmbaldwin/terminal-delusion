'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enemies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name : {
        type : Sequelize.STRING,
        allowNull: false
      }, 
      level : {
        type : Sequelize.INTEGER,
        allowNull: false
      }, 
      max_hp : {
        type : Sequelize.INTEGER,
        allowNull: false
      }, 
      base_attack : {
        type : Sequelize.INTEGER,
        allowNull: false
      },
      known_skills : {
        type : Sequelize.STRING,
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
    return queryInterface.dropTable('enemies');
  }
};