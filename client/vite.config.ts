/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitestConfig: VitestUserConfigInterface = {
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'dotenv/config',
    },
};

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        build: {
            outDir: '../dist',
        },
        plugins: [svgr(), react(), tsconfigPaths()],
        define: {
            __IS_DEV__: process.env.VITE_IS_DEV
                ? JSON.stringify(true)
                : JSON.stringify(false),
            __API_URL__: process.env.VITE_IS_DEV
                ? JSON.stringify('http://localhost:5000/api/')
                : JSON.stringify('http://production-url.com'),
            __STATIC_URL__: process.env.VITE_IS_DEV
                ? JSON.stringify('http://localhost:5000/')
                : JSON.stringify('http://production-url.com'),
            __PROJECT__: JSON.stringify('Front'),
        },
        resolve: {
            preserveSymlinks: true,
        },
        test: vitestConfig.test,
    };
});
