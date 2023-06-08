/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { ReactNode, memo, useCallback, useEffect, useState } from 'react';
import useComponentVisible from 'shared/lib/hooks/UseVisible/UseComponentVisible';
import { OptionsType } from 'shared/types/OptionsType';
import cls from './DropDown.module.scss';
import { Link } from '../Link/Link';
import { Button } from '../Button/Button';

export enum ThemeDropDown {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    FILLED = 'filled',
}

export interface DropdownItem {
    id: number;
    content?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
}

interface DropDownProps {
    className?: string;
    options: DropdownItem[];
    theme?: ThemeDropDown;
    readOnly?: boolean;
    trigger: ReactNode;
}

export const DropDown = memo((props: DropDownProps) => {
    const {
        className,
        options,
        theme = ThemeDropDown.OUTLINED,
        readOnly = false,
        trigger,
    } = props;

    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);
    const [hoveredItemId, setHoveredItemId] = useState<number>(0);

    const selectItem = (option: DropdownItem): void => {
        if (option.onClick) {
            option.onClick();
        }
        setIsComponentVisible(false);
    };

    const mods: Record<string, boolean> = {
        [cls.disabled]: readOnly,
    };

    const onItemKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                const nextItem = options.find(
                    (option) => option.id > hoveredItemId && !option.disabled,
                );
                if (nextItem) {
                    return setHoveredItemId(nextItem.id);
                }
            }
            if (e.key === 'ArrowUp') {
                const prevItem = options.find(
                    (option) => option.id < hoveredItemId && !option.disabled,
                );
                if (prevItem) {
                    return setHoveredItemId(prevItem.id);
                }
            }
            if (e.key === 'Enter') {
                if (hoveredItemId) {
                    const item = options.find(
                        (option) => option.id === hoveredItemId,
                    );
                    if (item?.onClick) {
                        return item.onClick();
                    }
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
        },
        [hoveredItemId, isComponentVisible, options, setIsComponentVisible],
    );

    const isHovered = (option?: OptionsType) => {
        if (hoveredItemId && hoveredItemId === option?.id) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        if (isComponentVisible) {
            window.addEventListener('keydown', onItemKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onItemKeyDown);
        };
    }, [isComponentVisible, onItemKeyDown]);

    return (
        <div
            className={classNames(cls.dropDown, mods, [className, cls[theme]])}
            ref={ref}
        >
            <div
                className={classNames(cls.dropDownChip, {}, [className])}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
                {trigger}
            </div>
            {isComponentVisible && (
                <div className={classNames(cls.dropDownList)}>
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => selectItem(option)}
                                className={classNames(cls.option, {
                                    [cls.selected]: isHovered(option),
                                    [cls.disabled]: option.disabled,
                                })}
                            >
                                {option.href ? (
                                    <Button
                                        as={Link}
                                        to={option.href}
                                        disabled={option.disabled}
                                    >
                                        {option.content}
                                    </Button>
                                ) : (
                                    <Button disabled={option.disabled}>
                                        {option.content}
                                    </Button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
