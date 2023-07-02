import { rtkApi } from 'shared/api/rtkApi';
import { Album } from 'entities/Album';

interface getAlbumsBySubscribedArtistsListParams {
    limit: number;
    userId?: string;
}

const albumsBySubscribedArtistsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAlbumsBySubscribedArtistsList: build.query<
            Album[],
            getAlbumsBySubscribedArtistsListParams
        >({
            query: ({ limit, userId }) => ({
                url: `/album/user/artist/${userId}`,
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useAlbumsBySubscribedArtistsList =
    albumsBySubscribedArtistsListApi.useGetAlbumsBySubscribedArtistsListQuery;
