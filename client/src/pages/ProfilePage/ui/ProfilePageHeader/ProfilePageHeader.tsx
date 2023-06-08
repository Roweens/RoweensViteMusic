import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadonly);
    const { id } = useParams<{ id: string }>();
    const onChangeEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        if (id) {
            dispatch(updateProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <div className={cls.header}>
            <Text title={t('Настройки профиля')} />
            <div className={cls.controls}>
                {readOnly ? (
                    <Button onClick={onChangeEdit}>{t('Редактировать')}</Button>
                ) : (
                    <Button onClick={onCancelEdit}>{t('Отменить')}</Button>
                )}
                <Button onClick={onSave}>{t('Сохранить')}</Button>
            </div>
        </div>
    );
};
