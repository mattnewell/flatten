//NOTES:
//  I would have liked an opportunity to discuss requirements further. It's unusual to make code "well tested" and
//  "ready to ship to production" while also packaging as single file as required by a Gist. I split the difference by
//  making this a single-file Mocha test. I have also pushed this to a public GitHub repository that makes it a little
//  clearer to run via npm test.
//  https://github.com/mattnewell/flatten
//
//  In addition, there are simpler ways to accomplish array flattening in JavaScript (concat or reduce), but those
//  options seemed to violate the spirit of "avoid using language defined methods." Instead, I chose a more traditional
//  recursive implementation.

function flatten(array, result = []) {
    for (let n = 0, length = array.length; n < length; n++) {
        const current = array[n];
        if (Array.isArray(current)) {
            flatten(current, result);
        } else {
            result.push(current);
        }
    }
    return result;
}

const assert = require('assert');
describe('Array', function() {
    describe('#flatten', function() {
        it('should flatten a one-dimensional array', function() {
            assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
        });
        it('should flatten a two-dimensional array', function() {
            assert.deepEqual(flatten([1, 2, [3], 4]), [1, 2, 3, 4]);
        });
        it('should flatten a many-dimensional array', function() {
            assert.deepEqual(flatten([1, [2], [[3], 4], 5]), [1, 2, 3, 4, 5]);
        });
    });
});