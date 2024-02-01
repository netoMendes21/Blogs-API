const jwt = require('jsonwebtoken');

const authenticateToken = (authenticate) => {
  if (!authenticate) return null;

  const token = authenticate.split(' ');
  if (token.length === 2 && /^Bearer$/i.test(token[0])) return token[1];
  return authenticate;
};

const tokenVerify = (validToken) => {
  const jwtPassword = process.env.JWT_SECRET || 'blessed';
  try {
    jwt.verify(validToken, jwtPassword);
    return jwt.decode(validToken);
  } catch (error) {
    return null;
  }
};

const authenticateMiddleware = (req, res, next) => {
  const token = authenticateToken(req.headers.authorization);
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const user = tokenVerify(token);
  if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

  req.user = user;
  next();
};

module.exports = { authenticateMiddleware };