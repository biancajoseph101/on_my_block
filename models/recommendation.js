'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recommendation.belongsTo(models.Neighborhood, {
        foreignKey: 'neighborhoodId'
      });
      Recommendation.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      // define association here
    }
  }
  Recommendation.init(
    {
      category: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      neighborhoodId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'neighborhoods',
          key: 'id'
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'Recommendation',
      tableName: 'recommendations'
    }
  );
  return Recommendation;
};
