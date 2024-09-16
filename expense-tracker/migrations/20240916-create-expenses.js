'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      expense_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'category_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Expenses');
  }
};
