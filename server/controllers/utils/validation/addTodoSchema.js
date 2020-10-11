const yup = require('yup');

const addTodoSchema = yup.object({
  title: yup.string().trim().required(),
  description: yup.string().trim(),
});

module.exports = addTodoSchema;
