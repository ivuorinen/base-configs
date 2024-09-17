# @ivuorinen/base-configs <!-- omit in toc -->

[![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> A collection of base configs for code quality and linting tools. Heavily based on `@demartini/base-configs`

## Table of Contents <!-- omit in toc -->

- [About](#about)
- [Usage](#usage)
- [Available Configurations](#available-configurations)
- [Badge](#badge)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## About

This Monorepo provides a collection of shareable configurations for building, linting, testing, formatting, and releasing tools to make configurations consistent across projects and provide an easy configuration mechanism.

## Usage

Check the _`README`_ of each package in the [`packages`][packages-link] directory for specific usage instructions.

## Meta package

All of the linting rules can be installed by running the following command:

```bash
npm i -D @ivuorinen/base-configs
```

| Package                             | Version |
| ----------------------------------- | ------- |
| [@ivuorinen/base-configs][meta-npm] | [![@ivuorinen/base-configs][meta-badge]][meta-npm] |

You can find the meta package in [packages/base-configs](./packages/base-configs).

## Available Configurations

| Tool                                      | Package                                            | Version                                                                               |
|-------------------------------------------|----------------------------------------------------|---------------------------------------------------------------------------------------|
| [Browserslist][browserslist-link]         | [@ivuorinen/browserslist-config][pkg-browserlist]  | [![@ivuorinen/browserslist-config][browserslist-badge]][browserslist-npm]             |
| [CommitLint][commitlint-link]             | [@ivuorinen/commitlint-config][pkg-commitlint]     | [![@ivuorinen/commitlint-config][commitlint-badge]][commitlint-npm]                   |
| [ESLint][eslint-link]                     | [@ivuorinen/eslint-config][pkg-eslint]             | [![@ivuorinen/eslint-config][eslint-badge]][eslint-npm]                               |
| [MarkdownLint][markdownlint-link]         | [@ivuorinen/markdownlint-config][pkg-markdownlint] | [![@ivuorinen/markdownlint-config][markdownlint-badge]][markdownlint-npm]             |
| [Prettier][prettier-link]                 | [@ivuorinen/prettier-config][pkg-prettier]         | [![@ivuorinen/prettier-config][prettier-badge]][prettier-npm]                         |
| [semantic-release][semantic-release-link] | [@ivuorinen/semantic-release-config][pkg-src]      | [![@ivuorinen/semantic-release-config][semantic-release-badge]][semantic-release-npm] |
| [stylelint][stylelint-link]               | [@ivuorinen/stylelint-config][pkg-stylelint]       | [![@ivuorinen/stylelint-config][stylelint-badge]][stylelint-npm]                      |

[pkg-browserlist]: ./packages/browserslist-config
[pkg-commitlint]: ./packages/commitlint-config
[pkg-eslint]: ./packages/eslint-config
[pkg-markdownlint]: ./packages/markdownlint-config
[pkg-prettier]: ./packages/prettier-config
[pkg-src]: ./packages/semantic-release-config
[pkg-stylelint]: ./packages/stylelint-config

## Badge

Show the world that you are using ivuorinen's code style in your project by including the badge in your readme.

[![ivuorinen's Code Style](https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square)](https://github.com/ivuorinen/base-configs)

```md
[![ivuorinen's Code Style](https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square)](https://github.com/ivuorinen/base-configs)
```

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See CHANGELOG for a human-readable history of changes in each package own folder.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[packages-link]: ./packages
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
[meta-badge]: https://img.shields.io/npm/v/@ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[meta-npm]: https://www.npmjs.com/package/@ivuorinen/base-configs
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs
[browserslist-badge]: https://img.shields.io/npm/v/@ivuorinen/browserslist-config?style=flat-square&labelColor=292a44&color=663399
[browserslist-link]: https://github.com/browserslist/browserslist
[browserslist-npm]: https://www.npmjs.com/package/@ivuorinen/browserslist-config
[commitlint-badge]: https://img.shields.io/npm/v/@ivuorinen/commitlint-config?style=flat-square&labelColor=292a44&color=663399
[commitlint-link]: https://github.com/conventional-changelog/commitlint
[commitlint-npm]: https://www.npmjs.com/package/@ivuorinen/commitlint-config
[eslint-badge]: https://img.shields.io/npm/v/@ivuorinen/eslint-config?style=flat-square&labelColor=292a44&color=663399
[eslint-link]: https://github.com/eslint/eslint
[eslint-npm]: https://www.npmjs.com/package/@ivuorinen/eslint-config
[markdownlint-badge]: https://img.shields.io/npm/v/@ivuorinen/markdownlint-config?style=flat-square&labelColor=292a44&color=663399
[markdownlint-link]: https://github.com/DavidAnson/markdownlint
[markdownlint-npm]: https://www.npmjs.com/package/@ivuorinen/markdownlint-config
[prettier-badge]: https://img.shields.io/npm/v/@ivuorinen/prettier-config?style=flat-square&labelColor=292a44&color=663399
[prettier-link]: https://github.com/prettier/prettier
[prettier-npm]: https://www.npmjs.com/package/@ivuorinen/prettier-config
[semantic-release-badge]: https://img.shields.io/npm/v/@ivuorinen/semantic-release-config?style=flat-square&labelColor=292a44&color=663399
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-npm]: https://www.npmjs.com/package/@ivuorinen/semantic-release-config
[stylelint-badge]: https://img.shields.io/npm/v/@ivuorinen/stylelint-config?style=flat-square&labelColor=292a44&color=663399
[stylelint-link]: https://github.com/stylelint/stylelint
[stylelint-npm]: https://www.npmjs.com/package/@ivuorinen/stylelint-config
