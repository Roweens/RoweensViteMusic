const ApiError = require('../error/ApiError');
const { Artist, FavouriteArtist, Favourite } = require('../models/models');


class ArtistController {
  async getOne(req, res, next) {
    const { id } = req.params;
    const { userId} = req.query;

    const favouriteList = await Favourite.findOne({where: {userId}})

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const candidate = await Artist.findOne({ where: { id }, include: [
      {model: FavouriteArtist, where: {favouriteId: favouriteList.id}, required: false, as: 'favourite_artist'}
    ] });

    if (!candidate) {
      return next(ApiError.badRequest('Artist not found'));
    }


    return res.json(candidate);
  }

  async getByUserId(req, res, next) {
     const { id } = req.params;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const favouriteList = await Favourite.findOne({where: {userId: id}})

    const favouriteArtists = await FavouriteArtist.findAll({where: {favouriteId: favouriteList.id}});

    const artists = [];

    for (const favArtist of favouriteArtists) {
      artists.push(await Artist.findOne({where: {id: favArtist.artistId}}))
    }
      
    if (!artists) {
      return next(ApiError.badRequest('Artists not found'));
    }

    return await res.json(artists);
  }
}

module.exports = new ArtistController();
