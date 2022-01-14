'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CrimeTip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CrimeTip.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      neighborhoodId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CrimeTip',
      tableName: 'crimetips'
    }
  );
  return CrimeTip;
};
