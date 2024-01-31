module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },      
      displayName: {
        type: Sequelize.STRING,
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
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};