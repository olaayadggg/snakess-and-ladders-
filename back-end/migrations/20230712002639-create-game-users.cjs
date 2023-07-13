'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GameUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      gameid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
          onDelete: 'CASCADE' // Specify cascading delete behavior
        }
      },
      position: {
        type: Sequelize.INTEGER
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

    // Add the relations
    await queryInterface.addConstraint('GameUsers', {
      fields: ['gameid'],
      type: 'foreign key',
      name: 'fk_gameusers_gameid',
      references: {
        table: 'Games',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addConstraint('GameUsers', {
      fields: ['userid'],
      type: 'foreign key',
      name: 'fk_gameusers_userid',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GameUsers');
  }
};