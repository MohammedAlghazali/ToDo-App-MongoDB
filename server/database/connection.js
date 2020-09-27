const mongoose = require('mongoose');
require('dotenv').config();

let dbURL = '';
switch (process.env.NODE_ENV) {
  case 'production':
    dbURL = process.env.PRODUCT_URL;
    break;
  case 'test':
    dbURL = process.env.TEST_URL;
    break;
  default:
    throw new Error('No Database URL!!!');
}
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
