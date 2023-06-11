import { memo } from 'react';
import classNames from 'classnames';
import { RoutePath } from 'shared/const/router';
import { Link } from 'shared/ui/Link/Link';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppImage } from 'shared/ui/AppImage';
import { Profile } from '../../model/types/profile';
import cls from './ProfileItem.module.scss';

interface ProfileItemProps {
    className?: string;
    profile: Profile;
}

export const ProfileItem = memo((props: ProfileItemProps) => {
    const { className, profile } = props;

    return (
        <div className={classNames(cls.profileItem, {}, [className])}>
            <Link to={`${RoutePath.album}${profile.id}`}>
                <Card>
                    <div className={cls.card}>
                        <AppImage
                            src={`${__STATIC_URL__}${profile.avatar}`}
                            width={170}
                            height={170}
                            squared
                            errorFallback={
                                <Skeleton
                                    width={170}
                                    height={170}
                                    border="5px"
                                />
                            }
                            fallback={
                                <Skeleton
                                    width={170}
                                    height={170}
                                    border="5px"
                                />
                            }
                        />
                        <div className={cls.info}>
                            <h5 className={cls.title}>{profile.username}</h5>
                            <p className={cls.text}>{profile.firstname}</p>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    );
});
