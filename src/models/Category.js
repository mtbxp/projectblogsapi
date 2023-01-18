const Category = (sequelize, Datatypes) => {
  
    const Category = sequelize.define('Category', {
      id: { 
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: Datatypes.STRING,
    }, {
      timestamps: false,
    });
  
    return Category;
  };
  
  module.exports = Category;
  