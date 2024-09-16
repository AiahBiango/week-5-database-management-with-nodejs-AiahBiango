'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Budgets', {
      budget_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.FLOAT
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Budgets');
  }
};
