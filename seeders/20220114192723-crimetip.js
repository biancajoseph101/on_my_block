'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const crimetips = [
      {
        title: 'Pointed finger at someone',
        content: 'A guy pointed his fingers at another guy because he was cool',
        neighborhoodId: 7,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Attempted Stealing',
        content: 'A person lied to his friend telling he will pay 50% for the restaurant bill but ended up saying it`s april fool`s day yeeee!!!',
        neighborhoodId: 8,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('crimetips', crimetips);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('crimetips');

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
