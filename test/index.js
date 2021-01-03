'use strict';

var cbrt = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(cbrt, t);

	t.end();
});
