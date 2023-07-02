import { CSSProperties, memo } from 'react';
import classNames from 'classnames';
import { Mods } from 'shared/types/Mods';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    width?: string | number;
    height?: string | number;
    stroke?: boolean;
    fill?: boolean;
    inverted?: boolean;
    disabled?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        height,
        width,
        fill = true,
        stroke,
        inverted,
        disabled = false,
    } = props;

    const styles: CSSProperties = {
        width: width || 40,
        height: height || 40,
    };

    const mods: Mods = {
        [cls.fill]: fill,
        [cls.disabled]: disabled,
        [cls.stroke]: stroke,
        [cls.inverted]: inverted,
    };

    return (
        <Svg
            className={classNames(cls.icon, mods, [className])}
            style={styles}
        />
    );
});
