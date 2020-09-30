const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const User = require('../../database/models/user');
const { signUpSchema } = require('../utils');

const signUp = async (req, res, next) => {
  try {
    // make validation
    await signUpSchema.validate(req.body, { abortEarly: false });
    const { fullName, email, password, confirmPassword } = req.body;

    // hash the password
    const hashedPassword = await hash(password, 10);

    // add a new uer
    const newUser = await new User({
      name: fullName,
      email,
      password: hashedPassword,
    });

    const { _id } = await newUser.save();

    // send cookie
    const userToken = { userId: _id };
    const cookie = sign(userToken, process.env.SECRET_KEY);

    res.cookie('user', cookie);
    res.json({ statusCode: 200, message: 'sign in successfully' });
  } catch (err) {
    res.status(400).json({
      Error: err.errors || err,
      message: 'There is an error in your signup',
    });
  }
};

module.exports = signUp;
