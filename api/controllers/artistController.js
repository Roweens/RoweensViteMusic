const ApiError = require('../error/ApiError');
const { Artist } = require('../models/models');


class ArtistController {
  async getOne(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const candidate = await Artist.findOne({ where: { id } });

    if (!candidate) {
      return next(ApiError.badRequest('Artist not found'));
    }


    return res.json(candidate);
  }
}

module.exports = new ArtistController();
