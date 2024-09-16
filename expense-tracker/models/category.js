const sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      },
      category_name: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      timestamps: false
    });
  
    Category.associate = function(models) {
      Category.belongsTo(models.User, { foreignKey: 'user_id' });
      Category.hasMany(models.Expense, { foreignKey: 'category_id' });
      Category.hasMany(models.Budget, { foreignKey: 'category_id' });
    };
  
    return Category;
  };
  