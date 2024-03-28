# @ivuorinen/eslint-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> ivuorinen's shareable configuration for [`ESLint`][eslint-link].

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Available Configurations](#available-configurations)
  - [Jest](#jest)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @ivuorinen/eslint-config --save-dev

# Yarn
yarn add @ivuorinen/eslint-config --dev
```

After installing it, a _`.eslintrc.json`_ file will be created automatically in the project's root folder with the following configuration:

```json
{
  "extends": ["@ivuorinen"]
}
```

## Available Configurations

### Jest

Adds specific rules for the [`Jest`][jest-link] testing framework.

```json
{
  "extends": ["@ivuorinen/eslint-config/jest"]
}
```

## Documentations

Read the [ESLint docs][eslint-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[eslint-docs-link]: https://eslint.org
[eslint-link]: https://github.com/eslint/eslint
[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/eslint-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/eslint-config
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs
[jest-link]: https://jestjs.io
