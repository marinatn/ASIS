'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.UserRole, { as: 'users', through: 'User_Role', timestamps: false });
      models.User.belongsToMany(models.MedTest, { as: 'users', through: 'User_Tests', timestamps: false });
      models.User.belongsToMany(models.Category, { as: 'users', through: 'User_Category', timestamps: false });
    }
  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    roles: DataTypes.STRING,
    tests:  DataTypes.STRING,
    categories: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.sync();
  return User;
};

