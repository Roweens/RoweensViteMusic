import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../../../shared/const/localStorage';
import { ThemeContext, Themes } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Themes;

        switch (theme) {
        case Themes.DARK:
            newTheme = Themes.LIGHT;
            break;
        case Themes.LIGHT:
            newTheme = Themes.DARK;
            break;
        default:
            newTheme = Themes.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Themes.LIGHT, toggleTheme };
};
