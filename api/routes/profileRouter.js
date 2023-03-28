const Router = require('express');
const profileController = require('../controllers/profileController');
const router = new Router();

router.get('/:id', profileController.getOne);

router.put('/:id', profileController.edit);

module.exports = router;
