export type { Artist, ArtistSliceSchema } from './model/types/artist';
export { artistActions, artistReducer } from './model/slice/artistSlice';
export { ArtistDetails } from './ui/ArtistDetails/ArtistDetails';
export { ArtistDescriptionCard } from './ui/ArtistDescriptionCard/ArtistDescriptionCard';
export { fetchArtistById } from './model/services/fetchArtistById/fetchArtistById';
export { ArtistList } from './ui/ArtistList/ArtistList';
