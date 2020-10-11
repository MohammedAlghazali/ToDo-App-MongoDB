const User = require('../database/models/user');
const { addTodoSchema } = require('../controllers/utils/validation');

const addTodo = async (req, res) => {
  try {
    const newTodo = await addTodoSchema.validate(req.body, {
      abortEarly: false,
    });

    const { userId } = req.user;
    const userData = await User.findById(userId);

    userData.todo.push(newTodo);
    await userData.save();

    res.json({
      message: 'a new todo added successfully',
    });
  } catch (err) {
    res.status(400).json({
      Error: err.errors || err,
      message: 'There is an error in adding a new todo',
    });
  }
};

module.exports = addTodo;
