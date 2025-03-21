'use strict'

/* eslint no-console: "off", n/no-process-exit: "off" -- CLI app that gives users feedback */

const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')
const checkConfig = require('@ivuorinen/config-checker')
const foundConfig = checkConfig('eslint')

if (foundConfig.length > 0) {
  console.log('eslint-config: Found existing eslint config file, skipping creation.')
  console.log('eslint-config: If you want to create a new config file, please remove the existing one.')
  console.log(`eslint-config: Found config files at: ${foundConfig.join(', ')}`)
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, 'eslint.config.mjs')
const fileConfig = `import ivuorinenConfig from '@ivuorinen/eslint-config';

export default [
  ...ivuorinenConfig,

  // your modifications
  {
    rules: {
      // "no-unused-vars": "warn"
    }
  }
];
`

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileConfig)
}
