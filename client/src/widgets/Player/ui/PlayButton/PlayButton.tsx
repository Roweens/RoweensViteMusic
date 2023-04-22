import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { ReactComponent as PlayIcon } from '../../assets/play.svg';

interface PlayerPlayButtonProps {
   className?: string;
   onPlay?: (track?: Track) => void;
   track?: Track;
}

export const PlayButton = memo((props:PlayerPlayButtonProps) => {
    const {
        className, onPlay, track,
    } = props;

    const onPlayHandle = useCallback(() => {
        onPlay?.(track);
    }, [onPlay, track]);

    return (
        <Button
            squared
            size={ButtonSize.EXTRA_LARGE}
            theme={ButtonTheme.CLEAN}
            className={className}
            onClick={onPlayHandle}
        >
            <PlayIcon />
        </Button>
    );
});
