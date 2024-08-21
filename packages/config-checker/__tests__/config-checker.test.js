'use strict'

const path = require('path')
const configChecker = require('..')
const assert = require('assert').strict

const configs = configChecker('test', path.join(__dirname, 'fixtures'))

/**
 * Checks if an array contains a file.
 *
 * @param {string[]} configs - The array of configs to check.
 * @param {string} file - The file to check for.
 * @returns {boolean} - True if the array contains the file.
 */
const arrayContains = (configs = [], file = '') => configs.some(config => config === file)

assert.ok(arrayContains(configs, '.testrc'))
assert.ok(arrayContains(configs, '.config/testrc.ts'))

console.info('configChecker tests passed')
