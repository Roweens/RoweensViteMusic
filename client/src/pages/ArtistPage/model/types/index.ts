import { ArtistPageAlbumsSchema } from './artistPageAlbumsSchema';
import { ArtistPagePlaylistsSchema } from './artistPagePlaylistsSchema';
import { ArtistPageTracksSchema } from './artistPageTracksSchema';

export interface ArtistPageSchema {
    tracks: ArtistPageTracksSchema;
    albums: ArtistPageAlbumsSchema;
    playlists: ArtistPagePlaylistsSchema;
}
