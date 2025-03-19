module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '../../eslint/.eslint-common.js',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    'import/order': withDefaultImportOrderGroups([
      // add application-specific frameworks patterns here
      { pattern: 'react', group: 'external', position: 'before' },
      { pattern: 'react/**', group: 'external', position: 'before' },
      { pattern: 'react-**', group: 'external', position: 'before' },
      { pattern: 'react-icons/**', group: 'external', position: 'before' },
      { pattern: 'antd**', group: 'external', position: 'before' },
    ]),
  },
}
