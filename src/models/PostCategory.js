
  const PostCategory = (sequelize, Datatypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      post_id: {
        type: Datatypes.INTEGER,
        foreignKey: true,
      },
      category_id: {
        type: Datatypes.INTEGER,
        foreignKey: true,
      },
    }, {
      timestamps: false,
      underscore: true,
    });

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        as: 'category',
        foreignKey: 'post_id',
        otherKey: 'category_id'
      });

      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        as: 'blogPost',
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    };

    return PostCategory;
  };

module.exports = PostCategory;  