'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Neighborhood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Neighborhood.hasMany(models.CrimeTip, {
        foreignKey: 'neighborhoodId'
      });
      Neighborhood.hasMany(models.User, {
        foreignKey: 'neighborhoodId'
      });
      Neighborhood.hasMany(models.Comment, {
        foreignKey: 'neighborhoodId'
      });
      Neighborhood.hasMany(models.Recommendation, {
        foreignKey: 'neighborhoodId'
      });
      // define association here
    }
  }
  Neighborhood.init(
    {
      zipcode: DataTypes.INTEGER,
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Neighborhood',
      tableName: 'neighborhoods'
    }
  );
  return Neighborhood;
};
