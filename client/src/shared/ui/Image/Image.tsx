import {
    CSSProperties, memo, useMemo,
} from 'react';
import classNames from 'classnames';
import { Mods } from 'shared/types/Mods';
import cls from './Image.module.scss';

interface ImageProps {
  src:string,
  className?: string;
  width?: number | string,
  height?: number | string,
  alt?: string,
  squared?: boolean
  cover?: true
}

export const Image = memo((props: ImageProps) => {
    const {
        className, src, alt = '', height, width, squared = false, cover = false,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: width || 100,
        height: height || 100,
    }), [width, height]);

    const mods: Mods = {
        [cls.squared]: squared,
        [cls.cover]: cover,
    };

    return (
        <img src={src} className={classNames(cls.image, mods, [className])} alt={alt} style={styles} />

    );
});
