const yup = require('yup');

const signUpSchema = yup.object({
  fullName: yup.string().min(5).max(20).trim().required(),
  email: yup.string().email().trim().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .mixed()
    .oneOf([yup.ref('password')])
    .required(),
});

module.exports = signUpSchema;
