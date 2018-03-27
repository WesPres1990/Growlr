module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
   
    photo: DataTypes.STRING
  }, {});
  Match.associate = function(models) {
    // associations can be defined here
  };
  return Match;
};