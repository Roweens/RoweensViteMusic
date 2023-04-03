const ApiError = require('../error/ApiError');
const { Favourite, FavouriteTrack } = require('../models/models');


class FavouriteController {
  async addOne(req, res, next) {
    const { userId, trackId } = req.query;

    if (!userId || !trackId) {
      return next(ApiError.badRequest('No id'));
    }

    const favourite = await Favourite.findOne({ where: { userId } });

    if (!favourite) {
      return next(ApiError.badRequest('favourite not found'));
    }

    const candidate = await FavouriteTrack.findOne({where: {trackId,  favouriteId: favourite.id}})

    if (candidate){
      return next(ApiError.badRequest('Already in favourite'));
    }

    const favouriteTrack = await FavouriteTrack.create({
      favouriteId: favourite.id,
      trackId
    })

    return res.json(favouriteTrack);
  }
  async removeOne(req, res, next) {
    const { userId, trackId } = req.query;

    if (!userId || !trackId) {
      return next(ApiError.badRequest('No id'));
    }

    const favourite = await Favourite.findOne({ where: { userId } });

    if (!favourite) {
      return next(ApiError.badRequest('favourite not found'));
    }

    const candidate = await FavouriteTrack.destroy({where: {trackId,  favouriteId: favourite.id}})


    return res.json(candidate);
  }
}

module.exports = new FavouriteController();
