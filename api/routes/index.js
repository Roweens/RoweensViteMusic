const Router = require('express');
const router = new Router();

const albumRouter = require('./albumRouter');
const artistRouter = require('./artistRouter');
const profileRouter = require('./profileRouter');
const trackRouter = require('./trackRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/album', albumRouter);
router.use('/artist', artistRouter);
router.use('/profile', profileRouter);
router.use('/tracks', trackRouter);


module.exports = router;
