const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define('PaymentMethod', {
      payment_method_id: {
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
      payment_method_name: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    }, {
      timestamps: false
    });
  
    PaymentMethod.associate = function(models) {
      PaymentMethod.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return PaymentMethod;
  };
  