module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'jsx-a11y', 'import'],
  extends: ['xo', 'xo-react', 'react-app', 'prettier', 'prettier/react'],
  globals: {
    expect: true,
    describe: true,
    it: true,
    fixture: true,
    test: true,
    jest: true,
    document: true,
    window: true,
    fetch: true,
    navigator: true,
  },
  rules: {
    'space-before-function-paren': 0,
    'react/jsx-no-useless-fragment': 0,
    quotes: 0,
    'operator-linebreak': 0,
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeSelfClosing: 'always',
      },
    ],
  },
};
