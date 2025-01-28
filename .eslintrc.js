module.exports = {
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@babel/eslint-parser', // Usar Babel para parsear el código JavaScript
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'vue/multi-word-component-names': ['error', {
        'ignores': ['Home', 'About', 'Contact']
      }],
    },
  };
  