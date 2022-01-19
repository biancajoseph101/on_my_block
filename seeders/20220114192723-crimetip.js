'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const crimetips = [
      {
        title: `Theft`,
        content: `Someone broke into my car and stole my iPhone charger on Commerce St.`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Vandalism`,
        content: `A group of teenagers graffiti spray painted the statue at Fellowship High School.`,
        neighborhoodId: 8,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Other`,
        content: `A suspicious looking man has been seen looking into cars every night on Trace Avenue.`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Assault`,
        content: `Roger Jones attacked me with a shoe at 711 gas station at 4:45 pm on Sunday`,
        neighborhoodId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Burglary`,
        content: `Someone stole my bag with my credit cards and ID in the parking lot of Vista Ridge Mall`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Attempted Stealing',
        content: `Someone attempted to steal my purse in the parking lot of the public library.`,
        neighborhoodId: 8,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Arson',
        content: `On Friday the 13th, two young boys started a fire in the trail by Cypress Street`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `DUI`,
        content: `Frederick Murphy was arrested for driving drunk and crashing into a tree at 2 AM on Thursday, January 11th.`,
        neighborhoodId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Stalking`,
        content: `A guy has been following me on my daily jog at Andy Brown park, there have been multiple reports about this in the neighborhood`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Robbery`,
        content:
          'A person lied to his friend telling he will pay 50% for the restaurant bill but ended up saying its april fools day',
        neighborhoodId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Suspicious Activity',
        content: `A guy entered 'Walmart with a mask and was intimidating other customers`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Break In`,
        content: `Someone broke into our house on Freight Street on Saturday night when we were out of town and stole our TV, jewelry and other valuables`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Suspicious Activity`,
        content: `There have been numerous reports of stolen catalytic converters all throughout the neighborhood`,
        neighborhoodId: 7,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: `Robbery`,
        content: `Five old men were attacked and robbed near Pearl Street.`,
        neighborhoodId: 7,
        userId: 3,
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

