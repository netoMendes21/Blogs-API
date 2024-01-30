module.exports = (sequelize, DataTypes) => {
  const modelUsers = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    displayName: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  },
    {
      tableName: 'users',
      modelName: 'User',
      underscored: true,
      timestamps: false
    });
  modelUsers.associate = (models) => {
    modelUsers.hasMany(models.BlogPost, { foreingKey: 'user_id', as: 'blog_posts' });
  };
  return modelUsers;
};