module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'emotion'],
  rules: {
    'react/no-unused-prop-types': 1,
    'linebreak-style': 'off',
    'max-len': ['error', { code: 100 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [2, { required: { some: ['nesting', 'id'] } }],
    'no-use-before-define': ['error', { functions: false }],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': 'off'
  }
};
