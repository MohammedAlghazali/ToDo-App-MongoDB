const User = require('../database/models/user');
const { modifyUserSchema } = require('../controllers/utils/validation');

const modifyUser = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { fullName } = await modifyUserSchema.validate(req.body, {
      abortEarly: false,
    });
    await User.updateOne({ _id: userId }, { name: fullName });
    res.json({
      message: 'User Name updated successfully',
    });
  } catch (err) {
    res.status(400).json({
      Error: err.errors || err,
      message: 'There is an error updating user name',
    });
  }
};

module.exports = modifyUser;
