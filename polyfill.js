'use strict';

var implementation = require('./implementation');

var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var abs = Math.abs;

var withinULPDistance = function withinULPDistance(result, expected) {
	// eslint-disable-next-line no-magic-numbers
	return abs(1 - (result / expected)) < 8 * EPSILON;
};

module.exports = function getPolyfill() {
	var orig = Math.cbrt;
	if (
		!orig
		// Firefox 38 on Windows
		|| !withinULPDistance(orig(1e-300), 1e-100) // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}
	return orig;
};
