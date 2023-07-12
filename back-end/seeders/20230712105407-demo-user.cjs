'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ola',
      lastName: 'Ayad',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Hazem',
      lastName: 'hazem',
      createdAt: new Date(),
      updatedAt: new Date()
    }
]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
