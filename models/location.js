module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    name: DataTypes.STRING(50),
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lat: DataTypes.DECIMAL(10,8),
    lng: DataTypes.DECIMAL(10,8),
    phone_number: DataTypes.STRING,
  });

  Location.associate = function (models) {
    Location.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  Location.associate = function (models) {
    Location.hasMany(models.FoodItem, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Location
};
