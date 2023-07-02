import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { useSelector } from 'react-redux';
import { ReactComponent as SpeedIcon } from '../../assets/speed.svg';
import { getPlayerFastPlay } from '../../model/selectors/getPlayerFastPlay/getPlayerFastPlay';
import { playerActions } from '../../model/slice/playerSlice';

interface FastPlayButtonProps {
    className?: string;
    audio: HTMLAudioElement;
}

export const FastPlayButton = memo((props: FastPlayButtonProps) => {
    const { className, audio } = props;

    const dispatch = useAppDispatch();
    const isFastPlay = useSelector(getPlayerFastPlay);

    const onLoopHandle = useCallback(() => {
        dispatch(playerActions.setFastPlay(!isFastPlay));
        audio.playbackRate = !isFastPlay ? 1.5 : 1.0;
    }, [audio, dispatch, isFastPlay]);

    return (
        <Button
            className={classNames('', {}, [className])}
            size={ButtonSize.EXTRA_LARGE}
            theme={ButtonTheme.CLEAN}
            onClick={onLoopHandle}
        >
            <Icon Svg={SpeedIcon} stroke fill={false} disabled={!isFastPlay} />
        </Button>
    );
});
