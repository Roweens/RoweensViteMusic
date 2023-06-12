const ApiError = require('../error/ApiError');
const { Track, AlbumTrack, Album, Artist, Favourite, FavouriteTrack } = require('../models/models');

class TrackController {
    async getByAlbumId(req, res, next) {
        const { id } = req.params;
        const { userId, sort, order, _limit, page } = req.query;

        let offset = page * _limit - _limit;

        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        const favouriteList = await Favourite.findOne({ where: { userId } });

        let tracksFromAlbum = [];

        if (sort === 'album') {
            tracksFromAlbum = await AlbumTrack.findAndCountAll({
                where: { albumId: id },
                include: [
                    {
                        model: Track,
                        include: [
                            {
                                model: FavouriteTrack,
                                where: { favouriteId: favouriteList.id },
                                required: false,
                                as: 'favourite_track',
                            },
                        ],
                    },
                    { model: Album },
                    { model: Artist },
                ],
                order: [[{ model: Album }, 'title', order]],
                limit: _limit,
                offset,
            });
        } else {
            tracksFromAlbum = await AlbumTrack.findAndCountAll({
                where: { albumId: id },
                include: [
                    {
                        model: Track,
                        include: [
                            {
                                model: FavouriteTrack,
                                where: { favouriteId: favouriteList.id },
                                required: false,
                                as: 'favourite_track',
                            },
                        ],
                    },
                    { model: Album },
                    { model: Artist },
                ],
                order: [[{ model: Track }, sort, order]],
                limit: _limit,
                offset,
            });
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

        const favouriteList = await Favourite.findOne({ where: { userId } });

        const tracks = await AlbumTrack.findAll({
            where: { artistId: id, '$album.category$': 'album' },
            include: [
                {
                    model: Track,
                    include: [
                        {
                            model: FavouriteTrack,
                            where: { favouriteId: favouriteList.id },
                            required: false,
                            as: 'favourite_track',
                        },
                    ],
                },
                Artist,
                Album,
            ],
        });

        if (!tracks) {
            return next(ApiError.badRequest('Tracks not found'));
        }

        return res.json(tracks.slice(0, 6));
    }

    async getByUserId(req, res, next) {
        const { id } = req.params;

        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        const favouriteList = await Favourite.findOne({ where: { userId: id } });

        const favouriteTracks = await FavouriteTrack.findAll({
            where: { favouriteId: favouriteList.id },
        });

        const tracks = [];

        for (const favTrack of favouriteTracks) {
            tracks.push(
                await AlbumTrack.findOne({
                    where: { trackId: favTrack.trackId },
                    include: [
                        Artist,
                        Album,
                        {
                            model: Track,
                            include: [
                                {
                                    model: FavouriteTrack,
                                    where: { favouriteId: favouriteList.id },
                                    required: true,
                                    as: 'favourite_track',
                                },
                            ],
                        },
                    ],
                })
            );
        }

        if (!tracks) {
            return next(ApiError.badRequest('Tracks not found'));
        }

        return await res.json(tracks);
    }
}

module.exports = new TrackController();
