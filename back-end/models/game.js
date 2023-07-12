'use strict';
import seq from ('sequelize');
const {
  Model
} = seq
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  return Game;
};