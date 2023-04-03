import { CSSProperties, memo } from 'react';
import classNames from 'classnames';
import cls from './Icon.module.scss';

interface IconProps {
   className?: string;
   Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
   width?: string | number;
   height?: string | number;
}

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, height, width,
    } = props;

    const styles: CSSProperties = {
        width: width || 40,
        height: height || 40,
    };

    return (
        <Svg className={classNames(cls.icon, {}, [className])} style={styles} />
    );
});
