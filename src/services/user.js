const { User } = require('../models');
const tokenValidator = require('../helpers/tokenValidate');

const servicesUser = {
  async checkUser(email) {
    return User.findOne({ where: { email } });
  },
  async userCreate(userInformation) {
    return User.create({
      displayName: userInformation.displayName,
      email: userInformation.email,
      password: userInformation.password,
      image: userInformation.image,
    });
  },
  async addUser(userInformation) {
    if (await this.checkUser(userInformation.email)) {
      return {
        error: 'User already registered',
      };
    }
    const addedUser = await this.userCreate(userInformation);
    const token = tokenValidator(addedUser.id);
    return { token };
  },
  async searchAllUsers() {
    const getUser = await User.findAll({
      attributes: { exclude: ['password'] },
    }); 
    return getUser;
  },
  async getUserById(id) {
    const searchUser = await User.findByPk(id, {
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    if (!searchUser) return { error: 'User does not exist' };
    return searchUser;
  },
};

module.exports = servicesUser;