'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('boards', [{
      name: "snakes-and-ladders",
      image:
          "https://raw.githubusercontent.com/Soupaul/snakes-and-ladders-multiplayer/master/public/images/board.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
  {
    name: "snakes-and-ladders-v2",
    image:
        "https://raw.githubusercontent.com/Soupaul/snakes-and-ladders-multiplayer/master/public/images/board.png",

        createdAt: new Date(),
        updatedAt: new Date(),      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('boards', null, {});
  }
};
