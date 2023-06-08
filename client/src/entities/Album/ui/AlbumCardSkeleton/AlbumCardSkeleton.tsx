import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import cls from './AlbumCardSkeleton.module.scss';

interface AlbumCardSkeletonProps {
    className?: string;
}

export const AlbumCardSkeleton = memo((props: AlbumCardSkeletonProps) => {
    const { className } = props;
    const { t } = useTranslation();

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
