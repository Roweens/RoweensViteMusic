import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Icon } from 'shared/ui/Icon/Icon';
import { ReactComponent as LoopIcon } from '../../assets/loop.svg';
import { playerActions } from '../../model/slice/playerSlice';
import { getPlayerLoop } from '../../model/selectors/getPlayerLoop/getPlayerLoop';

interface LoopButtonProps {
    className?: string;
    audio: HTMLAudioElement;
}

export const LoopButton = memo((props: LoopButtonProps) => {
    const { className, audio } = props;

    const dispatch = useAppDispatch();
    const isLoop = useSelector(getPlayerLoop);

    const onLoopHandle = useCallback(() => {
        dispatch(playerActions.setLoop(!isLoop));
        audio.loop = !isLoop;
    }, [audio, dispatch, isLoop]);

    return (
        <Button
            className={classNames('', {}, [className])}
            size={ButtonSize.EXTRA_LARGE}
            theme={ButtonTheme.CLEAN}
            onClick={onLoopHandle}
        >
            <Icon Svg={LoopIcon} stroke fill={false} disabled={!isLoop} />
        </Button>
    );
});
