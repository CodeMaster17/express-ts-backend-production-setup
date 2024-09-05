// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            eslintConfigPrettier
        ],
        rules: {
            // this is done so that there is no console while we push code to github production
            // large number of consoles slow down the performance of the code
            'no-console': 'off',
            quotes: ['error', 'single', { allowTemplateLiterals: true }],
        }
    }
);