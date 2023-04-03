const Router = require('express');
const favouriteController = require('../controllers/favouriteController');
const router = new Router();

router.get('/add', favouriteController.addOne);
router.get('/remove', favouriteController.removeOne);

module.exports = router;
