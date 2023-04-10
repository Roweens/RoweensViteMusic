const ApiError = require('../error/ApiError');
const { Genre } = require('../models/models');


class GenreController {
  async getAll(req, res, next) {
    const genres = await Genre.findAll();

    return res.json(genres);
  }
}

module.exports = new GenreController();
