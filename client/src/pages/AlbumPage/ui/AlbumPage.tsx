import { memo, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useParams, useSearchParams } from 'react-router-dom';
import { AlbumDetails } from 'entities/Album';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { TrackList, TrackSortField } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { SortOrder } from 'shared/types/SortOrder';
import cls from './AlbumPage.module.scss';
import { AlbumPageTracksSliceReducer, getAlbumTracks, albumPageTracksSliceActions } from '../model/slice/AlbumPageTracksSlice';
import { fetchTracksByAlbumId } from '../model/services/fetchTracksByAlbumId';
import { getAlbumPageTracksIsLoading } from '../model/selectors/getAlbumPageTracksIsLoading/getAlbumPageTracksIsLoading';
import { AlbumPageTrackControls } from './AlbumPageTrackControls/AlbumPageTrackControls';
import { getAlbumPageTracksPage } from '../model/selectors/getAlbumPageTracksPage/getAlbumPageTracksPage';
import { fetchNextTracksByAlbumIdPage } from '../model/services/fetchNextTracksByAlbumIdPage';
import { getAlbumPageTracksInited } from '../model/selectors/getAlbumPageTracksInited/getAlbumPageTracksInited';

interface AlbumPageProps {
   className?: string;
}

const reducers: ReducersList = {
    albumPageTracks: AlbumPageTracksSliceReducer,
};

export const AlbumPage = memo((props:AlbumPageProps) => {
    const { className } = props;
    const tracksIsLoading = useSelector(getAlbumPageTracksIsLoading);
    const { id } = useParams();
    const tracks = useSelector(getAlbumTracks.selectAll);
    const inited = useSelector(getAlbumPageTracksInited);
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (!inited) {
            dispatch(
                albumPageTracksSliceActions.setOrder((searchParams?.get('order') as SortOrder) ?? 'DESC'),
            );
            dispatch(
                albumPageTracksSliceActions.setSort(
                    (searchParams?.get('sort') as TrackSortField) ?? TrackSortField.LENGTH,
                ),
            );
            dispatch(albumPageTracksSliceActions.setInited(true));
        }

        dispatch(fetchTracksByAlbumId({ albumId: id }));
    });

    const onFavouriteChangeHandle = useCallback(() => {
        dispatch(fetchTracksByAlbumId({ albumId: id }));
    }, [dispatch, id]);

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNextTracksByAlbumIdPage(id));
    }, [dispatch, id]);

    if (!id) {
        return null;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page onScrollIntersection={onScrollEnd}>
                <div className={classNames(cls.albumPage, {}, [className])}>
                    <AlbumDetails id={id} />
                    <AlbumPageTrackControls id={id} />
                    <TrackList isLoading={tracksIsLoading} tracks={tracks} onFavouriteChange={onFavouriteChangeHandle} />
                </div>
            </Page>
        </DynamicReducerLoader>
    );
});
