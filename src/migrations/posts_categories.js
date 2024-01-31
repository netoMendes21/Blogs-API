module.exports = {
  up: async (queryInteface, Sequelize) => {
    await queryInteface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};