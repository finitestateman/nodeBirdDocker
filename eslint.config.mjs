import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {files: ['src/**/*.js'], languageOptions: {sourceType: 'commonjs'}},
    {languageOptions: { globals: {...globals.browser, ...globals.node} }},
    pluginJs.configs.recommended,
    {
        rules: {
            'semi': 'error',
            'no-extra-semi': 'error',
            'quotes': ['error', 'single'], // Single quotes를 사용함
            'indent': ['error', 4],
            'comma-dangle': ['error', 'only-multiline'],
            // 'comma-dangle': ['error', 'always-multiline']
            'eol-last': ['error', 'always'],

            'no-var': 'error',
            'prefer-const': 'error',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',

            'no-empty-function': 'error',
            'func-names': ['error', 'as-needed'],

            'curly': ['error', 'all'],
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            'camelcase': ['error', { 'properties': 'never' }],
            'arrow-body-style': ['error', 'as-needed'],
            'capitalized-comments': ['error'],
            'class-methods-use-this': 'error',
            'consistent-return': 'error',
            'consistent-this': ['error', 'that'],
            'default-case': 'error',
            'default-param-last': ['error'],
            'dot-notation': 'error',
            'eqeqeq': 'error',
            'guard-for-in': 'error',
            'no-multi-assign': 'error',
            'no-empty': 'error',
            'no-eval': 'error',
            'no-extra-boolean-cast': 'error',
            'no-implicit-coercion': 'error',
            'no-implicit-globals': 'error',
            'no-global-assign': 'error',
            'no-invalid-this': 'error',
            // 'no-nested-tenary': 'error',
            'no-octal': 'error',
            'no-plusplus': 'error',
            'no-redeclare': 'error',
            'no-throw-literal': 'error',
            // 'no-unneeded-tenary': 'error',
            'no-unused-expressions': 'error',
            'no-useless-catch': 'error',
            'no-useless-escape': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-destructuring': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-object-spread': 'error',
            // 'prefer-promise-reject-errors': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'require-await': 'error',
            'object-curly-spacing': ['error', 'always'],
            'keyword-spacing': 'error',
            // 'space-before-function': 'error',
            'space-infix-ops': 'error'
        }
    }
];

