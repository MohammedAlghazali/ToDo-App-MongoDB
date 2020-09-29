const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  todo: [todoSchema],
});

module.exports = mongoose.model('admin', userSchema);
