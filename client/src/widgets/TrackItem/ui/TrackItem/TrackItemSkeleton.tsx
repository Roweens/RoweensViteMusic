import classNames from 'classnames';
import { memo } from 'react';
import { ItemView } from 'shared/types/ItemView';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack } from 'shared/ui/Stack';
import cls from './TrackItem.module.scss';

interface TrackItemSkeletonProps {
    className?: string;
    viewType: ItemView;
}

export const TrackItemSkeleton = memo((props: TrackItemSkeletonProps) => {
    const { viewType, className } = props;

    if (viewType === 'mini') {
        return <Skeleton width={50} height={50} border="10px" />;
    }

    if (viewType === 'compact') {
        return (
            <HStack
                className={classNames(cls.trackItemCompact, {}, [className])}
                gap="16"
                align="center"
            >
                <Skeleton width={40} height={40} border="50%" />
                <Skeleton width={50} height={50} border="10px" />
                <Skeleton width={150} height={50} border="5px" />
            </HStack>
        );
    }

    return (
        <div className={classNames(cls.trackItem, {}, [className])}>
            <HStack className={cls.info} gap="16" align="center">
                <Skeleton width={40} height={40} border="50%" />
                <Skeleton width={50} height={50} border="10px" />
                <Skeleton width={150} height={50} border="5px" />
            </HStack>
            <Skeleton
                width={200}
                height={40}
                className={cls.album}
                border="5px"
            />
            <Skeleton
                width={100}
                height={40}
                className={cls.listens}
                border="5px"
            />
            <Skeleton
                width={100}
                height={40}
                className={cls.time}
                border="5px"
            />
            <Skeleton
                width={100}
                height={40}
                className={cls.time}
                border="5px"
            />
        </div>
    );
});
