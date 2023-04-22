import {
    memo, useCallback, useEffect, useMemo,
} from 'react';
import classNames from 'classnames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Image } from 'shared/ui/Image/Image';
import { RangeInput } from 'shared/ui/RangeInput/RangeInput';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getPlayerTrack } from '../../model/selectors/getPlayerTrack/getPlayerTrack';
import { getPlayerPaused } from '../../model/selectors/getPlayerPaused/getPlayerPaused';
import { getPlayerDuration } from '../../model/selectors/getPlayerDuration/getPlayerDuration';
import { getPlayerPlayTime } from '../../model/selectors/getPlayerPlayTime/getPlayerPlayTime';
import { getPlayerVolumeOff } from '../../model/selectors/getPlayerVolumeOff/getPlayerVolumeOff';
import { playerActions } from '../../model/slice/playerSlice';
import { getPlayerVolume } from '../../model/selectors/getPlayerVolume/getPlayerVolume';
import Album from '../../assets/TestAlbum.jpg';
import { ReactComponent as PlayBack } from '../../assets/playBack.svg';
import { ReactComponent as QueueIcon } from '../../assets/queue.svg';
import { ReactComponent as PlayNext } from '../../assets/playNext.svg';
import cls from './Player.module.scss';
import { PlayButton } from '../PlayButton/PlayButton';
import { PlayerVolumeButton } from '../PlayerVolumeButton/PlayerVolumeButton';
import { PauseButton } from '../PauseButton/PauseButton';

interface PlayerProps {
    className?: string;
}

export const Player = memo((props:PlayerProps) => {
    const { className } = props;

    const volume = useSelector(getPlayerVolume);
    const volumeOff = useSelector(getPlayerVolumeOff);
    const track = useSelector(getPlayerTrack);
    const playTime = useSelector(getPlayerPlayTime);
    const duration = useSelector(getPlayerDuration);
    const isPaused = useSelector(getPlayerPaused);

    const dispatch = useAppDispatch();

    const audio: HTMLAudioElement = useMemo(() => (new Audio()), []);

    const play = useCallback(() => {
        if (!isPaused) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [audio, isPaused]);

    const setAudio = useCallback(() => {
        if (track) {
            audio.src = `${__STATIC_URL__}${track.track.file}`;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                dispatch(playerActions.setDuration(Math.ceil(audio.duration)));
            };
            audio.ontimeupdate = () => {
                dispatch(playerActions.setPlayTime(Math.ceil(audio.currentTime)));
            };
        }
    }, [audio, dispatch, track, volume]);

    useEffect(() => {
        if (track) {
            setAudio();
            play();
        }
    }, [track, isPaused]);

    const onChangeVolume = useCallback((value: number) => {
        audio.volume = value / 100;
        dispatch(playerActions.setVolume(value));
    }, [audio, dispatch]);

    const onChangePlayTime = useCallback((value: number) => {
        audio.currentTime = value;
        dispatch(playerActions.setPlayTime(value));
    }, [audio, dispatch]);

    const onPlayHandle = useCallback(() => {
        dispatch(playerActions.setPaused(false));
    }, [dispatch]);

    const onPauseHandle = useCallback(() => {
        dispatch(playerActions.setPaused(true));
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
                        {!isPaused
                            ? <PauseButton onPause={onPauseHandle} />
                            : <PlayButton onPlay={onPlayHandle} />}

                    </li>
                    <li>
                        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN}>
                            <PlayNext />
                        </Button>
                    </li>
                </ul>
                <div className={cls.duration}>
                    <RangeInput left={playTime} right={duration} onChange={onChangePlayTime} className={cls.duration} width={500} />
                </div>
            </div>
            <div className={classNames(cls.volume)}>
                <Button squared size={ButtonSize.LARGE} theme={ButtonTheme.CLEAN}>
                    <QueueIcon />
                </Button>
                <PlayerVolumeButton audio={audio} />
                <RangeInput
                    left={volume}
                    right={100}
                    step={0.1}
                    onChange={onChangeVolume}
                    width={200}
                    disabled={volumeOff}
                />
            </div>
        </div>
    );
});
