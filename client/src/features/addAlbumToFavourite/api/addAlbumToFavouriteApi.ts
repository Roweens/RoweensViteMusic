import { Album } from 'entities/Album';
import { rtkApi } from 'shared/api/rtkApi';

interface addAlbumToFavouriteApiProps {
    albumId?: string;
    userId?: string;
}

const addAlbumToFavouriteApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAlbumDetails: build.query<Album, addAlbumToFavouriteApiProps>({
            query: ({ albumId, userId }) => ({
                url: `/album/single/${albumId}`,
                params: {
                    userId,
                },
            }),
        }),
    }),
});

export const useLazyFetchAlbum =
    addAlbumToFavouriteApi.useLazyFetchAlbumDetailsQuery;
