const yup = require('yup');

const modifyUserSchema = yup.object({
  fullName: yup.string().trim().required(),
});

module.exports = modifyUserSchema;
