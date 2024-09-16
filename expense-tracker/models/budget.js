const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
      budget_id: {
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
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      timestamps: false
    });
  
    Budget.associate = function(models) {
      Budget.belongsTo(models.User, { foreignKey: 'user_id' });
      Budget.belongsTo(models.Category, { foreignKey: 'category_id' });
    };
  
    return Budget;
  };
  