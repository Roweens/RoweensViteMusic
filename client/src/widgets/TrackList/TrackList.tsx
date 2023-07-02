import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ItemView } from 'shared/types/ItemView';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { TrackItem } from 'widgets/TrackItem';
import cls from './TrackList.module.scss';
import { Track } from '../../entities/Track/model/types/track';

interface TrackListProps {
    className?: string;
    tracks: Track[];
    isLoading?: boolean;
    error?: string;
    onFavouriteChange?: () => void;
    viewType?: ItemView;
    shortTitle?: boolean;
}

export const TrackList = memo((props: TrackListProps) => {
    const {
        className,
        tracks,
        isLoading,
        error,
        onFavouriteChange,
        viewType = 'full',
        shortTitle = false,
    } = props;

    const { t } = useTranslation();

    if (error) {
        return <Text title={t('Ошибка при загрузке треков')} />;
    }

    return (
        <VStack
            className={classNames(cls.trackList, {}, [className])}
            gap="16"
            max
        >
            {tracks.map((track) => (
                <TrackItem
                    track={track}
                    isLoading={isLoading}
                    key={track.id}
                    onFavouriteChange={onFavouriteChange}
                    viewType={viewType}
                    shortTitle={shortTitle}
                />
            ))}
            {isLoading && (
                <div className={classNames(cls.trackList, {}, [className])}>
                    <TrackItem isLoading />
                    <TrackItem isLoading />
                    <TrackItem isLoading />
                </div>
            )}
        </VStack>
    );
});
