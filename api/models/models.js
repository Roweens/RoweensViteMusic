const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING, unique: true },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Profile = sequelize.define('profile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING, unique: true },
  age: { type: DataTypes.INTEGER},
  gender: { type: DataTypes.STRING, defaultValue: 'Male' },
  currency: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  language: { type: DataTypes.STRING},
  city: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING },
});

const Favourite = sequelize.define('favourite', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const FavouriteTrack = sequelize.define('favourite_track', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Track = sequelize.define('track', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING},
  listens: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
  file: { type: DataTypes.STRING, allowNull: false },
  length: { type: DataTypes.STRING, allowNull: false },
});

const Artist = sequelize.define('artist', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  bio: { type: DataTypes.STRING(2000) },
  bioImg: { type: DataTypes.STRING },
  label: { type: DataTypes.STRING, defaultValue: 'No label' },
  listens: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Album = sequelize.define('album', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING, allowNull: false, defaultValue: 'playlist' },
  img: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
});

const AlbumTrack = sequelize.define('album_track', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Genre = sequelize.define('genre', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});



User.hasOne(Profile)
Profile.belongsTo(User)

User.hasOne(Favourite);
Favourite.belongsTo(User);

Favourite.hasMany(FavouriteTrack)
FavouriteTrack.belongsTo(Favourite)

Track.hasMany(FavouriteTrack, {as: 'favourite_track'})
FavouriteTrack.belongsTo(Track)

Artist.hasMany(Album)
Album.belongsTo(Artist)

Album.hasMany(AlbumTrack, {as: 'album_tracks'})
AlbumTrack.belongsTo(Album)

Genre.hasMany(Album);
Album.belongsTo(Genre);

Track.hasMany(AlbumTrack)
AlbumTrack.belongsTo(Track)

Artist.hasMany(AlbumTrack, {as: 'artist_tracks'})
AlbumTrack.belongsTo(Artist)



module.exports = {
  Album, 
  AlbumTrack,
  Artist,
  Track,
  Favourite,
  FavouriteTrack,
  Profile,
  User,
};
