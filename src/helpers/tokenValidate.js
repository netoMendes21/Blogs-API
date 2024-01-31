const jwt = require('jsonwebtoken');

const tokenValidator = (id) => {
  const passwordValidator = process.env.JWT_SECRET || 'blessed';
  const authenticate = jwt.sign({ id }, passwordValidator, { expiresIn: '3h' });
  return authenticate;
};

module.exports = tokenValidator;