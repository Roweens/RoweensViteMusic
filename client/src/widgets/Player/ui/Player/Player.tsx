import { memo, useCallback } from 'react';
import classNames from 'classnames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Image } from 'shared/ui/Image/Image';
import { RangeInput } from 'shared/ui/RangeInput/RangeInput';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { playerActions } from 'widgets/Player/model/slice/playerSlice';
import { getPlayerVolumeOff } from 'widgets/Player/model/selectors/getPlayerVolumeOff/getPlayerVolumeOff';
import { getPlayerPlayTime } from 'widgets/Player/model/selectors/getPlayerPlayTime/getPlayerPlayTime';
import { getPlayerDuration } from 'widgets/Player/model/selectors/getPlayerDuration/getPlayerDuration';
import { getPlayerVolume } from '../../model/selectors/getPlayerVolume/getPlayerVolume';
import Album from '../../assets/TestAlbum.jpg';
import { ReactComponent as PlayBack } from '../../assets/playBack.svg';
import { ReactComponent as QueueIcon } from '../../assets/queue.svg';
import { ReactComponent as PlayNext } from '../../assets/playNext.svg';
import cls from './Player.module.scss';
import { PlayButton } from '../PlayButton/PlayButton';
import { PlayerVolumeButton } from '../PlayerVolumeButton/PlayerVolumeButton';

interface PlayerProps {
    className?: string;
}

export const Player = memo((props:PlayerProps) => {
    const { className } = props;

    const volume = useSelector(getPlayerVolume);
    const volumeOff = useSelector(getPlayerVolumeOff);

    const playTime = useSelector(getPlayerPlayTime);
    const duration = useSelector(getPlayerDuration);

    const dispatch = useAppDispatch();

    const onChangeVolume = useCallback((value: number) => {
        dispatch(playerActions.setVolume(value));
    }, [dispatch]);

    const onChangePlayTime = useCallback((value: number) => {
        dispatch(playerActions.setPlayTime(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.player, {}, [className])}>
            <div className={classNames(cls.chip)}>
                <Image src={Album} squared height={60} width={60} />
                <div className={classNames(cls.info)}>
                    <p className={classNames(cls.title)}>Sixteen</p>
                    <p className={classNames(cls.album)}>Deadboy</p>
                </div>
            </div>
            <div className={classNames(cls.controls)}>
                <ul className={classNames(cls.controlsIcons)}>
                    <li>
                        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN}>
                            <PlayBack />
                        </Button>

                    </li>
                    <li>
                        <PlayButton />
                    </li>
                    <li>
                        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN}>
                            <PlayNext />
                        </Button>
                    </li>
                </ul>
                <div className={cls.duration}>
                    <RangeInput left={playTime} right={100} onChange={onChangePlayTime} className={cls.duration} width={500} />
                </div>
            </div>
            <div className={classNames(cls.volume)}>
                <Button squared size={ButtonSize.LARGE} theme={ButtonTheme.CLEAN}>
                    <QueueIcon />
                </Button>
                <PlayerVolumeButton />
                <RangeInput left={volume} right={100} step={0.1} onChange={onChangeVolume} width={200} disabled={volumeOff} />
            </div>
        </div>
    );
});
