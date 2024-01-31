module.exports = (sequelize, DataTypes) => {
  const modelBlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    title: DataTypes.STRING(255),
    content: DataTypes.STRING(255),
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    updated: DataTypes.DATE,
    published: DataTypes.DATE,
  },
    {
      tableName: 'blog_posts',
      timesTamps: false,
      underscored: true,
      modelName: 'BlogPosts'
    });
  modelBlogPost.associate = (models) => {
    modelBlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  };
  return modelBlogPost;
};