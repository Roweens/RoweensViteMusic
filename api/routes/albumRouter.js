const Router = require('express');
const albumController = require('../controllers/albumController');
const router = new Router();

router.get('/single/:id', albumController.getOne);
router.get('/artist/:id', albumController.getByArtist);
router.get('/all', albumController.getAll);
router.get('/user/:id', albumController.getByUserId);
router.get('/popular', albumController.getPopular);
router.get('/user/artist/:id', albumController.getByUserArtists);
router.post('/create', albumController.addOne);
router.delete('/delete/:id', albumController.removeOne);

module.exports = router;
