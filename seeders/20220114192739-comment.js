'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = [
      {
        content: 'I totally agree.',
        neighborhoodId: 28,
        userId: 10,
        crimeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'This is so true.',
        neighborhoodId: 40,
        userId: 11,
        crimeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('comments', comments);

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
    await queryInterface.bulkDelete('comments');

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
