// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Possible Errors
    'no-console': 'warn',
    'no-debugger': 'error',

    // Best Practices
    eqeqeq: ['error', 'always'],

    // React
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+

    // Accessibility
    'jsx-a11y/anchor-is-valid': 'warn',
  },
}
