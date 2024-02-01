module.exports = (sequelize, DataTypes) => {
  const modelCategory = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
  },
    {
      tableName: 'categories',
      timestamps: false
    });
  return modelCategory;
};
