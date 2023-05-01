import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Track } from 'entities/Track';
import { ReactComponent as PauseIcon } from '../../assets/pause.svg';

interface PauseButtonProps {
   className?: string;
   onPause?: (track?: Track) => void;
      track?: Track;
}

export const PauseButton = memo((props:PauseButtonProps) => {
    const { className, onPause, track } = props;

    const onPauseHandle = useCallback(() => {
        onPause?.(track);
    }, [onPause, track]);

    return (
        <Button
            squared
            size={ButtonSize.EXTRA_LARGE}
            theme={ButtonTheme.CLEAN}
            className={className}
            onClick={onPauseHandle}
        >
            <PauseIcon />
        </Button>
    );
});
