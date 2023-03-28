import { createContext } from 'react';

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light'
}

interface ThemeContextValues {
  theme?: Themes | null;
  setTheme?: (theme: Themes) => void
}

// export const defaultTheme = localStorage.getItem('theme') as Themes || Themes.DARK;

export const ThemeContext = createContext<ThemeContextValues>({});
