'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathCbrt() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ cbrt: polyfill },
		{ cbrt: function () { return Math.cbrt !== polyfill; } }
	);
	return polyfill;
};
