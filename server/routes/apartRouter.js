const Router = require('express');
const router = new Router();
const ApartmentController = require('../controllers/apartController');

router.post('/', ApartmentController.addApart);
router.get('/', ApartmentController.getApart);

module.exports = router;
