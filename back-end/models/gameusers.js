'use strict';
import seq from ('sequelize');
const {
  Model
} = seq
module.exports = (sequelize, DataTypes) => {
  class GameUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameUsers.init({
    userid: DataTypes.INTEGER,
    position: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameUsers',
  });
  return GameUsers;
};