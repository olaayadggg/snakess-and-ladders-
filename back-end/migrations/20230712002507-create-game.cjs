'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numberOfPlayers: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      currentTurn: {
        type: Sequelize.INTEGER
      },
      lastMove: {
        type: Sequelize.STRING
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Boards',
          key: 'id'
        }
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
    await queryInterface.addConstraint('Games', {
      fields: ['boardId'],
      type: 'foreign key',
      name: 'fk_games_boardid',
      references: {
        table: 'Boards',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });

   
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};