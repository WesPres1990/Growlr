'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Survey_ds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question1: {
        type: Sequelize.STRING
      },
      question2: {
        type: Sequelize.STRING
      },
      question3: {
        type: Sequelize.STRING
      },
      question4: {
        type: Sequelize.STRING
      },
      question5: {
        type: Sequelize.STRING
      },
      question6: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      score: {
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
    return queryInterface.dropTable('Survey_ds');
  }
};