module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'roweens-plugin',
        'unused-imports',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx', '.ts'],
            },
        ],
        'consistent-return': 'warn',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        // 'i18next/no-literal-string': [
        //     'error',
        //     {
        //         markupOnly: true,
        //         ignoreAttribute: ['data-testid', 'to', 'name'],
        //     },
        // ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 170,
            },
        ],
        // 'jsx-a11y/no-static-element-interactions': 'off',
        // 'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'roweens-plugin/path-checker': 'error',
        'roweens-plugin/fsd-public-api-imports': [
            'error',
            {
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'roweens-plugin/upper-layer-imports': [
            'error',
            {
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'react/no-array-index-key': 'warn',
        'no-nested-ternary': 'warn',
        'arrow-body-style': 'off',
    },
    // globals: {
    //       __IS_DEV__: true,
    //       __API__: true,
    //       __PROJECT__: true,
    // },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                camelcase: 'off',
            },
        },
    ],
};
