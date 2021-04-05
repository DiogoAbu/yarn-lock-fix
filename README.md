<h1 align="center">Yarn lock fix</h1><br>

<p align="center">
  Update yarn.lock whenever package.json changes
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/yarn-lock-fix">
    <img alt="npm" src="https://img.shields.io/npm/v/yarn-lock-fix?style=flat-square">
  </a>
  <a href="https://github.com/DiogoAbu/yarn-lock-fix/actions">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/DiogoAbu/yarn-lock-fix/Generate%20Release%20and%20Publish%20to%20NPM?label=Generate%20Release%20and%20Publish%20to%20NPM&style=flat-square">
  </a>
</p>

<!-- [BEGIN] Don't edit this section, instead run Markdown AIO: Update Table of Contents -->
## 🚩 Table of Contents

- [🚩 Table of Contents](#-table-of-contents)
- [🚀 Introduction](#-introduction)
- [🔧 Installation](#-installation)
- [📖 Usage](#-usage)
- [💬 Contributing](#-contributing)
- [❤️ Acknowledgments](#️-acknowledgments)
<!-- [END] Don't edit this section, instead run Markdown AIO: Update Table of Contents -->

## 🚀 Introduction

When you want to lock your deps, you may want to run `yarn install` with `--frozen-lockfile`.

This package is used to keep yarn.lock up-to-date and prevent the command above to fail.

The command should run on the pre-commit hook, it will update and stage the `yarn.lock` file if `package.json` is staged.

## 🔧 Installation

There's no need to install [yarn-lock-fix](https://github.com/DiogoAbu/yarn-lock-fix), you can use it with [npx](https://www.npmjs.com/package/npx).

## 📖 Usage

[Yarn-lock-fix](https://github.com/DiogoAbu/yarn-lock-fix) is designed to work with [npx](https://www.npmjs.com/package/npx) and [husky](https://github.com/typicode/husky).

Use husky to the add the command to your pre-commit hook:
```sh
yarn husky add .husky/pre-commit "npx yarn-lock-fix"
```

## 💬 Contributing

Would like to help make this package better? Please take a look at the [contributing guidelines](./CONTRIBUTING.md) for a detailed explanation on how you can contribute.

## ❤️ Acknowledgments

I'd like thank my daily coffee!
