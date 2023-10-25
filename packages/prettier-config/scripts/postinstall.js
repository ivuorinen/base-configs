'use strict'

const fs = require('fs')
const path = require('path')
const process = require('process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('prettier')

if (foundConfig.length > 0) {
  console.log('prettier-config: Found existing prettier config file, skipping creation.')
  console.log('prettier-config: If you want to create a new config file, please remove the existing one.')
  console.log(`prettier-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.prettierrc.json')
const fileConfigObject = '@ivuorinen/prettier-config'

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
