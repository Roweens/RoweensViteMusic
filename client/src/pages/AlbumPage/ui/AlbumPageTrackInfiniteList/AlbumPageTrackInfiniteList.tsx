import { memo, useCallback } from 'react';
import { Track, TrackList } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classNames from 'classnames';
import { getPlayerTrack, playerActions } from 'widgets/Player';
import { getAlbumPageTracksIsLoading } from '../../model/selectors/getAlbumPageTracksIsLoading/getAlbumPageTracksIsLoading';
import { getAlbumTracks } from '../../model/slice/AlbumPageTracksSlice';
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
        const currentTrack = useSelector(getPlayerTrack);

        const onFavouriteChangeHandle = useCallback(() => {
            dispatch(fetchTracksByAlbumId({ albumId: id, replace: true }));
        }, [dispatch, id]);

        const onPlayHandle = useCallback(
            (track?: Track) => {
                if (track) {
                    dispatch(playerActions.setTrack(track));
                    dispatch(playerActions.setPaused(false));
                }
            },
            [dispatch],
        );

        const onPauseHandle = useCallback(
            (track?: Track) => {
                if (track) {
                    dispatch(playerActions.setPaused(true));
                    dispatch(playerActions.setTrack(track));
                }
            },
            [dispatch],
        );

        return (
            <TrackList
                className={classNames('', {}, [className])}
                isLoading={tracksIsLoading}
                tracks={tracks}
                onFavouriteChange={onFavouriteChangeHandle}
                onTrackPlay={onPlayHandle}
                onTrackPause={onPauseHandle}
            />
        );
    },
);
