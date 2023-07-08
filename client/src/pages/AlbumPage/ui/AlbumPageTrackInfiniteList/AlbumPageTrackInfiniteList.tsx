import { memo, useCallback } from 'react';
import { TrackList } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classNames from 'classnames';
import { getAlbumPageTracksIsLoading } from '../../model/selectors/getAlbumPageTracksIsLoading/getAlbumPageTracksIsLoading';
import {
    albumPageTracksSliceActions,
    getAlbumTracks,
} from '../../model/slice/AlbumPageTracksSlice';
import { fetchTracksByAlbumId } from '../../model/services/fetchTracksByAlbumId';

interface AlbumPageTrackInfiniteListProps {
    className?: string;
    id?: string;
}

export const AlbumPageTrackInfiniteList = memo(
    (props: AlbumPageTrackInfiniteListProps) => {
        const { className, id } = props;

        const dispatch = useAppDispatch();
        const tracksIsLoading = useSelector(getAlbumPageTracksIsLoading);
        const tracks = useSelector(getAlbumTracks.selectAll);

        const onFavouriteChangeHandle = useCallback(() => {
            dispatch(albumPageTracksSliceActions.setPage(1));
            dispatch(fetchTracksByAlbumId({ albumId: id, replace: true }));
        }, [dispatch, id]);

        return (
            <TrackList
                className={classNames('', {}, [className])}
                isLoading={tracksIsLoading}
                tracks={tracks}
                onFavouriteChange={onFavouriteChangeHandle}
            />
        );
    },
);
