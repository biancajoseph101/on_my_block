'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = [
      {
        content: 'I totally agree.',
        neighborhoodId: 1,
        userId: 4,
        crimeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'This is so true.',
        neighborhoodId: 8,
        userId: 4,
        crimeId: 11,
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

