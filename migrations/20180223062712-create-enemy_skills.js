'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enemy_skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      attack_scaling: {
        type: DataTypes.INTEGER
      },
      random_damage: {
        type: DataTypes.INTEGER
      },
      special_effects: {
        type: DataTypes.STRING
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
    return queryInterface.dropTable('enemy_skills');
  }
};