const Router = require('express');
const trackController = require('../controllers/trackController');
const router = new Router();

router.get('/artist/:id', trackController.getByArtistId);
router.get('/album/:id', trackController.getByAlbumId);
router.get('/user/:id', trackController.getByUserId);

module.exports = router;
