'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Neighborhood, {
        foreignKey: 'neighborhoodId'
      });
      User.hasMany(models.Comment, {
        foreignKey: 'userId'
      });
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      email: DataTypes.STRING,
      neighborhoodId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'neighborhoods',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
