'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recommendations = [
      {
        category: 'Parks and Recreation',
        content:
          'Felix Park is a great, safe place for families and friends to gather for picnics and events',
        neighborhoodId: 7,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Cardiology',
        content:
          'Doctor Chauvin is a reputable Cardiologist with 35 years of experience at Mercy Hospital.',
        neighborhoodId: 6,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Pharmacy',
        content: 'Humana Pharmacy is quick and efficient.',
        neighborhoodId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Fitness',
        content:
          'LA Fitness is open 24/7 and has clean facilities with exceptional employees.',
        neighborhoodId: 4,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        category: 'Arts and Culture',
        content:
          'The Perot Museum is an impressive and expansive place for children to learn and admire the frequently updated museum.',
        neighborhoodId: 6,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Custom Clothing',
        content:
          'Taylor Made is a great place for all of your custom clothing needs.',
        neighborhoodId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Childcare',
        content:
          'Sunshine Daycare is reasonably prices with trustworthy caretakers for all of your children when you are busy and need childcare.',
        neighborhoodId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Family Medicine',
        content:
          'Salas Family Medicine is the most popular place with friendly customer service.',
        neighborhoodId: 7,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Restaurants',
        content:
          'Black Walnut is an amazing local diner with a plethora of options.',
        neighborhoodId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Healthcare',
        content:
          'Dr. Jones at Mercy Hospital is incredible. He has been helping me for years.',
        neighborhoodId: 13,
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

