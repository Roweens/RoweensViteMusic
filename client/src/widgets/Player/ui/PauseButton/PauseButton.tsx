import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from 'shared/ui/Icon/Icon';
import { ReactComponent as PauseIcon } from '../../assets/pause.svg';
import { playerActions } from '../../model/slice/playerSlice';

interface PauseButtonProps {
    className?: string;
    track?: Track | null;
}

export const PauseButton = memo((props: PauseButtonProps) => {
    const { className, track } = props;

    const dispatch = useAppDispatch();

    const onPauseHandle = useCallback(() => {
        if (track) {
            dispatch(playerActions.setPaused(true));
        }
    }, [dispatch, track]);

    return (
        <Button
            squared
            size={ButtonSize.EXTRA_LARGE}
            theme={ButtonTheme.CLEAN}
            className={className}
            onClick={onPauseHandle}
        >
            <Icon Svg={PauseIcon} />
        </Button>
    );
});
