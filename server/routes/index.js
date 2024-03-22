const Router = require('express');
const router = new Router();
const postRouter = require('./postRouter');

router.use('/posts', postRouter);

module.exports = router;
