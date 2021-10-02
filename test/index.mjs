import cbrt, * as cbrtModule from 'math.cbrt';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(cbrt, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(cbrtModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = cbrtModule;
	t.equal((await import('math.cbrt/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('math.cbrt/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('math.cbrt/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
