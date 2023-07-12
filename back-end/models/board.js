
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
class Board extends Model {
  static associate(models) {
    Board.hasMany(models.Elements, {foreignKey: 'boardid',});
    Board.hasMany(models.Game, { foreignKey: 'boardid' });
  }
}


  Board.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Board',
  });


export default Board;