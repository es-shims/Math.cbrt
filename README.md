# Math.cbrt <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.cbrt` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.cbrt
```

## Usage/Examples

```js
console.log(Math.cbrt(-8)); // -2
console.log(Math.cbrt(0)); // 0
console.log(Math.cbrt(1)); // 1
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.cbrt
[npm-version-svg]: https://versionbadg.es/es-shims/Math.cbrt.svg
[deps-svg]: https://david-dm.org/es-shims/Math.cbrt.svg
[deps-url]: https://david-dm.org/es-shims/Math.cbrt
[dev-deps-svg]: https://david-dm.org/es-shims/Math.cbrt/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.cbrt#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.cbrt.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.cbrt.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.cbrt.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.cbrt
