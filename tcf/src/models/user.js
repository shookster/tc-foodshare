module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      types: DataTypes.STRING,
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
    User.hasMany(models.location, {
      onDelete: "cascade",
    });
  };

  return User;
};
