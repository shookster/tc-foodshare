module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    name: DataTypes.STRING(50),
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    phone_number: DataTypes.STRING,
  });

  Location.associate = function (models) {
    Location.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Location
};
