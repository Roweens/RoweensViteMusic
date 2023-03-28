import {
    ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../../../shared/const/localStorage';
import { ThemeContext, Themes } from '../lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Themes,
    children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

export const ThemeProvider = (props : ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Themes>(initialTheme || defaultTheme);

    document.body.className = theme;
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
