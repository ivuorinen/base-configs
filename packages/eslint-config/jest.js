'use strict'

module.exports = {
  env: {
    'jest/globals': true
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style', 'prettier'],
  plugins: ['jest']
}
