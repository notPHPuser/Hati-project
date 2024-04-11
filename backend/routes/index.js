const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const apartmentRouter = require('./apartmentRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter);
router.use('/apartment', apartmentRouter);
router.use('/type', typeRouter);

module.exports = router;
