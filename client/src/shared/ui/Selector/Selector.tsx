/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import {
    memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import useComponentVisible from 'shared/lib/hooks/UseVisible/UseComponentVisible';
import { OptionsType } from 'shared/types/OptionsType';
import { ReactComponent as CheckIcon } from './assets/check.svg';
import { ReactComponent as SelectIcon } from './assets/select.svg';
import cls from './Selector.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export enum SelectorTheme {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    FILLED = 'filled',
}

interface SelectorProps {
    className?: string;
    options: OptionsType[];
    value: string;
    onChange?: (value: any) => void;
    theme?: SelectorTheme;
    readOnly?:boolean;
    label?: string;
}

export const Selector = memo((props: SelectorProps) => {
    const {
        className,
        options,
        value,
        onChange,
        theme = SelectorTheme.FILLED,
        readOnly = false,
        label,
    } = props;

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [hoveredItemId, setHoveredItemId] = useState<number>(0);

    const selectItem = (option?: OptionsType): void => {
        if (option) {
            setIsComponentVisible(false);
            onChange?.(option.value);
            setHoveredItemId(option.id);
        }
    };

    const onItemHover = (option?: OptionsType) => {
        if (option) {
            setHoveredItemId(option.id);
        }
    };

    const mods: Record<string, boolean> = {
        [cls.disabled]: readOnly,
    };

    const optionsWithLabel = useMemo<OptionsType[]>(() => (
        [{
            id: 0, label, disabled: true, value: '_label',
        }, ...options]
    ), [label, options]);

    const onItemKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            const nextItem = options.find((option) => option.id > hoveredItemId && !option.disabled);
            if (nextItem) {
                return setHoveredItemId(nextItem.id);
            }
        } if (e.key === 'ArrowUp') {
            const prevItem = options.find((option) => option.id < hoveredItemId && !option.disabled);
            if (prevItem) {
                return setHoveredItemId(prevItem.id);
            }
        }
        if (e.key === 'Enter') {
            if (hoveredItemId) {
                const item = options.find((option) => option.id === hoveredItemId);
                return onChange?.(item?.value);
            }
        }
        if (e.key === 'Escape') {
            if (isComponentVisible) {
                setIsComponentVisible(false);
            }
        }
        if (e.key === 'Enter') {
            if (!isComponentVisible) {
                setIsComponentVisible(true);
            }
        }
    }, [hoveredItemId, isComponentVisible, onChange, options, setIsComponentVisible]);

    const isActive = (option?: OptionsType) => {
        if (option?.value && option.value === value) {
            return true;
        }
        return false;
    };

    const isHovered = (option?: OptionsType) => {
        if (hoveredItemId && hoveredItemId === option?.id) {
            return true;
        }
        return false;
    };

    const SelectThemeToButtonThemeMap: Record<SelectorTheme, ButtonTheme> = {
        outlined: ButtonTheme.OUTLINED,
        clear: ButtonTheme.CLEAN,
        filled: ButtonTheme.FILLED,
    };

    const currentValue = options.find((option) => option.value === value)?.label;

    useEffect(() => {
        if (isComponentVisible) {
            window.addEventListener('keydown', onItemKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onItemKeyDown);
        };
    }, [isComponentVisible, onItemKeyDown]);

    return (
        <div className={classNames(cls.selectorWrapper, mods, [className, cls[theme]])} ref={ref}>
            <Button
                className={classNames(cls.selectorBtn, {}, [className])}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
                theme={SelectThemeToButtonThemeMap[theme]}
            >
                {currentValue || optionsWithLabel[0].label}
                <Icon Svg={SelectIcon} stroke height={24} width={24} />
            </Button>
            {isComponentVisible && (
                <div className={classNames(cls.selectorList)}>
                    <ul>
                        {optionsWithLabel.map((option) => (
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                            <li
                                key={option.id}
                                onClick={() => selectItem(option)}
                                onMouseEnter={() => onItemHover(option)}
                                className={classNames(cls.option, {
                                    [cls.selected]: isActive(option) || isHovered(option),
                                    [cls.disabled]: option.disabled,
                                })}
                            >
                                {isActive(option) && <Icon Svg={CheckIcon} stroke height={24} width={24} className={cls.icon} fill={false} />}
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
