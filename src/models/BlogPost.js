module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
    },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    published: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, 
  { 
    tableName: 'blog_posts', 
    underscored: true, 
    timestamps: false 
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, 
    { 
      foreignKey: 'userId', 
      as: 'user', 
    });
  }
  return BlogPost;
};
