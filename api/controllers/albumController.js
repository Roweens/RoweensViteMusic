const ApiError = require('../error/ApiError');
const { Album, Artist, AlbumTrack } = require('../models/models');


class AlbumController {
  async getOne(req, res, next) {
    const { id } = req.params;
   
    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const candidate = await Album.findOne({ where: { id }, include: [Artist, {model: AlbumTrack, as: 'album_tracks'}] });
   
    
    if (!candidate) {
      return next(ApiError.badRequest('Album not found'));
    }


    return res.json(candidate);
  }
}

module.exports = new AlbumController();
