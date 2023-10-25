'use strict'

const fs = require('fs')
const path = require('path')
const process = require('process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('commitlint')

if (foundConfig.length > 0) {
  console.log('commitlint-config: Found existing commitlint config file, skipping creation.')
  console.log('commitlint-config: If you want to create a new config file, please remove the existing one.')
  console.log(`commitlint-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.commitlintrc.json')
const fileConfigObject = {
  extends: ['@ivuorinen/commitlint-config']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
