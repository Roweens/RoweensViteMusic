const ApiError = require('../error/ApiError');
const { Favourite, FavouriteTrack, FavouriteArtist, FavouriteAlbum } = require('../models/models');


class FavouriteController {
  async addOne(req, res, next) {
    const { userId, trackId, albumId, artistId } = req.query;

    if (!userId && !trackId && !albumId && !artistId) {
      return next(ApiError.badRequest('No id'));
    }

    const favourite = await Favourite.findOne({ where: { userId } });

    if (!favourite) {
      return next(ApiError.badRequest('favourite not found'));
    }

    if (trackId){
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

    if (artistId){
      const candidate = await FavouriteArtist.findOne({where: {artistId,  favouriteId: favourite.id}})

      if (candidate){
        return next(ApiError.badRequest('Already in favourite'));
      }

      const favouriteArtist = await FavouriteArtist.create({
        favouriteId: favourite.id,
        artistId
      })

      return res.json(favouriteArtist);
    }

    if (albumId){
      const candidate = await FavouriteAlbum.findOne({where: {albumId,  favouriteId: favourite.id}})

      if (candidate){
        return next(ApiError.badRequest('Already in favourite'));
      }

      const favouriteAlbum = await FavouriteAlbum.create({
        favouriteId: favourite.id,
        albumId
      })

      return res.json(favouriteAlbum);
    }

  }
  async removeOne(req, res, next) {
    const { userId, trackId, albumId, artistId } = req.query;

    if (!userId && !trackId && !albumId && !artistId) {
      return next(ApiError.badRequest('No id'));
    }

    const favourite = await Favourite.findOne({ where: { userId } });

    if (!favourite) {
      return next(ApiError.badRequest('favourite not found'));
    }
    
    let candidate

    if (trackId) {
      candidate = await FavouriteTrack.destroy({where: {trackId,  favouriteId: favourite.id}})
    }

    if (albumId) {
      candidate = await FavouriteAlbum.destroy({where: {albumId,  favouriteId: favourite.id}})
    }

    if (artistId) {
      candidate = await FavouriteArtist.destroy({where: {artistId,  favouriteId: favourite.id}})
    }

    return res.json(candidate);
  }
}

module.exports = new FavouriteController();
