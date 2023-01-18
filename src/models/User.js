const User = (sequelize, Datatypes) => {

  const User = sequelize.define( "User", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    display_name: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  }, {
    timestamps: false,
    underscore: true,
    tableName: "users",
  }
);

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: "user_id",
      as: "blogPost",
    });
  };

  return User;
};

module.exports = User;