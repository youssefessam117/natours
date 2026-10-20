const js = require('@eslint/js');
const globals = require('globals');
const nodePlugin = require('eslint-plugin-n');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  { ignores: ['node_modules/', 'public/'] },
  js.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      'no-console': 'warn',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^(req|res|next|val)$' },
      ],
      'n/no-process-exit': 'off',
      'prettier/prettier': 'warn',
    },
  },
  {
    // this file only runs during development, so requiring devDependencies is fine
    files: ['eslint.config.js'],
    rules: { 'n/no-unpublished-require': 'off' },
  },
];
