import classNames from 'classnames';
import { memo } from 'react';

import cls from './Switch.module.scss';

type switchOptions = [string, string]

// export enum SwitchSize {
//     MEDIUM = 'medium',
//     LARGE = 'large',
//     EXTRA_LARGE = 'extra-large'
// }

interface SwitchProps {
  name: string;
  options: switchOptions;
  checked: boolean;
  onClick: () => void;
//   size?: SwitchSize
}

export const Switch = memo((props: SwitchProps) => {
    const {
        name, options, checked, onClick,
    } = props;

    // const mods: Record<string, boolean> = {
    //     [cls[size]]: true,
    // };

    return (
        <div className={classNames(cls.switchWrapper)}>
            <input
                type="checkbox"
                className={cls.checkbox}
                name={name}
                id={name}
                checked={checked}
                onClick={onClick}
            />
            <label className={cls.label} htmlFor={name}>
                <span className={cls.inner} data-yes={options[0]} data-no={options[1]} />
                <span className={cls.switch} />
            </label>
        </div>
    );
});
