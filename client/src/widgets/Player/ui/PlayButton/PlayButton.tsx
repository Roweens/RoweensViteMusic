import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { playerActions } from 'widgets/Player';
import { Track } from 'entities/Track';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';

interface PlayerPlayButtonProps {
   className?: string;
   track?: Track;
}

export const PlayButton = memo((props:PlayerPlayButtonProps) => {
    const { className, track } = props;
    const dispatch = useAppDispatch();

    const onTrackChange = useCallback(() => {
        if (track) {
            dispatch(playerActions.setTrack(track));
            dispatch(playerActions.setPaused(false));
        }
    }, [dispatch, track]);

    return (
        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN} className={className}>
            <PlayIcon onClick={onTrackChange} />
        </Button>
    );
});
