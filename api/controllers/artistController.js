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
}

module.exports = new ArtistController();
