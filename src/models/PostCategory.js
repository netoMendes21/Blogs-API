module.exports = (sequelize, DataTypes) => {
  const modelPostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  },
    {
      timesTamps: false,
      underscored: true,
      tableName: 'post_categories',
      modelName: 'PostCategory'
    });
  modelPostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: modelPostCategory,
      otherKey: 'categoryId',
      foreignKey: 'postId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: modelPostCategory,
      otherKey: 'categoryId',
      foreignKey: 'postId'
    });
  };
  return modelPostCategory;
};