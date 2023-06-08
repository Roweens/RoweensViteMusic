import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { getPlayerVolume } from '../../model/selectors/getPlayerVolume/getPlayerVolume';
import { playerActions } from '../../model/slice/playerSlice';
import { getPlayerVolumeOff } from '../../model/selectors/getPlayerVolumeOff/getPlayerVolumeOff';
import { ReactComponent as VolumeIcon } from '../../assets/volume.svg';
import { ReactComponent as VolumeOffIcon } from '../../assets/volumeoff.svg';

interface PlayerVolumeButtonProps {
    className?: string;
    audio: HTMLAudioElement;
}

export const VolumeButton = memo((props: PlayerVolumeButtonProps) => {
    const { className, audio } = props;
    const volume = useSelector(getPlayerVolume);
    const volumeOff = useSelector(getPlayerVolumeOff);
    const dispatch = useAppDispatch();

    const onSwitchVolume = useCallback(() => {
        dispatch(playerActions.setVolumeOff(!volumeOff));
        audio.muted = !volumeOff;
    }, [audio, dispatch, volumeOff]);

    return (
        <Button
            squared
            size={ButtonSize.LARGE}
            theme={ButtonTheme.CLEAN}
            className={className}
            onClick={onSwitchVolume}
        >
            {volumeOff || volume === 0 ? <VolumeOffIcon /> : <VolumeIcon />}
        </Button>
    );
});
