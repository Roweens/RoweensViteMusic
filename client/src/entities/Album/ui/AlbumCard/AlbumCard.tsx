import { memo } from 'react';
import classNames from 'classnames';
import { Card } from 'shared/ui/Card/Card';
import { Link } from 'shared/ui/Link/Link';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Image } from 'shared/ui/Image/Image';
import { Album } from '../../model/types/album';
import cls from './AlbumCard.module.scss';

interface AlbumCardProps {
   className?: string;
   album: Album
}

export const AlbumCard = memo((props:AlbumCardProps) => {
    const { className, album } = props;

    return (
        <div className={classNames(cls.albumCard, {}, [className])}>
            <Link to={`${RoutePath.album}${album.id}`}>
                <Card>
                    <div className={cls.card}>
                        <Image src={album.img} alt="card image" squared width="100%" height="100%" />
                        <div className={cls.info}>
                            <h5 className={cls.title}>
                                {album.title}
                            </h5>
                            <p className={cls.text}>
                                {album.description}
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    );
});
