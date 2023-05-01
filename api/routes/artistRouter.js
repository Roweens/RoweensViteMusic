const Router = require('express');
const artistController = require('../controllers/artistController');
const router = new Router();

router.get('/:id', artistController.getOne);
router.get('/user/:id', artistController.getByUserId);

module.exports = router;
