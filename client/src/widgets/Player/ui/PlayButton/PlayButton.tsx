import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { Mods } from 'shared/types/Mods';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from 'shared/ui/Icon/Icon';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';
import cls from './PlayButton.module.scss';
import { playerActions } from '../../model/slice/playerSlice';

interface PlayerPlayButtonProps {
    className?: string;
    track: Track | null;
}

export const PlayButton = memo((props: PlayerPlayButtonProps) => {
    const { className, track } = props;

    const dispatch = useAppDispatch();

    const onPlayHandle = useCallback(() => {
        if (track) {
            dispatch(playerActions.setTrack(track));
            dispatch(playerActions.setPaused(false));
        }
    }, [dispatch, track]);

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
            <Icon Svg={PlayIcon} />
        </Button>
    );
});
