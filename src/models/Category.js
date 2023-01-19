
const CategoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true
    },
  }, { 
      tableName: 'categories',
      underscored: true,  
      timestamps: false 
    });
  return category;
};

module.exports = CategoryModel;
