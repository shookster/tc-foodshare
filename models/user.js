module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Location, {
      onDelete: "cascade",
    });
  };

  return User;
};
