const Router = require('express');
const genreController = require('../controllers/genreController');
const router = new Router();

router.get('/', genreController.getAll);

module.exports = router;
