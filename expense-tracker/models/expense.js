const sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define('Expense', {
      expense_id: {
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
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'category_id'
        }
      },
      amount: DataTypes.FLOAT,
      date: DataTypes.DATE,
      description: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      timestamps: false
    });
  
    Expense.associate = function(models) {
      Expense.belongsTo(models.User, { foreignKey: 'user_id' });
      Expense.belongsTo(models.Category, { foreignKey: 'category_id' });
    };
  
    return Expense;
  };
  