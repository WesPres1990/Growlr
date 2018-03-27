'use strict';
module.exports = (sequelize, DataTypes) => {
  var Input_ds = sequelize.define('Input_ds', {
    dogname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    breed: DataTypes.STRING,
    sponsorname: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    goodtoknows: DataTypes.STRING,
    photo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {});
  Input_ds.associate = function(models) {
    // associations can be defined here
  };
  return Input_ds;
};