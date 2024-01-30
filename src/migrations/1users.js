module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      displayName: {
        type: Sequelize.STRING(255),
        field: 'display_name',
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
    });
  },
  down: async (QueryInterface, _Sequelize) => {
    await QueryInterface.dropTable('users');
  }
};
