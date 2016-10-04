// Sorted Union

function uniteUnique(arr) {

    args = Array.prototype.slice.call(arguments);   // convert the 'arguments' object/array into a REAL usable array.

    argsFlattened = [].concat.apply([], args);       // flatten array into one array

    uniqueArr = argsFlattened.filter(function(elem, idx, arr) {     // filter out the unique elememts
        return arr.indexOf(elem) >= idx;  // if this is true, elem is kept.
    });

    return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()



uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

*/
