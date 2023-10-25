'use strict'

const fs = require('fs')
const path = require('path')
const process = require('process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('eslint')

if (foundConfig.length > 0) {
  console.log('eslint-config: Found existing eslint config file, skipping creation.')
  console.log('eslint-config: If you want to create a new config file, please remove the existing one.')
  console.log(`eslint-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.eslintrc.json')
const fileConfigObject = {
  extends: ['@ivuorinen']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
