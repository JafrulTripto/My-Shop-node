'use strict';
module.exports = (sequelize, DataTypes) => {
  const Suppliers_has_categories = sequelize.define('Suppliers_has_categories', {
    supplier_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  Suppliers_has_categories.associate = function(models) {
    // associations can be defined here
  };
  return Suppliers_has_categories;
};