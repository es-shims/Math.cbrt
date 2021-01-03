'use strict';

require('../shim')();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.cbrt.length, 1, 'Math.cbrt has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.cbrt.name, 'cbrt', 'Math.cbrt has name "cbrt"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'cbrt'), 'Math.cbrt is not enumerable');
		et.end();
	});

	runTests(Math.cbrt, t);

	t.end();
});
