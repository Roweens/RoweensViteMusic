import classNames from 'classnames';
import { memo } from 'react';
import { Switch } from 'shared/ui/Switch/Switch';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme, theme } = useTheme();

    const onThemeToggle = () => {
        toggleTheme();
    };

    return (
        <div className={classNames(cls.themeSwitcher, {}, [className])}>
            <Switch
                checked={theme === 'dark'}
                name="theme"
                onClick={onThemeToggle}
                options={['Dk', 'Lht']}
            />
        </div>
    );
});
