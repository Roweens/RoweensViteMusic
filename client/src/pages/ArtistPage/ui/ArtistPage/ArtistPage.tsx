import { memo, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { ArtistDetails } from 'entities/Artist';
import { TrackList } from 'entities/Track';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { artistPageReducer } from 'pages/ArtistPage/model/slice';
import cls from './ArtistPage.module.scss';
import { getArtistTracks } from '../../model/slice/artistPageTracksSlice';
import { fetchTracksByArtistId } from '../../model/services/fetchTracksByArtistId/fetchTracksByArtistId';
import { getArtistPageTracksError, getArtistPageTracksIsLoading } from '../../model/selectors/getArtistPageTracks';
import { ArtistPageAlbums } from '../ArtistPageAlbums/ArtistPageAlbums';
import { ArtistPagePlaylists } from '../ArtistPagePlaylists/ArtistPagePlaylists';
import { ArtistPageBio } from '../ArtistPageBio/ArtistPageBio';

interface ArtistPageProps {
   className?: string;
}

const reducers: ReducersList = {
    artistPage: artistPageReducer,
};

export const ArtistPage = memo((props:ArtistPageProps) => {
    const { className } = props;
    const isLoading = useSelector(getArtistPageTracksIsLoading);
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    const tracks = useSelector(getArtistTracks.selectAll);
    const error = useSelector(getArtistPageTracksError);

    useEffect(() => {
        dispatch(fetchTracksByArtistId(id));
    }, [dispatch, id]);

    const onFavouriteChangeHandle = useCallback(() => {
        dispatch(fetchTracksByArtistId(id));
    }, [dispatch, id]);

    if (!id) {
        return null;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.artistPage, {}, [className])}>
                <Page>
                    <ArtistDetails id={id} />
                    <div className={cls.mainBlock}>
                        <TrackList
                            isLoading={isLoading}
                            tracks={tracks}
                            error={error}
                            className={cls.tracks}
                            onFavouriteChange={onFavouriteChangeHandle}
                        />
                        <ArtistPageBio />
                    </div>
                    <ArtistPageAlbums id={id} />

                    <ArtistPagePlaylists id={id} />
                </Page>
            </div>
        </DynamicReducerLoader>
    );
});
