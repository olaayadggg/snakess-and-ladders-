
'use strict';
import seq from 'sequelize';

const { Model , DataTypes , Sequelize} = seq;
const sequelize = new Sequelize('snakes-and-ladders', 'root', '1234567890!@#$%^&*(', {
  host: 'localhost',
  dialect: 'mysql',
});
// Define models

// Sync Sequelize models and start the server

class GameUsers extends Model {
  static associate(models) {
    GameUsers.belongsTo(models.Game, { foreignKey: 'gameid' });
    GameUsers.belongsTo(models.User, { foreignKey: 'userid' });
  }
}


  GameUsers.init(
    {
      userid: DataTypes.INTEGER,
      position: DataTypes.INTEGER,
      gameid: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'GameUsers',
    }
  );
  sequelize.sync()
  export default GameUsers;
