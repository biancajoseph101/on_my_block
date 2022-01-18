'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'password', 'passwordDigest');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'passwordDigest', 'password');
  }
};
