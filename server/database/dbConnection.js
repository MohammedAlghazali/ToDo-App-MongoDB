const mongoose = require('mongoose');
// require('env2')('config.env');

const dbURI = 'mongodb://localhost:27017/todoss';

// if (process.env.NODE_ENV === 'production') {
//   dbURI = process.env.PRODUCT_URI;
// } else {
//   dbURI = process.env.DEV_URI;
// }

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

console.log('dbURI', dbURI);

module.exports = mongoose.connection;
