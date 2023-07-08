const ApiError = require('../error/ApiError');
const { Artist, FavouriteArtist, Favourite, AlbumTrack } = require('../models/models');

class ArtistController {
    async getOne(req, res, next) {
        const { id } = req.params;
        const { userId } = req.query;

        const favouriteList = await Favourite.findOne({ where: { userId } });

        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        const candidate = await Artist.findOne({
            where: { id },
            include: [
                {
                    model: FavouriteArtist,
                    where: { favouriteId: favouriteList.id },
                    required: false,
                    as: 'favourite_artist',
                },
            ],
        });

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

        const favouriteList = await Favourite.findOne({ where: { userId: id } });

        const favouriteArtists = await FavouriteArtist.findAll({
            where: { favouriteId: favouriteList.id },
        });

        const artists = [];

        for (const favArtist of favouriteArtists) {
            artists.push(await Artist.findOne({ where: { id: favArtist.artistId } }));
        }

        if (!artists) {
            return next(ApiError.badRequest('Artists not found'));
        }

        return await res.json(artists);
    }

    async addOne(req, res, next) {
        const { artist, tracks } = req.body;

        if (!artist) {
            return next(ApiError.badRequest('No artist'));
        }

        const newArtist = await Artist.create({ ...artist });

        return await res.json(newArtist);
    }

    async removeOne(req, res, next) {
        const { id: artistId } = req.params;

        if (!artistId) {
            return next(ApiError.badRequest('No id'));
        }

        const artist = await Artist.destroy({
            where: {
                id: artistId,
            },
        });

        return await res.json(artist);
    }
}

module.exports = new ArtistController();
