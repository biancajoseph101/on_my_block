'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.CrimeTip, {
        foreignKey: 'crimeId'
      });
      Comment.belongsTo(models.Neighborhood, {
        foreignKey: 'neighborhoodId'
      });
      Comment.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      // define association here
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
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
        },
        crimeId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'crimes',
            key: 'id'
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  );
  return Comment;
};
