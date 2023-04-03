import { memo, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useParams, useSearchParams } from 'react-router-dom';
import { AlbumDetails } from 'entities/Album';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { TrackList } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import cls from './AlbumPage.module.scss';
import { AlbumPageTracksSliceReducer, getAlbumTracks } from '../model/slice/AlbumPageTracksSlice';
import { fetchTracksByAlbumId } from '../model/services/fetchTracksByAlbumId';
import { getAlbumPageTracksIsLoading } from '../model/selectors/getAlbumPageTracksIsLoading/getAlbumPageTracksIsLoading';
import { AlbumPageTrackControls } from './AlbumPageTrackControls/AlbumPageTrackControls';

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
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(fetchTracksByAlbumId({ albumId: id, queryParams: searchParams }));
    }, [dispatch, id, searchParams]);

    const onFavouriteChangeHandle = useCallback(() => {
        dispatch(fetchTracksByAlbumId({ albumId: id }));
    }, [dispatch, id]);

    if (!id) {
        return null;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <div className={classNames(cls.albumPage, {}, [className])}>
                    <AlbumDetails id={id} />
                    <AlbumPageTrackControls id={id} />
                    <TrackList isLoading={tracksIsLoading} tracks={tracks} onFavouriteChange={onFavouriteChangeHandle} />
                </div>
            </Page>
        </DynamicReducerLoader>
    );
});
