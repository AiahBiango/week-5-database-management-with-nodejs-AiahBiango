const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      timestamps: false
    });
  
    User.associate = function(models) {
      User.hasMany(models.Expense, { foreignKey: 'user_id' });
      User.hasMany(models.Category, { foreignKey: 'user_id' });
      User.hasMany(models.PaymentMethod, { foreignKey: 'user_id' });
      User.hasMany(models.Budget, { foreignKey: 'user_id' });
    };
  
    return User;
  };
  