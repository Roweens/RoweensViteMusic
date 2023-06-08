import { memo } from 'react';
import classNames from 'classnames';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ProfileList.module.scss';
import { Profile } from '../../model/types/profile';
import { ProfileItem } from '../ProfileItem/ProfileItem';

interface ProfileListProps {
    className?: string;
    profiles: Profile[];
    isLoading?: boolean;
}

export const ProfileList = memo((props: ProfileListProps) => {
    const { className, profiles, isLoading } = props;
    const { t } = useTranslation();

    if (!isLoading && !profiles.length) {
        return (
            <div className={classNames(cls.profileList)}>
                <Text title={t('Профили не найдены')} />
            </div>
        );
    }

    return (
        <HStack
            className={classNames(cls.profileList, {}, [className])}
            max
            gap="16"
        >
            {profiles.map((profile) => (
                <ProfileItem profile={profile} />
            ))}
        </HStack>
    );
});
