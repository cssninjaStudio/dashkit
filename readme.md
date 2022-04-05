# 👋 Dashkit
> Dashkit is a dashboard kit UI template built by [cssninjaStudio](https://cssninja.io).

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://discord.cssninja.io/)

![Screenshot](https://media.cssninja.io/products/dashkit/product.png "Dashkit")

## ✌️ preview

Check out the live demo by clicking [here](https://dashkit.cssninja.io/). 
Dashkit is built with [Bulma](https://bulma.io) and [Alpine JS](https://github.com/alpinejs/alpine).

## 👍 Features

* Gulp 4 and nodejs 12.13.0 (minimum)
* Bulma 0.9.3
* ES6 support
* Alpine v3

## 👌 Usage

1. Install Dev Depedencies

```sh
yarn install
```

2. To start development server

```sh
yarn dev
```

## 🍬 Update template colors

Dashkit is built with Sass but relies on native CSS variables with HSL for colors. To change the template theme colors:

* Open bulma-css-vars.config.js and change the HSL value of the primary color:

```
primary: hsl(337, 78, 57),
```

* Then, edit the value of the primary, secondary and accent colors inside `src/scss/css-variables/colors.scss`:

```
// primary HSL (#e73c7d) // hsl(337, 78%, 57%)
@include colorHsl("primary", 337, 78%, 57%);

// secondary HSL (#7938f4) // hsl(261, 90%, 59%)
@include colorHsl("secondary", 261, 90%, 59%);

// accent HSL (#3bf486) // hsl(144, 89%, 59%)
@include colorHsl("accent", 144, 89%, 59%);
```

* Once you're done, run the following command in your terminal:

```
yarn build:update-bulma-colors
```

## 🍔 Issues

If you've found an issue or a bug, you can report it in the issues section of this repository. Please try to follow these simple guidelines to report your issue:

* Issue definition
* Expected behaviour
* Actual behaviour
* steps to reproduce
* Already tried fixes (if relevant)

## 🎉 More

You liked Dashkit? Check also our Envato portfolio [Css Ninja on Themeforest](https://themeforest.net/user/cssninjastudio/portfolio).

Find more premium bulma templates on [Css Ninja](https://cssninja.io/).

## 🚀 About Us

Css Ninja is a web design studio. We build handcrafted and polished templates that will give some hype to your startup or to your next project.



