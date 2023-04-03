const Router = require('express');
const albumController = require('../controllers/albumController');
const router = new Router();

router.get('/single/:id', albumController.getOne);
router.get('/artist/:id', albumController.getByArtist);
router.get('/all', albumController.getAll);

module.exports = router;
