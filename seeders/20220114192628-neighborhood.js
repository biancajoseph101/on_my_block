'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const neighborhoods = [
      {
        zipcode: 75019,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 75056,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11422,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 10028,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11371,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11209,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 10528,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11101,
        name: faker.address.county(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('neighborhoods', neighborhoods);
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
    await queryInterface.bulkDelete('neighborhoods');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
