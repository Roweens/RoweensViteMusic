const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { Profile } = require('../models/models');


class ProfileController {
  async getOne(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const candidate = await Profile.findOne({ where: { userId: id } });

    if (!candidate) {
      return next(ApiError.badRequest('Profile not found'));
    }

    return res.json(candidate);
  }
  async edit(req, res, next) {
    const { id } = req.params;
    const newProfile = req.body

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    const candidate = await Profile.findOne({ where: { userId:id } });

    if (!candidate) {
      return next(ApiError.badRequest('Profile not found'));
    }

    const updatedProfile = await candidate.update({...candidate, ...newProfile})

    return res.json(updatedProfile);
  }
}

module.exports = new ProfileController();
