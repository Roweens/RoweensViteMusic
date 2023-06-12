import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { TrackList } from 'entities/Track';
import { useGetProfileUserRating } from '../../api/fetchUserFavouriteTracks';

export interface FavouriteTracksListProps {
    className?: string;
    id: string;
}

const FavouriteTracksList = memo((props: FavouriteTracksListProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    const { isLoading, data, isError, error } = useGetProfileUserRating({
        userId: id,
    });

    if (isError) {
        return <Text title={t('Ошибка при загрузке треков')} />;
    }

    if (!data) {
        return <Text title={t('Треки на найдены')} />;
    }

    return (
        <TrackList
            tracks={data}
            isLoading={isLoading}
            error={error}
            className={classNames('', {}, [className])}
        />
    );
});

export default FavouriteTracksList;
