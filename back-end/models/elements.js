'use strict';
import seq from ('sequelize');
const {
  Model
} = seq
module.exports = (sequelize, DataTypes) => {
  class Elements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Elements.init({
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    boardid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Elements',
  });
  return Elements;
};