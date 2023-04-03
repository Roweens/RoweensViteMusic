/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { memo } from 'react';
import useComponentVisible from 'shared/lib/hooks/UseVisible/UseComponentVisible';
import { Mods } from 'shared/types/Mods';
import { ReactComponent as DownArrow } from './assets/down.svg';
import cls from './DropDown.module.scss';

export enum ThemeDropDown {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    FILLED = 'filled',
}

export type OptionsType = {
    id: number;
    label: string | number;
    value: string;
};

interface DropDownProps {
    className?: string;
    options: OptionsType[];
    state?: string;
    onClick?: (value: any) => void;
    theme?: ThemeDropDown;
    isСollapsed?: boolean;
    readOnly?:boolean;
}

export const DropDown = memo((props: DropDownProps) => {
    const {
        className,
        options,
        state,
        onClick,
        isСollapsed,
        theme = ThemeDropDown.OUTLINED,
        readOnly = false,
    } = props;

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(
        isСollapsed || false,
    );

    const selectItem = (value: string | number): void => {
        setIsComponentVisible(false);
        onClick?.(value);
    };

    const mods: Record<string, boolean> = {
        [cls.disabled]: readOnly,
    };

    return (
        <div className={classNames(cls.dropDown, mods, [className, cls[theme]])} ref={ref}>
            <div
                className={classNames(cls.dropDownChip, {}, [className])}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
                <h5>{state}</h5>
                <DownArrow />
            </div>
            {isComponentVisible && (
                <div className={classNames(cls.dropDownList)}>
                    <ul>
                        {options.map((option) => (
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                            <li
                                key={option.id}
                                onClick={() => selectItem(option.value)}
                                className={classNames({
                                    [cls.selected]: option.value === state,
                                })}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
