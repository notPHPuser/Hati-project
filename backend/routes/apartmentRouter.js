const Router = require('express');
const router = new Router();
const ApartmentController = require('../controllers/apartmentsController');

router.post('/', ApartmentController.create);
router.get('/', ApartmentController.get);
router.get('/:id', ApartmentController.getOne);

module.exports = router;
