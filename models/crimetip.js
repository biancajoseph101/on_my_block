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
      CrimeTip.belongsTo(models.Neighborhood, {
        foreignKey: 'neighborhoodId'
      });
      CrimeTip.hasMany(models.Comment, {
        foreignKey: 'crimeId'
      });
      // define association here
    }
  }
  CrimeTip.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      neighborhoodId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'neighborhoods',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'CrimeTip',
      tableName: 'crimetips'
    }
  );
  return CrimeTip;
};
