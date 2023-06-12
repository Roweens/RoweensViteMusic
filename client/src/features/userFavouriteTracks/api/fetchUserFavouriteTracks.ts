import { rtkApi } from 'shared/api/rtkApi';
import { Track } from 'entities/Track';

interface favouriteTracksArgs {
    userId: string;
}

const favouriteTracksApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserFavouriteTracks: build.query<Track[], favouriteTracksArgs>({
            query: ({ userId }) => ({
                url: `/tracks/user/${userId}`,
            }),
        }),
    }),
});

export const useGetProfileUserRating =
    favouriteTracksApi.useGetUserFavouriteTracksQuery;
