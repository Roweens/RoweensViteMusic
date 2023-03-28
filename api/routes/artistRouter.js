const Router = require('express');
const artistController = require('../controllers/artistController');
const router = new Router();

router.get('/:id', artistController.getOne);

module.exports = router;
