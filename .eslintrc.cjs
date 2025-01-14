/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "indent": ["error", 4],
    "semi": ["error", "never"]
  }
}
