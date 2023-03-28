import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n';

export const LanguageDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <StoryComponent />
    </I18nextProvider>
);
