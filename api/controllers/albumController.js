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
  async getByArtist(req, res, next) {
    const { id } = req.params;
    const { _limit, category } = req.query;
    console.log(req.query)
    if (!id) {
      return next(ApiError.badRequest('No id'));
    }
   
    let albums = []

    if (_limit && !category){

      albums = await Album.findAll({ where: { artistId: id }, limit: _limit });
    } else if (_limit && category){

      const albumTracks = await AlbumTrack.findAll({ where: { artistId: id }, include: {model: Album, where: {category: category}} });

      albumTracks.forEach((album) => {
        if (!(albums.find((currentAlbum) => currentAlbum.id === album.id))){
          albums.push(album.album)
        }
      })

    } else if (category && !_limit){

      const albumTracks = await AlbumTrack.findAll({ where: { artistId: id }, include: {model: Album, where: {category: category}} });

      albumTracks.forEach((album) => {
        if (!(albums.find((currentAlbum) => currentAlbum.id === album.id))){
          albums.push(album.album)
        }
      })

    } else {
     
      albums = await Album.findAll({ where: { artistId: id  } });
    }
   
    if (!albums) {
      return next(ApiError.badRequest('Album not found'));
    }


    return res.json(albums);
  }
    async getAll(req, res, next) {

    const { _limit, genre } = req.query;

    if (!id) {
      return next(ApiError.badRequest('No id'));
    }

    let albums = []

    if (_limit){
      albums = await Album.findAll({ limit: _limit });
    } else if (genre){
      albums = await Album.findAll({ where: { genreId: genre }});
    } else if (genre && _limit){
      albums = await Album.findAll({ where: { genreId: genre }, limit: _limit });
    } else {
      albums = await Album.findAll();
    }

    if (!albums) {
      return next(ApiError.badRequest('Albums not found'));
    }

    return res.json(albums);
  }
}

module.exports = new AlbumController();
