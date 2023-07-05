# Frontend Analytics

## Project Purpose

This project abstracts away specific analytics frameworks in favour of a single common analytics layer.

## Supported Frameworks

- [Amplitude](https://amplitude.com/)

## Getting Started

Install all dependencies:

```shell
npm install
```

Run all tests:

```shell
npm run test
```

## Husky

By default, pre-commit hook will run `npm run lint:fix`. Feel free to remove that if it's undesirable or add your own
pre-commit commands.

Check out [husky](https://typicode.github.io/husky) docs for more info.

## commitlint

You can use `npm run commit` to interactively construct correct commit messsage.

Check out [commitlint](https://commitlint.js.org) docs for examples of how to customise.

## Release actions

The following token needs to be set in the Github repo for the `prerelease` and `release` Github Actions to work:

- `secrets.NPM_TOKEN` (need this to publish on NPM)

When performing a release, make sure to follow our conventional commit approach, as described in [contribution documentation](https://github.com/lokalise/npm-package-template/blob/main/CONTRIBUTING.md).

## License

This project is APACHE, VERSION 2.0 licensed, see LICENSE.md for details.

## Support Us

**lokalise-npm-package-template** was created by Lokalise Engineering Team. Support our work by keeping this line in your README.
