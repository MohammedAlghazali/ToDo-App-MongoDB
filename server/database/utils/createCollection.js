const User = require('../models/user');

const createEmptyCollection = async () => {
  try {
    await User.createCollection();
  } catch (err) {
    console.log('Error In Create Collection', err);
    throw err;
  }
};

module.exports = createEmptyCollection;
