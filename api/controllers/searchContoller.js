const ApiError = require('../error/ApiError');
const { Profile, Track, Artist, Album, AlbumTrack } = require('../models/models');
const { Op } = require('sequelize');

class SearchController {
    async searchByCategory(req, res, next) {
        const { category, search } = req.query;

        let resultByCategory = {};

        if (!category) {
            return next(ApiError.badRequest('No category'));
        }

        if (category === 'ALL') {
            resultByCategory.tracks = await AlbumTrack.findAll({
                limit: 5,
                include: [{ model: Album }, { model: Track }],
                where: {
                    '$track.name$': {
                        [Op.iLike]: '%' + search + '%',
                    },
                },
            });
            resultByCategory.artists = await Artist.findAll({
                limit: 5,
                where: {
                    name: {
                        [Op.iLike]: '%' + search + '%',
                    },
                },
            });
            resultByCategory.albums = await Album.findAll({
                limit: 5,
                where: {
                    category: 'album',
                    [Op.or]: [
                        {
                            title: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                        {
                            description: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                    ],
                },
            });
            resultByCategory.playlists = await Album.findAll({
                limit: 5,
                where: {
                    category: 'playlist',
                    [Op.or]: [
                        {
                            title: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                        {
                            description: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                    ],
                },
            });
            resultByCategory.profiles = await Profile.findAll({
                limit: 5,
                where: {
                    [Op.or]: [
                        {
                            username: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                        {
                            firstname: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                    ],
                },
            });
        }

        if (category === 'TRACK') {
            resultByCategory.tracks = await AlbumTrack.findAll({
                limit: 5,
                include: [{ model: Album }, { model: Track }],
                where: {
                    '$track.name$': {
                        [Op.iLike]: '%' + search + '%',
                    },
                },
            });
        }

        if (category === 'ARTIST') {
            resultByCategory.artists = await Artist.findAll({
                limit: 5,
                where: {
                    name: {
                        [Op.iLike]: '%' + search + '%',
                    },
                },
            });
        }

        if (category === 'ALBUM') {
            resultByCategory.albums = await Album.findAll({
                limit: 5,
                where: {
                    category: 'album',
                    [Op.or]: [
                        {
                            title: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                        {
                            description: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                    ],
                },
            });
        }

        if (category === 'PLAYLIST') {
            resultByCategory.playlists = await Album.findAll({
                limit: 5,
                where: {
                    category: 'playlist',
                    [Op.or]: [
                        {
                            title: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                        {
                            description: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                    ],
                },
            });
        }

        if (category === 'PROFILE') {
            resultByCategory.profiles = await Profile.findAll({
                limit: 5,
                where: {
                    [Op.or]: [
                        {
                            username: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                        {
                            firstname: {
                                [Op.iLike]: '%' + search + '%',
                            },
                        },
                    ],
                },
            });
        }

        return res.json(resultByCategory);
    }
}

module.exports = new SearchController();
