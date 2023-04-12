'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const Products = queryInterface.createTable("products", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    category_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    site_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
        references: {
          model: 'sites',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    image_url: {
      allowNull: false,
      type: Sequelize.STRING,
    },


   })
   return Products
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('products')
  }
};
