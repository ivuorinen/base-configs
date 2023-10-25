# `@ivuorinen/config-checker` <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

Check for existence of common configuration files in usually used locations.

## Installation

Install `this package` as a _`dependencies`_:

```sh
# npm
npm install @ivuorinen/config-checker --save

# Yarn
yarn add @ivuorinen/config-checker
```

## Usage

```js
const configChecker = require('@ivuorinen/config-checker')

// Check for existance of configuration files.
// Module name for Eslint would be 'eslint' for example.
const configFiles = configChecker('module-name')

if (configFiles.length > 0) {
  console.log('Found configuration files', configFiles)
} else {
  console.log('No configuration files found')
}
```

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[changelog-link]: ./CHANGELOG.md
[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/config-checker?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/config-checker
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs
