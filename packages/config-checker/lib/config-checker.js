'use strict'

const fs = require('fs')
const path = require('path')
// noinspection NpmUsedModulesInstalled
const process = require('process')
const configurationPaths = require('./configuration-paths')

/**
 * Checks for the existence of a configuration file.
 * @param {string} moduleName - The name of the module to check for.
 * @param {string} pathPrefix - The prefix to add to the path.
 * @returns {string[]} - The paths to the configuration files.
 */
const configChecker = (moduleName, pathPrefix = '') => {
  let searchPath = process.env.INIT_CWD
  if (pathPrefix.length > 0) {
    searchPath = pathPrefix
  }

  const allFiles = configurationPaths(moduleName)

  if (process.env.DEBUG) {
    const filesWithPath = allFiles.map(file => path.join(searchPath, file))
    console.log(filesWithPath)
  }

  // Look for config files in defined search path, and return found.
  return allFiles.filter(file => fs.existsSync(path.join(searchPath, file)))
}

module.exports = configChecker
