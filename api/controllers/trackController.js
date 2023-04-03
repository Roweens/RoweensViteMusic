const ApiError = require('../error/ApiError');
const { Track, AlbumTrack, Album, Artist, Favourite, FavouriteTrack } = require('../models/models');


class TrackController {
  async getByAlbumId(req, res, next) {
    const { id } = req.params;
    const { userId, sort, order } = req.query;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }


    const favouriteList = await Favourite.findOne({where: {userId}})
    
    let tracksFromAlbum = []

    if (sort === 'album'){
    tracksFromAlbum = await AlbumTrack.findAll(
      { where: { albumId: id }, 
        include: [{model: Track, include: [{model: FavouriteTrack, where: {favouriteId: favouriteList.id}, required: false, as:   'favourite_track'}]}, {model: Album }, {model: Artist}],
        order: [
          [ {model: Album}, 'title', order]
      ]
      }
    );
    } else {
    tracksFromAlbum = await AlbumTrack.findAll(
      { where: { albumId: id }, 
        include: [{model: Track, include: [{model: FavouriteTrack, where: {favouriteId: favouriteList.id}, required: false, as:   'favourite_track'}]}, {model: Album }, {model: Artist}],
        order: [
          [ {model: Track}, sort, order]
      ]
      }
    );
  }

    if (!tracksFromAlbum) {
      return next(ApiError.badRequest('Album not found'));
    }


    return res.json(tracksFromAlbum);
  }

  async getByArtistId(req, res, next) {
    const { id } = req.params;
    const { userId } = req.query;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const favouriteList = await Favourite.findOne({where: {userId}})

    const tracks = await AlbumTrack.findAll({ where: { artistId: id, '$album.category$': 'album'}, include: [{model: Track, include: [{model: FavouriteTrack, where: {favouriteId: favouriteList.id}, required: false, as: 'favourite_track'}]}, Artist, Album] });

      
    if (!tracks) {
      return next(ApiError.badRequest('Albums not found'));
    }

    return res.json(tracks);
  }
}

module.exports = new TrackController();
