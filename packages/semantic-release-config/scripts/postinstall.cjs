'use strict'

/* eslint no-console: "off", n/no-process-exit: "off", no-undefined: "off" -- CLI app that gives users feedback */

const fs = require('node:fs')
const path = require('node:path')
// noinspection NpmUsedModulesInstalled
const process = require('node:process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('release')

if (foundConfig.length > 0) {
  console.log('semantic-release-config: Found existing semantic-release config file, skipping creation.')
  console.log('semantic-release-config: If you want to create a new config file, please remove the existing one.')
  console.log(`semantic-release-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.releaserc.json')
const fileConfigObject = {
  extends: ['@ivuorinen/semantic-release-config']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
