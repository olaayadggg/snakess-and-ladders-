'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Add the relation
    // await queryInterface.addConstraint('GameUsers', {
    //   fields: ['userid'],
    //   type: 'foreign key',
    //   name: 'fk_gameusers_userid',
    //   references: {
    //     table: 'Users',
    //     field: 'id'
    //   },
    //   onDelete: 'CASCADE'
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};