const Router = require('express');
const router = new Router();

const albumRouter = require('./albumRouter');
const artistRouter = require('./artistRouter');
const profileRouter = require('./profileRouter');
const trackRouter = require('./trackRouter');
const userRouter = require('./userRouter');
const favouriteRouter = require('./favouriteRouter');

router.use('/user', userRouter);
router.use('/album', albumRouter);
router.use('/artist', artistRouter);
router.use('/profile', profileRouter);
router.use('/tracks', trackRouter);
router.use('/favourite', favouriteRouter);


module.exports = router;
