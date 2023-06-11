import {
    FC,
    ImgHTMLAttributes,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';
import classNames from 'classnames';
import { Mods } from 'shared/types/Mods';
import cls from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    squared?: boolean;
    cover?: boolean;
}

export const AppImage: FC<AppImageProps> = (props) => {
    const {
        className,
        src,
        alt = 'image',
        errorFallback,
        fallback,
        squared = false,
        cover = false,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();

        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    const mods: Mods = {
        [cls.squared]: squared,
        [cls.cover]: cover,
    };

    return (
        <img
            className={classNames(cls.appImage, mods, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
};
