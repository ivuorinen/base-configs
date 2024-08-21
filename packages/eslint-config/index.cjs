const globals = require('globals')
const pluginJs = require('@eslint/js')
const standard = require('eslint-config-standard')
const pluginN = require('eslint-plugin-n')
const pluginPromise = require('eslint-plugin-promise')
const pluginImport = require('eslint-plugin-import')
const pluginPrettier = require('eslint-plugin-prettier')
const pluginSonarJS = require('eslint-plugin-sonarjs')

/**
 * @type { import("eslint").Linter.Config[] } config eslint configuration.
 */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 12
      }
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      n: pluginN,
      import: pluginImport,
      promise: pluginPromise,
      prettier: pluginPrettier,
      sonarjs: pluginSonarJS
    },
    rules: standard.rules
  },
  {
    ignores: ['coverage/', 'dist/', 'lib/', 'node_modules/']
  }
]
