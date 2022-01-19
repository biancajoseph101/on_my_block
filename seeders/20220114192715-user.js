'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        username: 'biancajoseph',
        passwordDigest: 'crazypassword',
        email: 'bianca@gmail.com',
        neighborhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'froglover',
        passwordDigest: 'frogpassword',
        email: 'frog@gmail.com',
        neighborhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'coco',
        passwordDigest: 'coco2',
        email: 'coco@gmail.com',
        neighborhoodId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jerry1',
        passwordDigest: 'jerry1',
        email: 'jerry@gmail.com',
        neighborhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'felipe',
        passwordDigest: 'felipe3',
        email: 'felipe@gmail.com',
        neighborhoodId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert('users', users);
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
    await queryInterface.bulkDelete('users');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
