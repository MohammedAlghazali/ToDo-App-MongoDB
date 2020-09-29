const { admin } = require('../models');

const createEmptyCollection = async () => {
  try {
    await admin.createCollection();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('creating collection Error', err);
    throw err;
  }
};

module.exports = createEmptyCollection;
