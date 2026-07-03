const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier/flat');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  ...expoConfig,
  eslintConfigPrettier,
  {
    rules: {
      'no-console': 'warn',
    },
  },
]);
