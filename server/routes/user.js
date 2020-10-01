const router = require('express').Router();
const { signUp, login, authorization, modifyUser } = require('../controllers');

router.post('/signUp', signUp);
router.post('/login', login);

router.use(authorization);

router.get('/is-auth', (req, res) => {
  res.send({ statusCode: 200 });
});

router.post('/user', modifyUser);

module.exports = router;
