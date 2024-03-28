# @ivuorinen/browserslist-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> ivuorinen's shareable configuration for [`Browserslist`][browserslist-link].

## Table of Contents <!-- omit in toc -->

- [Supported Browsers](#supported-browsers)
- [Installation](#installation)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Supported Browsers

> 'defaults and fully supports es6-module', 'maintained node versions'

See the up to date list of supported browsers in the [Browserslist docs](https://browsersl.ist/#q=%22browserslist%22%3A+%5B%0A++%22defaults+and+fully+supports+es6-module%22%2C%0A++%22maintained+node+versions%22%0A%5D).

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @ivuorinen/browserslist-config --save-dev

# Yarn
yarn add @ivuorinen/browserslist-config --dev
```

After installing it, a _`.browserslistrc`_ file will be created automatically in the project's root folder with the following configuration:

```json
extends @ivuorinen/browserslist-config
```

## Documentations

Read the [Browserslist docs][browserslist-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[browserslist-docs-link]: https://github.com/browserslist/browserslist
[browserslist-link]: https://github.com/browserslist/browserslist
[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/browserslist-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/browserslist-config
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs
