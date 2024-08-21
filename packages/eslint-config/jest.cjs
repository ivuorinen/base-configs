const jest = require('eslint-plugin-jest')

/**
 * eslint configuration for jest.
 * @type { import('eslint').Linter.Config[] } config
 */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...jest.globals
      }
    }
  },
  jest.configs['flat/recommended'],
  jest.configs['flat/style'],
  {
    rules: {
      ...jest.rules['flat/recommended'].rules
    },
    plugins: {
      jest
    }
  }
]
