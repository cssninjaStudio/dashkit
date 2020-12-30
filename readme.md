# Dashkit

Bulma Dashboard UI Kit

## Version
Version 4.0.0

## Usage

1. Install Dev Depedencies
```sh
npm install
```
2. To start development and server for live preview
```sh
npm run dev
```

# Edits
The Bulma source has been customized.

* Call to `$fullhd-enabled: false;` in `_variables.scss` to override the default Bulma.
* `/src/sass/sass/helpers/spacing.sass` has been removed from the imports. We import our own helpers instead.
