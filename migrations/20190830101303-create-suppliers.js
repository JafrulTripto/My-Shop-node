'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Suppliers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sup_Name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contact_person: {
        type: Sequelize.STRING
      },
      contact_person_phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Suppliers');
  }
};