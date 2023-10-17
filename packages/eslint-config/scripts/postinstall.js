'use strict'

const fs = require('fs')
const path = require('path')
const process = require('process')

const findCosmicConfig = (moduleName) => {
  const files = [
    `.${moduleName}rc`,
    `.${moduleName}rc.json`,
    `.${moduleName}rc.yaml`,
    `.${moduleName}rc.yml`,
    `.${moduleName}rc.js`,
    `.${moduleName}rc.ts`,
    `.${moduleName}rc.mjs`,
    `.${moduleName}rc.cjs`,
    `.${moduleName}.jsonc`,
    `.${moduleName}.yaml`,
    `.${moduleName}.json`,
    `${moduleName}rc`,
    `${moduleName}rc.json`,
    `${moduleName}rc.yaml`,
    `${moduleName}rc.yml`,
    `${moduleName}rc.js`,
    `.config/${moduleName}rc.ts`,
    `.config/${moduleName}rc.cjs`,
    `${moduleName}.config.js`,
    `${moduleName}.config.ts`,
    `${moduleName}.config.mjs`,
    `${moduleName}.config.cjs`
  ]

  const found = files.filter((file) => fs.existsSync(path.join(process.env.INIT_CWD, file)))

  return found.length > 0
}

if (findCosmicConfig('eslint')) {
  console.log('eslint-config: Found existing eslint config file, skipping creation.')
  console.log('eslint-config: If you want to create a new config file, please remove the existing one.')
  process.exit(0)
}

const filePath = path.join(process.env.INIT_CWD, '.eslintrc.json')

const fileConfigObject = {
  extends: ['@ivuorinen']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
