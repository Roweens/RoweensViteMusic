import { Story } from '@storybook/react';
// eslint-disable-next-line roweens-plugin/upper-layer-imports
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Themes } from 'shared/const/theme';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div id={`${theme}`} className="test_app" style={{ width: '100%' }}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
