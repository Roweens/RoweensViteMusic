import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const config: StorybookViteConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        babelModeV7: true,
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [tsconfigPaths(), svgr()],
            define: {
                __IS_DEV__: true,
                __API_URL__: JSON.stringify(''),
                __PROJECT__: JSON.stringify('Storybook'),
            },
        });
    },
};

export default config;
