import { Story } from '@storybook/react';
import { ThemeProvider, Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div id={`${theme}`} className="app" style={{ width: '100%' }}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
