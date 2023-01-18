const BlogPost = (sequelize, Datatypes) => {

  
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: Datatypes.STRING,
    content: Datatypes.STRING,
    user_id: Datatypes.INTEGER,
    published: Datatypes.DATE,
    updated: Datatypes.DATE
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
    underscore: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
  };

  return BlogPost;
};

module.exports = BlogPost;
