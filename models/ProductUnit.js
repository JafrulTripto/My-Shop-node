'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductUnit = sequelize.define('ProductUnit', {
    unitName: DataTypes.STRING
  }, {});
  ProductUnit.associate = function(models) {
    // associations can be defined here
  };
  return ProductUnit;
};