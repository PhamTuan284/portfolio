const { withDefaultImportOrderGroups } = require('./shared-import-order');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  env: {
    es2022: true,
    jest: true,
    browser: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.base.json',
  },

  plugins: ['@nx', '@typescript-eslint', 'prettier'],

  extends: [
    'plugin:@typescript-eslint/recommended',

    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',

    'plugin:unicorn/recommended',

    'plugin:prettier/recommended',
  ],

  rules: {
    // Customizations
    'import/order': withDefaultImportOrderGroups(),
    'import/no-cycle': 'warn',
    'import/extensions': 'off',
    'import/no-import-module-exports': 'warn',
    'import/prefer-default-export': 'off',
    'default-case': 'off',
    'no-use-before-define': 'warn',
    'no-restricted-exports': 'warn',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-async-promise-executor': 'warn',
    'lines-between-class-members': [
      'error',
      {
        enforce: [
          { blankLine: 'never', prev: 'field', next: 'field' },
          { blankLine: 'always', prev: '*', next: 'method' },
        ],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'while' },
      { blankLine: 'always', prev: '*', next: 'do' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'case', next: ['case', 'default'] },
    ],

    // @typescript-eslint rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/dot-notation': 'off', // not much value
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-loop-func': 'warn',
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-floating-promises': 'warn',

    // reactjs
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'react/prop-types': 'warn',

    // FUTURE IMPROVEMENT
    // rules that results errors but takes time to fix immediately - consider fixing in the future
    'array-callback-return': 'warn',
    camelcase: 'warn',
    'class-methods-use-this': 'warn',
    'consistent-return': 'warn',
    eqeqeq: 'warn',
    'global-require': 'warn',
    'guard-for-in': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'new-cap': 'warn',
    'no-await-in-loop': 'warn',
    'no-continue': 'warn',
    'no-extend-native': 'warn',
    'no-fallthrough': 'off', // some edge cases can still use this characteristic of switch-case
    'no-labels': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-multi-assign': 'warn',
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'off', // no value
    'no-promise-executor-return': 'warn',
    'no-restricted-globals': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-throw-literal': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-promise-reject-errors': 'warn',
    radix: 'warn',
    'require-await': 'warn',
    'max-classes-per-file': 'warn',

    // Unicorn rules
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/error-message': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/filename-case': 'warn',
    'unicorn/no-array-callback-reference': 'warn',
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-await-expression-member': 'warn',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-new-array': 'warn',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'warn',
    'unicorn/no-process-exit': 'warn',
    'unicorn/no-this-assignment': 'warn',
    'unicorn/no-useless-promise-resolve-reject': 'warn',
    'unicorn/prefer-array-some': 'warn',
    'unicorn/prefer-code-point': 'warn',
    'unicorn/prefer-node-protocol': 'off', // causes typescript error
    'unicorn/prefer-logical-operator-over-ternary': 'warn',
    'unicorn/prefer-module': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-spread': 'off', // Off due to auto fix issue which convert string into array of characters
    'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
    'unicorn/prefer-top-level-await': 'warn',
    'unicorn/prevent-abbreviations': 'off', // will only rename in the definition but not in referenced files
    'unicorn/text-encoding-identifier-case': 'warn',
    'unicorn/no-static-only-class': 'warn',
    'unicorn/no-document-cookie': 'warn',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-query-selector': 'warn',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: ['@parxl/fe-common'],
            depConstraints: [
              // {
              //   sourceTag: '*',
              //   onlyDependOnLibsWithTags: ['*'],
              // },
              // {
              //   sourceTag: 'app',
              //   onlyDependOnLibsWithTags: ['lib'],
              // },
              // {
              //   sourceTag: 'lib',
              //   onlyDependOnLibsWithTags: ['common-lib'],
              // },
            ],
          },
        ],
      },
    },
  ],
};
