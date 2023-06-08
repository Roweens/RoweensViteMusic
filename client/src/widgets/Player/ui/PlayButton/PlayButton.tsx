import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { Mods } from 'shared/types/Mods';
import classNames from 'classnames';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';
import cls from './PlayButton.module.scss';

interface PlayerPlayButtonProps {
    className?: string;
    onPlay?: (track?: Track) => void;
    track: Track | null;
}

export const PlayButton = memo((props: PlayerPlayButtonProps) => {
    const { className, onPlay, track } = props;

    const onPlayHandle = useCallback(() => {
        onPlay?.(track);
    }, [onPlay, track]);

    const mods: Mods = {
        [cls.disabled]: !track,
    };

    return (
        <Button
            squared
            size={ButtonSize.EXTRA_LARGE}
            theme={ButtonTheme.CLEAN}
            className={classNames('', mods, [className])}
            onClick={onPlayHandle}
        >
            <PlayIcon />
        </Button>
    );
});
