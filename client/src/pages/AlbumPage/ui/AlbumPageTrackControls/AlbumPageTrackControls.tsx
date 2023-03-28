import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AlbumPageTrackControls.module.scss';

interface AlbumPageTrackControlsProps {
   className?: string;
}

export const AlbumPageTrackControls = memo((props:AlbumPageTrackControlsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.albumPageTrackControls, {}, [className])}>
            <Button theme={ButtonTheme.CLEAN} className={cls.button}>Название</Button>
            <Button theme={ButtonTheme.CLEAN} className={cls.button}>Альбом</Button>
            <Button theme={ButtonTheme.CLEAN} className={cls.buttonJustifiedEnd}>Прослушивания</Button>
            <Button theme={ButtonTheme.CLEAN} className={cls.buttonJustifiedEnd}>Длительность</Button>
        </div>
    );
});
