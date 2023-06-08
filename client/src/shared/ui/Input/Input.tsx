import classNames from 'classnames';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Input.module.scss';

export enum InputTheme {
    CLEAN = 'clean',
    OUTLINED = 'outlined',
    FILLED = 'filled',
}

type BasicInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
>;

interface InputProps extends BasicInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    theme?: InputTheme;
    focused?: boolean;
    placeholder?: string;
    readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        theme = InputTheme.FILLED,
        value,
        onChange,
        focused,
        placeholder,
        readOnly = false,
        ...otherProps
    } = props;
    const { t } = useTranslation('login');
    const inputRef = useRef<HTMLInputElement>(null);
    const placeHolderRef = useRef<HTMLSpanElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocusHandler = () => {
        placeHolderRef?.current?.classList?.add(cls.focused);
    };

    const onBlurHandler = () => {
        if (!value) {
            placeHolderRef?.current?.classList.remove(cls.focused);
        }
    };

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.disabled]: readOnly,
    };

    useEffect(() => {
        if (focused || value) {
            inputRef?.current?.focus();
            placeHolderRef?.current?.classList?.add(cls.focused);
        }
    }, [focused, value]);

    return (
        <div className={classNames(cls.inputWrapper, className)}>
            <input
                className={classNames(cls.Input, mods)}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                autoComplete="new-password"
                ref={inputRef}
                disabled={readOnly}
                {...otherProps}
            />
            {placeholder && (
                <span className={cls.placeholder} ref={placeHolderRef}>
                    {t(placeholder)}
                </span>
            )}
        </div>
    );
});
