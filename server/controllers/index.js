const { signUp, login, authorization, logout } = require('./auth');
const modifyUser = require('./modifyUser');
const addTodo = require('./addTodo');

module.exports = {
  signUp,
  login,
  authorization,
  modifyUser,
  logout,
  addTodo,
};
