'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_Category = sequelize.define('Product_Category', {
    categoryName: DataTypes.STRING
  }, {});
  Product_Category.associate = function(models) {
    // associations can be defined here
    Product_Category.belongsToMany(models.Suppliers, {through: models.Suppliers_has_categories,foreignKey: 'category_id'});
  };
  return Product_Category;
};