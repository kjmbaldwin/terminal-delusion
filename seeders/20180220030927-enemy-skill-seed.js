'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enemy_skills', [{
      name: "attack",
      attack_scaling: 2,
      random_damage: 2,
      special_effects: null,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('enemy_skills', null, {});
  }
};
