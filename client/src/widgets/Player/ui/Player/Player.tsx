import { memo, useCallback, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { RangeInput } from 'shared/ui/RangeInput/RangeInput';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { AppImage } from 'shared/ui/AppImage';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { formatAudioDuration } from 'shared/lib/utils/formatAudioDuration';
import { getPlayerTrack } from '../../model/selectors/getPlayerTrack/getPlayerTrack';
import { getPlayerPaused } from '../../model/selectors/getPlayerPaused/getPlayerPaused';
import { getPlayerDuration } from '../../model/selectors/getPlayerDuration/getPlayerDuration';
import { getPlayerPlayTime } from '../../model/selectors/getPlayerPlayTime/getPlayerPlayTime';
import { getPlayerVolumeOff } from '../../model/selectors/getPlayerVolumeOff/getPlayerVolumeOff';
import { playerActions } from '../../model/slice/playerSlice';
import { getPlayerVolume } from '../../model/selectors/getPlayerVolume/getPlayerVolume';
import { ReactComponent as PlayBack } from '../../assets/playBack.svg';
import { ReactComponent as QueueIcon } from '../../assets/queue.svg';
import { ReactComponent as PlayNext } from '../../assets/playNext.svg';
import DefaultAlbum from '../../assets/default.png';
import cls from './Player.module.scss';
import { PlayButton } from '../PlayButton/PlayButton';
import { VolumeButton } from '../VolumeButton/VolumeButton';
import { PauseButton } from '../PauseButton/PauseButton';

interface PlayerProps {
    className?: string;
}

export const Player = memo((props: PlayerProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const volume = useSelector(getPlayerVolume);
    const volumeOff = useSelector(getPlayerVolumeOff);
    const track = useSelector(getPlayerTrack);
    const playTime = useSelector(getPlayerPlayTime);
    const duration = useSelector(getPlayerDuration);
    const isPaused = useSelector(getPlayerPaused);

    const dispatch = useAppDispatch();

    const audio: HTMLAudioElement = useMemo(() => new Audio(), []);

    const formattedDuration = track ? formatAudioDuration(audio.duration) : '';
    const formattedPlayTime = track
        ? formatAudioDuration(audio.currentTime)
        : '';

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
                dispatch(
                    playerActions.setPlayTime(Math.ceil(audio.currentTime)),
                );
            };
        }
    }, [audio, dispatch, track, volume]);

    const onChangeVolume = useCallback(
        (value: number) => {
            audio.volume = value / 100;
            dispatch(playerActions.setVolume(value));
        },
        [audio, dispatch],
    );

    const onChangePlayTime = useCallback(
        (value: number) => {
            audio.currentTime = value;
            dispatch(playerActions.setPlayTime(value));
        },
        [audio, dispatch],
    );

    const onPlayHandle = useCallback(() => {
        if (track) {
            dispatch(playerActions.setPaused(false));
        }
    }, [dispatch, track]);

    const onPauseHandle = useCallback(() => {
        dispatch(playerActions.setPaused(true));
    }, [dispatch]);

    useEffect(() => {
        if (track) {
            setAudio();
            play();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [track, isPaused]);

    return (
        <div className={classNames(cls.player, {}, [className])}>
            <HStack gap="16">
                <AppImage
                    src={
                        track
                            ? `${__STATIC_URL__}${track?.album.img}`
                            : DefaultAlbum
                    }
                    height={60}
                    width={60}
                    squared
                    fallback={<Skeleton width={30} height={30} border="5px" />}
                />
                <Text
                    title={track?.track.name ?? t('Трек не выбран')}
                    text={track?.album.title ?? t('')}
                />
            </HStack>

            <VStack
                className={classNames(cls.controls)}
                align="center"
                gap="4"
                justify="center"
            >
                <HStack className={classNames(cls.controlsIcons)}>
                    <Button
                        squared
                        size={ButtonSize.EXTRA_LARGE}
                        theme={ButtonTheme.CLEAN}
                    >
                        <PlayBack />
                    </Button>
                    {!isPaused ? (
                        <PauseButton onPause={onPauseHandle} />
                    ) : (
                        <PlayButton onPlay={onPlayHandle} track={track} />
                    )}
                    <Button
                        squared
                        size={ButtonSize.EXTRA_LARGE}
                        theme={ButtonTheme.CLEAN}
                    >
                        <PlayNext />
                    </Button>
                </HStack>
                <RangeInput
                    left={playTime}
                    right={duration}
                    leftLabel={formattedPlayTime}
                    rightLabel={formattedDuration}
                    onChange={onChangePlayTime}
                    className={cls.duration}
                    width={500}
                />
            </VStack>

            <HStack gap="16" className={cls.volume}>
                <Button
                    squared
                    size={ButtonSize.LARGE}
                    theme={ButtonTheme.CLEAN}
                >
                    <QueueIcon />
                </Button>
                <VolumeButton audio={audio} />
                <RangeInput
                    left={volume}
                    right={100}
                    step={0.1}
                    onChange={onChangeVolume}
                    width={200}
                    disabled={volumeOff}
                />
            </HStack>
        </div>
    );
});
