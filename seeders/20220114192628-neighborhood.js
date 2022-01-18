'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const neighborhoods = [
      {
        zipcode: 14330,
        name: 'Augusta, ME',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 12201,
        name: 'Boston, MA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 13301,
        name: 'Concord, NH',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11111,
        name: 'Hartford, CT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11422,
        name: 'Rosedale, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 10028,
        name: 'Yorkville, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11371,
        name: 'Steinway, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11209,
        name: 'Brooklyn, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 10528,
        name: 'Harrison, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11101,
        name: 'Sunnyside, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 11368,
        name: 'New York, NY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 30303,
        name: 'Atlanta, GA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 32301,
        name: 'Tallahassee, FL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 60629,
        name: 'Chicago, IL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 36104,
        name: 'Montgomery, AL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 40601,
        name: 'Frankfort, KY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 46225,
        name: 'Indianapolis, IN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 50309,
        name: 'Des Moines, IA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 60629,
        name: 'Chicago, IL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 66603,
        name: 'Topeka, KS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 70802,
        name: 'Baton Rouge, LA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 72201,
        name: 'Little Rock, AR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 77449,
        name: 'Houston, TX',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 79936,
        name: 'El Paso, TX',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 75019,
        name: 'Coppell, TX',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 75056,
        name: 'The Colony, TX',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 80206,
        name: 'Denver, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 80016,
        name: 'Aurora, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 80525,
        name: 'Fort Collins, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 80401,
        name: 'Golden, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 80122,
        name: 'Littleton, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 80401,
        name: 'Golden, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 83702,
        name: 'Boise, ID',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 85001,
        name: 'Phoenix, AZ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 90011,
        name: 'Los Angeles, CA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 95814,
        name: 'Sacramento, CA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 96813,
        name: 'Honolulu, HI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        zipcode: 99801,
        name: 'Juneau, AL',
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
