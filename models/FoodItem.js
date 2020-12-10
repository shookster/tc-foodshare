module.exports = function (sequelize, DataTypes) {
  var FoodItem = sequelize.define("food_item", {
    status: DataTypes.STRING(50),
    item_category: DataTypes.STRING(50),
    item_description: DataTypes.STRING(50),
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  FoodItem.associate = function (models) {
    FoodItem.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });

    
  };

  FoodItem.associate = function (models) {
    FoodItem.hasMany(models.Location, {
      foreignKey: {
        allowNull: false,
      },
    });
  }

  return FoodItem;
};
