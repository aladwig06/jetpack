/**
 * List of all the GUI tests to run.
 *
 * @type {string[]}
 */
const tests = ['main'];

tests.forEach( testName => {
	describe( testName, function () {
		require( `tests/${testName}` );
	} );
} );