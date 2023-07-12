
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
class GameUsers extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    GameUsers.belongsTo(models.Game, { foreignKey: 'gameid' });
    GameUsers.belongsTo(models.User, { foreignKey: 'userid' });
  }
}


  GameUsers.init(
    {
      userid: DataTypes.INTEGER,
      position: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GameUsers',
    }
  );

  export default GameUsers;
