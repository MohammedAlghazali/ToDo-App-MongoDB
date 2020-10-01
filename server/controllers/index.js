const { signUp, login, authorization } = require('./auth');
const modifyUser = require('./modifyUser');

module.exports = {
  signUp,
  login,
  authorization,
  modifyUser,
};
