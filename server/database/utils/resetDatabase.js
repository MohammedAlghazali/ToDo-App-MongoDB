const User = require('../models/user');

const resetDatabase = async () => {
  try {
    await User.deleteMany();
  } catch (err) {
    console.log('Error In Create Reset Database', err);
    throw err;
  }
};

module.exports = resetDatabase;
