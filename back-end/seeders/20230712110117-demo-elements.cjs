'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('elements', [    {
      boardID:1,
      from: 2,
      to: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 4,
      to: 68,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 6,
      to: 45,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 20,
      to: 59,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 30,
      to: 96,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 50,
      to: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 43,
      to: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 52,
      to: 72,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 56,
      to: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 57,
      to: 96,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 71,
      to: 92,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 73,
      to: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 84,
      to: 58,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 87,
      to: 49,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
      boardID:1,
      from: 98,
      to: 40,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('elements', null, {});
  }
};
