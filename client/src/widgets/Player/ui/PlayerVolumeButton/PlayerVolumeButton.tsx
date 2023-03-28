import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { playerActions } from 'widgets/Player/model/slice/playerSlice';
import { getPlayerVolume } from 'widgets/Player/model/selectors/getPlayerVolume/getPlayerVolume';
import { getPlayerVolumeOff } from '../../model/selectors/getPlayerVolumeOff/getPlayerVolumeOff';
import { ReactComponent as VolumeIcon } from '../../assets/volume.svg';
import { ReactComponent as VolumeOffIcon } from '../../assets/volumeoff.svg';

interface PlayerVolumeButtonProps {
   className?: string;
}

export const PlayerVolumeButton = memo((props:PlayerVolumeButtonProps) => {
    const { className } = props;
    const volume = useSelector(getPlayerVolume);
    const volumeOff = useSelector(getPlayerVolumeOff);
    const dispatch = useAppDispatch();

    const onSwitchVolume = useCallback(() => {
        dispatch(playerActions.setVolumeOff(!volumeOff));
    }, [dispatch, volumeOff]);

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
