import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { useParams, useSearchParams } from 'react-router-dom';
import { AlbumDetails } from 'entities/Album';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { TrackSortField } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { SortOrder } from 'shared/types/SortOrder';
import { AddAlbumToFavouriteButton } from 'features/addAlbumToFavourite';
import cls from './AlbumPage.module.scss';
import { AlbumPageTracksSliceReducer, albumPageTracksSliceActions } from '../model/slice/AlbumPageTracksSlice';
import { fetchTracksByAlbumId } from '../model/services/fetchTracksByAlbumId';
import { AlbumPageTrackControls } from './AlbumPageTrackControls/AlbumPageTrackControls';
import { fetchNextTracksByAlbumIdPage } from '../model/services/fetchNextTracksByAlbumIdPage';
import { getAlbumPageTracksInited } from '../model/selectors/getAlbumPageTracksInited/getAlbumPageTracksInited';
import { AlbumPageTrackInfiniteList } from './AlbumPageTrackInfiniteList/AlbumPageTrackInfiniteList';

interface AlbumPageProps {
   className?: string;
}

const reducers: ReducersList = {
    albumPageTracks: AlbumPageTracksSliceReducer,
};

export const AlbumPage = memo((props:AlbumPageProps) => {
    const { className } = props;

    const { id } = useParams();

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

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNextTracksByAlbumIdPage(id));
    }, [dispatch, id]);

    if (!id) {
        return null;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page onScrollIntersection={onScrollEnd} className={classNames(cls.albumPage, {}, [className])}>
                <AlbumDetails id={id} />
                <AddAlbumToFavouriteButton albumId={id} />
                <AlbumPageTrackControls id={id} />
                <AlbumPageTrackInfiniteList id={id} />
            </Page>
        </DynamicReducerLoader>
    );
});
