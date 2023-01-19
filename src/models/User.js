module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,    
  }, {
    sequelize,
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      as: 'blogposts',
      foreignKey: 'id',
    })
  }; 

  return user;
}  