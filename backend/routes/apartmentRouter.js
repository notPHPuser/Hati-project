const Router = require('express');
const router = new Router();
const apartmentConroller = require('../controllers/apartmentsController');

router.post('/', apartmentConroller.create);
router.get('/', apartmentConroller.get);
router.get('/:id', apartmentConroller.getOne);

module.exports = router;
