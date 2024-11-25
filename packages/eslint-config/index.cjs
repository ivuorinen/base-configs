'use strict'

const globals = require('globals')
const configEslint = require('eslint-config-eslint')
const configPrettier = require('eslint-config-prettier')
const pluginImport = require('eslint-plugin-import')
const pluginJs = require('@eslint/js')
const pluginN = require('eslint-plugin-n')
const pluginPromise = require('eslint-plugin-promise')

/**
 * @type { import("eslint").Linter.Config[] } config eslint configuration.
 */
module.exports = [
  ...configEslint,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn'
    },
    rules: {
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true
        }
      ]
    }
  },
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
      promise: pluginPromise
    }
  },
  configPrettier,
  {
    ignores: ['coverage/', 'dist/', 'lib/', 'node_modules/']
  }
]
