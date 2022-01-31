module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    `react-app`,
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'import',
    'jest',
    'testing-library',
    'prettier',
    'unicorn',
    '@typescript-eslint',
  ],
  env: {
    'es6': true,
    'browser': true,
    'node': true,
    'jest/globals': true,
  },
  globals: {
    __PATH_PREFIX__: true,
    window: true,
    require: true,
    console: true,
  },
  rules: {
    'react/jsx-no-bind': [0],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
        ignore: ['SEO.tsx'],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: false,
        },
      },
    ],
    'unicorn/no-null': 'off',
  },
}
