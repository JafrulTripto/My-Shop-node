'use strict';
module.exports = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define('Suppliers', {
    sup_Name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    contact_person_phone: DataTypes.STRING
  }, {});
  Suppliers.associate = function(models) {
    // associations can be defined here
    Suppliers.belongsToMany(models.Product_Category, {through: models.Suppliers_has_categories, foreignKey: 'supplier_id'})
  };
  return Suppliers;
};