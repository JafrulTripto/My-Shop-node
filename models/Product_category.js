'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_Category = sequelize.define('Product_Category', {
    categoryName: DataTypes.STRING
  }, {});
  Product_Category.associate = function(models) {
    // associations can be defined here
  };
  return Product_Category;
};