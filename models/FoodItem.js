module.exports = function (sequelize, DataTypes) {
  var FoodItem = sequelize.define("FoodItem", {
    status: DataTypes.STRING(50),
    category: DataTypes.STRING(100),
    item_description: DataTypes.STRING(50),
   
  });
  FoodItem.associate = function (models) {
    FoodItem.belongsTo(models.Location, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return FoodItem;
};
