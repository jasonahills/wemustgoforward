module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
  ],
  rules: {
    "indent": ["error", 2],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
};