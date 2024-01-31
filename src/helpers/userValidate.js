const addedName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return '"displayName" length must be at least 8 characters long';
  }
  return null;
};

const addedEmail = (email) => {
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return '"email" must be a valid email';
  }
  return null;
};

const addedPassword = (password) => {
  if (!password || password.length < 6) {
    return '"password" length must be at least 6 characters long';
  }
  return null;
};

const addedInformation = (userInfomation) => {
  const errorName = addedName(userInfomation.displayName);
  if (errorName) {
    return errorName;
  }

  const errorEmail = addedEmail(userInfomation.email);
  if (errorEmail) {
    return errorEmail;
  }

  const errorPassword = addedPassword(userInfomation.password);
  if (errorPassword) {
    return errorPassword;
  }
  return null;
};

module.exports = addedInformation;
