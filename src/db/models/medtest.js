'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedTest extends Model {

    static associate(models) {

      // define association here
    }
  }
  MedTest.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MedTest',
  });

  MedTest.sync();

  return MedTest;
};
