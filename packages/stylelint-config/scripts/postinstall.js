'use strict'

const fs = require('fs')
const path = require('path')
const process = require('process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('stylelint')

if (foundConfig.length > 0) {
  console.log(
    'stylelint-config: Found existing stylelint config file, skipping creation.'
  )
  console.log(
    'stylelint-config: If you want to create a new config file, please remove the existing one.'
  )
  console.log(
    `stylelint-config: Found config files at: ${foundConfig.join(', ')}`
  )
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.stylelintrc.json')

const fileConfigObject = {
  extends: ['@ivuorinen/stylelint-config/css']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
