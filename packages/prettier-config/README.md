# @ivuorinen/prettier-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> ivuorinen's shareable configuration for [`Prettier`][prettier-link].

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @ivuorinen/prettier-config --save-dev

# Yarn
yarn add @ivuorinen/prettier-config --dev
```

After installing it, a _`.prettierrc.json`_ file will be created automatically in the project's root folder with the following configuration:

```json
"@ivuorinen/prettier-config"
```

> Note: This method does **not** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a _`.prettierrc.js`_ file and export the modifications, e.g:
>
> ```js
> module.exports = {
>   ...require('@ivuorinen/prettier-config'),
>   // Add custom options below:
>   semi: true
> }
> ```

## Documentations

Read the [Prettier docs][prettier-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[prettier-docs-link]: https://prettier.io
[prettier-link]: https://github.com/prettier/prettier
[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/prettier-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/prettier-config
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs
