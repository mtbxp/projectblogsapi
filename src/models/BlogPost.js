module.exports = (sequelize, DataTypes) => {
	const blogPost = sequelize.define('BlogPost', {
			id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
				autoIncrement: true,
        allowNull: false,
        
			},
			title: DataTypes.STRING,
			content: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			published: DataTypes.STRING,
			updated: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'blog_posts',
			underscored: true,
			timestamps: false,
		}
	);

	blogPost.associate = (models) => {
		blogPost.belongsTo(models.User, {
			as: 'user',
			foreignKey: 'id',
		});
  }; 

	return blogPost;
};
