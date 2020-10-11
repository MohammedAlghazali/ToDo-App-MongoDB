const router = require('express').Router();

const { addTodo } = require('../controllers');

router.post('/todo', addTodo);

module.exports = router;
