import classNames from 'classnames';
import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Switch } from 'shared/ui/Switch/Switch';
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
            <Switch checked={theme === 'dark'} name="theme" onClick={onThemeToggle} options={['Dk', 'Lht']} />
        </div>
    );
});
