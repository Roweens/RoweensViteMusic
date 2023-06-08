import { createContext } from 'react';
import { Themes } from 'shared/const/theme';

interface ThemeContextValues {
    theme?: Themes | null;
    setTheme?: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextValues>({});
