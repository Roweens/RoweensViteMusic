import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { TrackSortField, TrackSortSelector } from 'entities/Track';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from 'shared/types/SortOrder';
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
            <div className={cls.controlsWrapper}>
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
                        Название
                    </Button>
                    <Button theme={ButtonTheme.CLEAN} className={cls.button}>
                        Альбом
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAN}
                        className={cls.buttonJustifiedEnd}
                    >
                        Прослушивания
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAN}
                        className={cls.buttonJustifiedEnd}
                    >
                        Любимое
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAN}
                        className={cls.buttonJustifiedEnd}
                    >
                        Длительность
                    </Button>
                </div>
            </div>
        );
    },
);
