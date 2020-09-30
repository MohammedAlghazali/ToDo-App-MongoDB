const mongoose = require('mongoose');
const dbConnection = require('./connection');

const fakeData = require('./data/user');

const buildFakeDatabase = () =>
  dbConnection
    .then(async () => {
      await fakeData(); // add fake data in development and test environment
    })
    .then(() => {
      console.log('Database built successfully');
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log('buildDatabase error', err);
      mongoose.disconnect();
    });

buildFakeDatabase();
