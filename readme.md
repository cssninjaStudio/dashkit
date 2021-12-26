# Dashkit - Alpine v3 Dashboard template

Bulma Dashboard UI Kit

## Version
Version 5.0.0

## Usage

1. Install Dev Depedencies
```sh
npm install
```
2. To start development and server for live preview
```sh
npm run dev
```

## Update template colors

Plex is built with Sass but relies on native CSS variables with HSL for colors. To change the template theme colors:

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
npm run build:update-bulma-colors
```
