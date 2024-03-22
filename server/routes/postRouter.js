const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');

router.post('/', postController.addPost);
router.get('/', postController.getPost);

module.exports = router;
