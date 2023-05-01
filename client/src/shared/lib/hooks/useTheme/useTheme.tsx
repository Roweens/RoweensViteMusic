import { useContext } from 'react';
import { Themes } from 'shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localStorage';
import { ThemeContext } from '../../../context/ThemeContext/ThemeContext';

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
