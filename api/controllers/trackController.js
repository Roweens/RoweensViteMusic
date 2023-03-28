const ApiError = require('../error/ApiError');
const { Track, AlbumTrack, Album, Artist } = require('../models/models');


class TrackController {
  async getByAlbumId(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const tracksFromAlbum = await AlbumTrack.findAll({ where: { albumId: id }, include: [{ model: Track}, {model: Album }, {model: Artist}] });

    
    if (!tracksFromAlbum) {
      return next(ApiError.badRequest('Album not found'));
    }


    return res.json(tracksFromAlbum);
  }

  async getByArtistId(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const tracks = await AlbumTrack.findAll({ where: { artistId: id }, include: [Track, Artist, Album] });

    if (!tracks) {
      return next(ApiError.badRequest('Albums not found'));
    }


    return res.json(tracks);
  }
}

module.exports = new TrackController();
