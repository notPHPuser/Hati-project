const Router = require('express');
const router = new Router();
const postRouter = require('./postRouter');
const apartRouter = require('./apartRouter');

router.use('/posts', postRouter);
router.use('/aparts', apartRouter);

module.exports = router;
