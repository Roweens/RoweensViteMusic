import { ChangeEvent, CSSProperties, memo } from 'react';
import classNames from 'classnames';
import { Text, TextSize } from '../../ui/Text/Text';
import cls from './RangeInput.module.scss';

interface RangeInputProps {
    className?: string;
    left: number;
    right: number;
    rightLabel?: string;
    leftLabel?: string;
    step?: number;
    width?: number | string;
    disabled?: boolean;
    onChange?: (value: number) => void;
}

export const RangeInput = memo((props: RangeInputProps) => {
    const {
        className,
        width,
        left,
        right,
        step,
        onChange,
        disabled,
        leftLabel = '',
        rightLabel = '',
    } = props;

    const styles: CSSProperties = {
        width: width || 100,
    };

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(Number(event.target.value));
    };

    return (
        <>
            <input
                className={classNames(cls.rangeInput, {}, [className])}
                type="range"
                min={0}
                max={right}
                step={step}
                value={left}
                onChange={onChangeHandle}
                style={styles}
                disabled={disabled}
            />
            {(rightLabel || leftLabel) && (
                <Text title={`${leftLabel}/${rightLabel}`} size={TextSize.S} />
            )}
        </>
    );
});
