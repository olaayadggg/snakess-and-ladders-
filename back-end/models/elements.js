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
class Elements extends Model {
  static associate(models) {
    // Define a many-to-one association between Elements and Boards
    Elements.belongsTo(models.Board, { foreignKey: 'boardid' });
  }


}


  Elements.init(
    {
      from: DataTypes.INTEGER,
      to: DataTypes.INTEGER,
      boardid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Elements',
    }
  );

export default Elements;