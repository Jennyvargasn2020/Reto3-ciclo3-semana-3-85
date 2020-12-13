const router = require('express').Router();
const apiRouterUser = require('./users.js');

router.use('/auth', apiRouterUser);

module.exports = router;