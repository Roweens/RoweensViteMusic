import { rtkApi } from 'shared/api/rtkApi';
import { Album } from 'entities/Album';

const popularAlbumsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getPopularAlbumsList: build.query<Album[], number>({
            query: (limit) => ({
                url: '/album/popular',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const usePopularAlbumsList =
    popularAlbumsApi.useGetPopularAlbumsListQuery;
