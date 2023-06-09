const ApiError = require('../error/ApiError');
const {
    Album,
    Artist,
    AlbumTrack,
    FavouriteAlbum,
    Favourite,
    FavouriteArtist,
} = require('../models/models');
const { Op } = require('sequelize');

class AlbumController {
    async getOne(req, res, next) {
        const { id } = req.params;
        const { userId } = req.query;

        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        const favouriteList = await Favourite.findOne({ where: { userId } });

        const candidate = await Album.findOne({
            where: { id },
            include: [
                Artist,
                { model: AlbumTrack, as: 'album_tracks' },
                {
                    model: FavouriteAlbum,
                    where: { favouriteId: favouriteList.id },
                    required: false,
                    as: 'favourite_album',
                },
            ],
        });

        if (!candidate) {
            return next(ApiError.badRequest('Album not found'));
        }

        return res.json(candidate);
    }
    async getByArtist(req, res, next) {
        const { id } = req.params;
        const { _limit, category } = req.query;
        console.log(req.query);
        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        let albums = [];

        if (_limit && !category) {
            albums = await Album.findAll({ where: { artistId: id }, limit: _limit });
        } else if (_limit && category) {
            const albumTracks = await AlbumTrack.findAll({
                where: { artistId: id },
                include: { model: Album, where: { category: category } },
            });

            albumTracks.forEach((album) => {
                if (!albums.find((currentAlbum) => currentAlbum.id === album.id)) {
                    albums.push(album.album);
                }
            });
        } else if (category && !_limit) {
            const albumTracks = await AlbumTrack.findAll({
                where: { artistId: id },
                include: { model: Album, where: { category: category } },
            });

            albumTracks.forEach((album) => {
                if (!albums.find((currentAlbum) => currentAlbum.id === album.id)) {
                    albums.push(album.album);
                }
            });
        } else {
            albums = await Album.findAll({ where: { artistId: id } });
        }

        if (!albums) {
            return next(ApiError.badRequest('Album not found'));
        }

        return res.json(albums);
    }
    async getAll(req, res, next) {
        const { _limit, genreId } = req.query;
        console.log(req.query);

        let albums = [];

        if (_limit && !genreId) {
            albums = await Album.findAll({ limit: _limit });
        } else if (genreId && !_limit) {
            albums = await Album.findAll({ where: { genreId } });
        } else if (genreId && _limit) {
            albums = await Album.findAll({ where: { genreId }, limit: _limit });
        } else {
            albums = await Album.findAll();
        }

        if (!albums) {
            return next(ApiError.badRequest('Albums not found'));
        }

        return res.json(albums);
    }

    async getByUserId(req, res, next) {
        const { id } = req.params;

        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        const favouriteList = await Favourite.findOne({ where: { userId: id } });

        const favouriteAlbums = await FavouriteAlbum.findAll({
            where: { favouriteId: favouriteList.id },
        });

        const albums = [];

        for (const favAlbum of favouriteAlbums) {
            albums.push(
                await Album.findOne({ where: { id: favAlbum.albumId }, include: [Artist] })
            );
        }

        if (!albums) {
            return next(ApiError.badRequest('Albums not found'));
        }

        return await res.json(albums);
    }

    async getPopular(req, res, next) {
        const { _limit } = req.query;

        const albums = await Album.findAll({
            limit: _limit,
        });

        if (!albums) {
            return next(ApiError.badRequest('Albums not found'));
        }

        return await res.json(albums);
    }

    async getByUserArtists(req, res, next) {
        const { id } = req.params;
        const { _limit } = req.query;

        if (!id) {
            return next(ApiError.badRequest('No id'));
        }

        const favouriteList = await Favourite.findOne({ where: { userId: id } });

        const favouriteArtists = await FavouriteArtist.findAll({
            where: { favouriteId: favouriteList.id },
        });

        const artistIds = [];

        for (const favArtist of favouriteArtists) {
            artistIds.push(favArtist.artistId);
        }

        const albums = await Album.findAll({
            where: {
                artistId: {
                    [Op.in]: artistIds,
                },
            },
            limit: _limit,
            order: [['createdAt', 'DESC']],
        });

        if (!albums) {
            return next(ApiError.badRequest('Albums not found'));
        }

        return await res.json(albums);
    }

    async addOne(req, res, next) {
        const { album, tracks } = req.body;

        console.log(req.body);

        if (!album) {
            return next(ApiError.badRequest('No album'));
        }

        const newAlbum = await Album.create({ ...album });

        for (const track of tracks) {
            await AlbumTrack.create(track);
        }

        return await res.json(newAlbum);
    }

    async removeOne(req, res, next) {
        const { id: albumId } = req.params;

        if (!albumId) {
            return next(ApiError.badRequest('No id'));
        }

        await AlbumTrack.destroy({
            where: {
                albumId: albumId,
            },
        });

        const album = await Album.destroy({
            where: {
                id: albumId,
            },
        });

        return await res.json(album);
    }
}

module.exports = new AlbumController();
