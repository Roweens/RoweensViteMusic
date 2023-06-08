import { Artist } from 'entities/Artist';
import { rtkApi } from 'shared/api/rtkApi';

interface subscribeToArtistApiProps {
    artistId?: string;
    userId?: string;
}

const subscribeToArtistApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchArtistDetails: build.query<Artist, subscribeToArtistApiProps>({
            query: ({ artistId, userId }) => ({
                url: `/artist/${artistId}`,
                params: {
                    userId,
                },
            }),
        }),
    }),
});

export const useLazyFetchArtist =
    subscribeToArtistApi.useLazyFetchArtistDetailsQuery;
