import { memo } from 'react';
import classNames from 'classnames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import { ItemView } from 'shared/types/ItemView';
import { HStack } from 'shared/ui/Stack';
import cls from './AlbumCardSkeleton.module.scss';

interface AlbumCardSkeletonProps {
    className?: string;
    viewType: ItemView;
}

export const AlbumCardSkeleton = memo((props: AlbumCardSkeletonProps) => {
    const { className, viewType } = props;

    if (viewType === 'mini') {
        return (
            <HStack
                className={classNames(cls.albumItemCompact, {}, [className])}
                max
                align="center"
                gap="16"
            >
                <Skeleton width={50} height={50} border="10px" />
            </HStack>
        );
    }

    if (viewType === 'compact') {
        return (
            <HStack
                className={classNames(cls.albumItemCompact, {}, [className])}
                max
                align="center"
                gap="16"
            >
                <Skeleton width={40} height={40} border="50%" />
                <Skeleton width={50} height={50} border="10px" />
                <Skeleton width={150} height={50} border="5px" />
            </HStack>
        );
    }

    return (
        <div className={classNames(cls.albumCardSkeleton, {}, [className])}>
            <Card>
                <div className={cls.card}>
                    <Skeleton width={170} height={170} border="10px" />
                    <Skeleton width={100} height={20} border="4px" />
                    <Skeleton width={170} height={40} border="4px" />
                </div>
            </Card>
        </div>
    );
});
