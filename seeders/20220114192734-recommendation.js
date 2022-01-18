'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recommendations = [
      {
        category: 'Restaurants',
        content:
          'Black Walnut is an amazing local diner with a plethora of options.',
        neighborhoodId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Healthcare',
        content:
          'Dr. Jones at Mercy Hospital is incredible. He has been helping me for years.',
        neighborhoodId: 4,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('recommendations', recommendations);

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
    await queryInterface.bulkDelete('recommendations');

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
