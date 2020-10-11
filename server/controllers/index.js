const { signUp, login, authorization, logout } = require('./auth');
const modifyUser = require('./modifyUser');

module.exports = {
  signUp,
  login,
  authorization,
  modifyUser,
  logout,
};
