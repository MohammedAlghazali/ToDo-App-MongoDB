const yup = require('yup');

const loginSchema = yup.object({
  email: yup.string().email().trim().required(),
  password: yup.string().min(8).required(),
});

module.exports = loginSchema;
