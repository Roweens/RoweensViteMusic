import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReactComponent as PauseIcon } from '../../assets/pause.svg';
import { playerActions } from '../../model/slice/playerSlice';
import { getPlayerPaused } from '../../model/selectors/getPlayerPaused/getPlayerPaused';

interface PauseButtonProps {
   className?: string;
}

export const PauseButton = memo((props:PauseButtonProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const paused = useSelector(getPlayerPaused);

    const onIsPausedChange = useCallback(() => {
        dispatch(playerActions.setPaused(!paused));
    }, [dispatch, paused]);

    return (
        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN} className={className}>
            <PauseIcon onClick={onIsPausedChange} />
        </Button>
    );
});
