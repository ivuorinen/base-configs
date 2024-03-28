# @ivuorinen/stylelint-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link] [![license MIT][license-badge]][license-link] [![ivuorinen's Code Style][style-badge]][style-link]

> ivuorinen's shareable configuration for [`stylelint`][stylelint-link].

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [CSS <sub><sup>(Default)</sup></sub>](#css-subsupdefaultsupsub)
  - [SCSS](#scss)
- [Extending the config](#extending-the-config)
- [Documentations](#documentations)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Installation

Install `this config` as a _`devDependencies`_:

```sh
# npm
npm install @ivuorinen/stylelint-config --save-dev

# Yarn
yarn add @ivuorinen/stylelint-config --dev
```

After installing it, a _`.stylelintrc.json`_ file will be created automatically in the project's root folder with the following configuration:

```json
{
  "extends": ["@ivuorinen/stylelint-config/css"]
}
```

## Usage

This package provides configuration for CSS and SCSS, you can choose which one you want to extend:

### CSS <sub><sup>(Default)</sup></sub>

```json
{
  "extends": ["@ivuorinen/stylelint-config/css"]
}
```

### SCSS

```json
{
  "extends": ["@ivuorinen/stylelint-config/scss"]
}
```

## Extending the config

The defined rules can be modified by adding other configurations, plugins or custom rules:

```json
{
  "extends": ["@ivuorinen/stylelint-config/css", "some-other-config-you-use"],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends", "ignores"]
      }
    ]
  }
}
```

## Documentations

Read the [stylelint docs][stylelint-docs-link] for more information.

## Contributing

If you are interested in helping contribute, please take a look at our [contribution guidelines][contributing-link] and open an [issue][issue-link] or [pull request][pull-request-link].

## Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## License

Distributed under the MIT License. See [LICENSE][license-link] for more information.

[changelog-link]: ./CHANGELOG.md
[stylelint-docs-link]: https://stylelint.io
[stylelint-link]: https://github.com/stylelint/stylelint
[contributing-link]: https://github.com/ivuorinen/.github/blob/main/CONTRIBUTING.md
[issue-link]: https://github.com/ivuorinen/base-configs/issues
[license-badge]: https://img.shields.io/github/license/ivuorinen/base-configs?style=flat-square&labelColor=292a44&color=663399
[license-link]: ./LICENSE
[npm-badge]: https://img.shields.io/npm/v/@ivuorinen/stylelint-config?style=flat-square&labelColor=292a44&color=663399
[npm-link]: https://www.npmjs.com/package/@ivuorinen/stylelint-config
[pull-request-link]: https://github.com/ivuorinen/base-configs/pulls
[style-badge]: https://img.shields.io/badge/code_style-ivuorinen%E2%80%99s-663399.svg?labelColor=292a44&style=flat-square
[style-link]: https://github.com/ivuorinen/base-configs
