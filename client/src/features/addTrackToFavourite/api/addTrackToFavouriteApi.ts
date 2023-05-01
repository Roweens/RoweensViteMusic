import { Track } from 'entities/Track';
import { rtkApi } from 'shared/api/rtkApi';

interface addTrackToFavouriteApiProps {
    trackId?: string;
    userId?: string;
}

const addTrackToFavouriteApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchTrackDetails: build.query<Track, addTrackToFavouriteApiProps>({
            query: ({ trackId, userId }) => ({
                url: `/artist/${artistId}`,
                params: {
                    userId,
                },
            }),
        }),
    }),
});

export const useLazyFetchTrack = addTrackToFavouriteApi.useLazyFetchTrackDetailsQuery;
