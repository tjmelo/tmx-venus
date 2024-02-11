![project](https://img.shields.io/badge/project-TMX%20Venus-blue)

# TMX Venus

![Size](https://img.shields.io/github/repo-size/tjmelo/tmx-venus) ![Version](https://img.shields.io/github/package-json/v/tjmelo/tmx-venus) ![Release](https://img.shields.io/github/v/release/tjmelo/tmx-venus) ![Last Commit](https://img.shields.io/github/last-commit/tjmelo/tmx-venus/main)
![Passing](https://img.shields.io/github/actions/workflow/status/tjmelo/tmx-venus/checkout-ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ec8a4c81-bee8-4c94-87f0-f9606385df67/deploy-status)](https://app.netlify.com/sites/tmx-shoplist/deploys)

## Table of content

-   [About app](#about-app)
-   [Preview Screens](#preview-screens)
-   [Project details](#project-details)
    -   [Simple Develop Process](#simple-develop-process)
    -   [Docker Develop Process](#docker-develop-process)

-   [CSS](#css)

# About app

### Simple CRUD Shop List

This project is a simple **CRUD** elements list.
Add an element to the list

- Edit element at list
- Exclude element at list

# Preview Screens

![Preview](/src/images/shopping-list.png)

![Preview](/src/images/shopping-list2.png)

### Project Details

This app uses:

- [x] HTML
- [x] JavaScript
- [ ] Typescript
- [ ] Redux
- [x] Babel
- [x] Sass
- [x] Webpack
- [x] Docker

## Simple Develop Process
![Checkout CI](https://github.com/tjmelo/tmx-venus/actions/workflows/checkout-ci/badge.svg)

Download the project

Clone or fork this repository

```sh
git clone https://github.com/tjmelo/tmx-venus.git

cd tmx-venus

git checkout -b develop

npm install && npm start
```

## Docker Develop Process
![Docker Image CI](https://github.com/tjmelo/tmx-venus/actions/workflows/image-ci/badge.svg)

```sh
git clone https://github.com/tjmelo/tmx-venus.git

cd tmx-venus

docker compose up -d
```

Install from the command line

```
docker pull ghcr.io/tjmelo/tmx-venus:latest
```

or image in **Docker Hub** for optional download

```
docker pull tmwd/tmx-venus
```

## CSS

To compile CSS in the development process:
```sh
npm run css
```

Open the app on a browser http://localhost:9000


Have a code fun :fire: