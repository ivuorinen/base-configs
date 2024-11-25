'use strict'

/* eslint no-console: "off", n/no-process-exit: "off" -- CLI app that gives users feedback */

const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('browserslist')

if (foundConfig.length > 0) {
  console.log('browserslist-config: Found existing browserslist config file, skipping creation.')
  console.log('browserslist-config: If you want to create a new config file, please remove the existing one.')
  console.log(`browserslist-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.browserslistrc')
const fileConfigObject = 'extends @ivuorinen/browserslist-config'

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileConfigObject)
}
