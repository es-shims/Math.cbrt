'use strict';

var exp = Math.exp;
var log = Math.log;
var $Number = Number;

module.exports = function cbrt(value) {
	var x = $Number(value);
	if (x === 0) {
		return x;
	}
	var negate = x < 0;
	var result;
	if (negate) {
		x = -x;
	}
	if (x === Infinity) {
		result = Infinity;
	} else {
		result = exp(log(x) / 3);
		// from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
		result = ((x / (result * result)) + (2 * result)) / 3;
	}
	return negate ? -result : result;
};
