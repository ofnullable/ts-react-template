<h1 align="center">🎉 TS React Template 🎉</h1>

<p align="center">  
  <img src="https://img.shields.io/github/license/ofnullable/ts-react-template" />
  <a href="https://github.com/ofnullable/ts-react-template/issues">
    <img src="https://img.shields.io/github/issues/ofnullable/ts-react-template" />
  </a>
</p>

## An easy-to-use react template

- React Single-Page-Application template without create-react-app
- Configured with Typescript, Webpack, Babel, ESLint, Sass, PostCSS and emotion
- If you need anything else, please contribute or leave an issue!

## Live demo

[https://ofnullable.github.io/ts-react-template](https://ofnullable.github.io/ts-react-template)

## Installation

```shell
# clone this repository
$ git clone https://github.com/ofnullable/ts-react-template

# go into template directory
$ cd ts-react-template

# install dependencies
$ npm install
```

## Commands

### Run dev server

```shell
$ npm start
```

Run dev server on [http://localhost:3000](http://localhost:3000)

### Build

```shell
$ npm run build
```

Creating a Production Build. The build artifacts will be stored in the `dist/` directory.

### Deploy github pages

```json
# edit package.json
{
  ...
  "hompage": "https://{github username}.github.io/{repository name}",
}
```

```shell
$ npm run deploy
```

Deploy to github pages
