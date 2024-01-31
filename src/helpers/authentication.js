const jwt = require('jsonwebtoken');

const { User } = require('../models');

const authenticate = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user || user.password !== password) return null;

  const passwordJwt = process.env.JWT_SECRET || 'blessed';
  const token = jwt.sign({ id: user.id, email: user.email }, passwordJwt, { expiresIn: '3h' });
  return token;
};

module.exports = authenticate;