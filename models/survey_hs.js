'use strict';
module.exports = (sequelize, DataTypes) => {
  var Survey_hs = sequelize.define('Survey_hs', {
    question1: DataTypes.INTEGER,
    question2: DataTypes.INTEGER,
    question3: DataTypes.INTEGER,
    question4: DataTypes.INTEGER,
    question5: DataTypes.INTEGER,
    question6: DataTypes.INTEGER
  }, {});
  Survey_hs.associate = function(models) {
    // associations can be defined here
  };
  return Survey_hs;
};