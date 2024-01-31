const userServices = require('../services/user');
const addedInformation = require('../helpers/userValidate');

const addNewUser = async (req, res) => {
  const errorFinder = addedInformation(req.body);
  if (errorFinder) {
    return res.status(400).json({ message: errorFinder });
  }
  const { displayName, email, password, image } = req.body;

  const controllerRes = await userServices.addUser({ displayName, email, password, image });
  if (controllerRes.error) {
    const { error } = controllerRes;
    const statusCode = error === 'User already registered' ? 409 : 500;
    return res.status(statusCode).json({ message: error });
  }
  return res.status(201).json(controllerRes);
};

const simpleUsers = async (_req, res) => {
  const smpUsers = await userServices.searchAllUsers();
  res.status(200).json(smpUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.status(400).json({ message: 'Invalid Id' });
  const getUser = await userServices.getUserById(id);
  if (getUser.error) {
    const resultParams = getUser.error === 'User does not exist' ? 404 : 500;
    return res.status(resultParams).json({ message: getUser.error });
  }
  return res.status(200).json(getUser);
};

module.exports = {
  addNewUser,
  simpleUsers,
  getUserById,
};