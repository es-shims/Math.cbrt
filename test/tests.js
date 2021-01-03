'use strict';

var almostEqual = function (actual, expected) {
	var precision = 1e-11;
	return actual - expected < precision && expected - actual < precision;
};

var EPSILON = 2.220446049250313e-16; // Number.EPSILON

var withinULPDistance = function withinULPDistance(result, expected) {
	return Math.abs(1 - (result / expected)) < 8 * EPSILON;
};

module.exports = function (cbrt, t) {
	t.test('should be correct', function (st) {
		st.equal(cbrt(NaN), NaN, 'cbrt(NaN)');
		st.equal(cbrt(+0), +0, 'cbrt(+0)');
		st.equal(cbrt(-0), -0, 'cbrt(-0)');
		st.equal(cbrt(Infinity), Infinity, 'cbrt(Infinity)');
		st.equal(cbrt(-Infinity), -Infinity, 'cbrt(-Infinity)');
		st.ok(almostEqual(cbrt(-8), -2), 'cbrt(-8)');
		st.ok(almostEqual(cbrt(8), 2), 'cbrt(8)');
		st.ok(almostEqual(cbrt(-1000), -10), 'cbrt(-1000)');
		st.ok(almostEqual(cbrt(1000), 10), 'cbrt(1000)');
		st.end();
	});

	t.test('is correct at extremes', function (st) {
		var result = cbrt(1e-300);
		var expected = 1e-100;
		st.ok(almostEqual(result, expected));
		st.ok(withinULPDistance(result, expected));

		st.ok(almostEqual(cbrt(-1e-300), -1e-100), 'cbrt(-1e-300)');
		st.ok(almostEqual(cbrt(-1e+300), -1e+100), 'cbrt(-1e+300)');
		st.ok(almostEqual(cbrt(1e+300), 1e+100), 'cbrt(1e+300)');

		st.end();
	});
};
