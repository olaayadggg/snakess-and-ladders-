
'use strict';
import seq from 'sequelize';

const { Model , DataTypes , Sequelize} = seq;
const sequelize = new Sequelize('snakes-and-ladders', 'root', '1234567890!@#$%^&*(', {
  host: 'localhost',
  dialect: 'mysql',
});
// Define models

// Sync Sequelize models and start the server
sequelize.sync()


class Game extends Model {
  static associate(models) {
    Game.belongsTo(models.Board, { foreignKey: 'boardid' });
    Game.hasMany(models.GameUsers, { foreignKey: 'gameid' });
  }
}

  Game.init({
    numberOfPlayers: DataTypes.INTEGER,
    status: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    currentTurn: DataTypes.INTEGER,
    lastMove: DataTypes.DOUBLE,
    boardid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });


export default Game;

