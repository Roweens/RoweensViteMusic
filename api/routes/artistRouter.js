const Router = require('express');
const artistController = require('../controllers/artistController');
const router = new Router();

router.get('/:id', artistController.getOne);
router.get('/user/:id', artistController.getByUserId);
router.post('/create', artistController.addOne);
router.delete('/delete/:id', artistController.removeOne);


module.exports = router;
