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
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
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