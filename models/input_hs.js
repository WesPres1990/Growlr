'use strict';
module.exports = (sequelize, DataTypes) => {
  var Input_hs = sequelize.define('Input_hs', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {});
  Input_hs.associate = function(models) {
    // associations can be defined here
  };
  return Input_hs;
};