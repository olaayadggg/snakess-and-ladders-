'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [{
      numberOfPlayers: 3,
      status: 'started',
      capacity: 3,
      currentTurn: 2,
      lastMove: 2.5,
      boardid: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {});
  }
};
