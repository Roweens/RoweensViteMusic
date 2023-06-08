const Router = require('express');
const searchContoller = require('../controllers/searchContoller');
const router = new Router();

router.get('/', searchContoller.searchByCategory);

module.exports = router;
