/**
 * Flatten an Array of Arbitrarily nested Arrays of Integers
 * into a Flat Array of Integers.
 * @param  {Array} integers_array - Array of Numbers
 * @param  {Array} flatten_array  - Flatten array (for recursive mode) of Numbers
 * @return {Array}                - Array of Numbers
 *
 */
var flatten = function(integers_array, flatten_array) {
    // If this function is called in recursion mode, then we
    // need to keep previous recursion results.
    var all_results = flatten_array || [];

    // We just want to perform any action if there's a
    // valid array input and this array contains any value in it.
    if (integers_array && integers_array.length > 0) {
        integers_array.forEach(function(value) {
            if (typeof value === 'number') {
                all_results.push(value);   
            } else if (value instanceof Array) {
                flatten(value, all_results);
            }
        });
    }

    // At this point, all values were evaluated and we
    // have a flat Array of numbers.
    return all_results;
};
