const Router = require('express');
const albumController = require('../controllers/albumController');
const router = new Router();

router.get('/:id', albumController.getOne);

module.exports = router;
