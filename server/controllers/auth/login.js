const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const User = require('../../database/models/user');
const { loginSchema } = require('../utils/validation');

const login = async (req, res, next) => {
  try {
    const { email, password } = await loginSchema.validate(req.body, {
      abortEarly: false,
    });

    const userData = await User.findOne({ email });
    if (userData) {
      const { password: hashedPassword, _id } = userData;
      const match = await compare(password, hashedPassword);
      if (match) {
        const token = sign({ userId: _id }, process.env.SECRET_KEY);
        res.cookie('token', token);
        res.json({ message: 'logged in successfully' });
      } else {
        res.status(400).json({ message: 'Password is incorrect' });
      }
    } else {
      res.status(400).json({ message: "user doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({
      Error: err.errors || err,
      message: 'There is an error in your login',
    });
  }
};

module.exports = login;
