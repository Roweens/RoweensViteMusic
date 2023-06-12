import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { TrackSortField, TrackSortSelector } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/types/SortOrder';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getAlbumPageTracksOrder } from '../../model/selectors/getAlbumPageTracksOrder/getAlbumPageTracksOrder';
import { getAlbumPageTracksSort } from '../../model/selectors/getAlbumPageTracksSort/getAlbumPageTracksSort';
import { fetchTracksByAlbumId } from '../../model/services/fetchTracksByAlbumId';
import cls from './AlbumPageTrackControls.module.scss';
import { albumPageTracksSliceActions } from '../../model/slice/AlbumPageTracksSlice';

interface AlbumPageTrackControlsProps {
    className?: string;
    id: string;
}

export const AlbumPageTrackControls = memo(
    (props: AlbumPageTrackControlsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const order = useSelector(getAlbumPageTracksOrder);
        const sort = useSelector(getAlbumPageTracksSort);

        const onChangeSort = useCallback(
            (newSort: TrackSortField) => {
                dispatch(albumPageTracksSliceActions.setSort(newSort));
                dispatch(fetchTracksByAlbumId({ albumId: id, replace: true }));
            },
            [dispatch, id],
        );

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(albumPageTracksSliceActions.setOrder(newOrder));
                dispatch(fetchTracksByAlbumId({ albumId: id, replace: true }));
            },
            [dispatch, id],
        );

        return (
            <VStack className={cls.controlsWrapper} max gap="16" align="end">
                <TrackSortSelector
                    sort={sort}
                    order={order}
                    onOrderChange={onChangeOrder}
                    onSortChange={onChangeSort}
                />
                <div
                    className={classNames(cls.albumPageTrackControls, {}, [
                        className,
                    ])}
                >
                    <Button theme={ButtonTheme.CLEAN} className={cls.button}>
                        <Text title={t('Название')} size={TextSize.S} />
                    </Button>
                    <Button theme={ButtonTheme.CLEAN} className={cls.button}>
                        <Text title={t('Альбом')} size={TextSize.S} />
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAN}
                        className={cls.buttonJustifiedEnd}
                    >
                        <Text title={t('Прослушивания')} size={TextSize.S} />
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAN}
                        className={cls.buttonJustifiedEnd}
                    >
                        <Text title={t('Любимое')} size={TextSize.S} />
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAN}
                        className={cls.buttonJustifiedEnd}
                    >
                        <Text title={t('Длительность')} size={TextSize.S} />
                    </Button>
                </div>
            </VStack>
        );
    },
);
