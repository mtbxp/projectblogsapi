module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true 
    },
    displayName: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    email: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false 
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    image: DataTypes.STRING
  }, { 
      tableName: 'users', 
      underscored: true, 
      timestamps: false 
    });
    User.associate = (models) => {
      User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogPosts' })
    };
  return User;
};
