module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'react/static-property-placement': [
      'error',
      'static public field'
    ],
    'react/state-in-constructor': 'off',
    "no-console": ["error", { allow: ["tron"]}],
    'no-param-reassign': ['error', { 'props': false }],
    "jsx-a11y/control-has-associated-label": [ 2, {
      "labelAttributes": ["label"],
      "controlComponents": ["CustomComponent"],
      "ignoreElements": [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "th",
        "video",
      ],
      "ignoreRoles": [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid",
      ],
      "depth": 3,
    }],
  },
};
