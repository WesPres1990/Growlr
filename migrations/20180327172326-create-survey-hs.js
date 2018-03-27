'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Survey_hs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question1: {
        type: Sequelize.INTEGER
      },
      question2: {
        type: Sequelize.INTEGER
      },
      question3: {
        type: Sequelize.INTEGER
      },
      question4: {
        type: Sequelize.INTEGER
      },
      question5: {
        type: Sequelize.INTEGER
      },
      question6: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Survey_hs');
  }
};