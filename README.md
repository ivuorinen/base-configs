# @ivuorinen/base-configs <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

This is a meta package for all my base configs.

The main reason for this package is to make it easier to use these configs in other projects, and to update them all at once. No more pull requests to update all the configs one at a time!

[![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> A collection of base configs for code quality and linting tools. Heavily based on `@demartini/base-configs`

## Table of Contents <!-- omit in toc -->

- [Usage](#usage)
- [Available Configurations](#available-configurations)
- [Badge](#badge)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Usage

```bash
# npm
npm install @ivuorinen/base-configs --save-dev

# yarn
yarn add @ivuorinen/base-configs --dev
```

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

[pkg-browserlist]: https://www.npmjs.com/package/@ivuorinen/browserlist-config
[pkg-commitlint]: https://www.npmjs.com/package/@ivuorinen/commitlint-config
[pkg-eslint]: https://www.npmjs.com/package/@ivuorinen/eslint-config
[pkg-markdownlint]: https://www.npmjs.com/package/@ivuorinen/markdownlint-config
[pkg-prettier]: https://www.npmjs.com/package/@ivuorinen/prettier-config
[pkg-src]: https://www.npmjs.com/package/@ivuorinen/semantic-release-config
[pkg-stylelint]: https://www.npmjs.com/package/@ivuorinen/stylelint-config

## Badge

Show the world that you are using ivuorinen's code style in your project by including the badge in your readme.

[![ivuorinen's Code Style](https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square)](https://github.com/ivuorinen/base-configs)

```md
[![ivuorinen's Code Style](https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square)](https://github.com/ivuorinen/base-configs)
```

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
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
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/base-configs
