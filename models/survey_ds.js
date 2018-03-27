'use strict';
module.exports = (sequelize, DataTypes) => {
  var Survey_ds = sequelize.define('Survey_ds', {
    question1: DataTypes.INTEGER,
    question2: DataTypes.INTEGER,
    question3: DataTypes.INTEGER,
    question4: DataTypes.INTEGER,
    question5: DataTypes.INTEGER,
    question6: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {});
  Survey_ds.associate = function(models) {
    // associations can be defined here
  };
  return Survey_ds;
};