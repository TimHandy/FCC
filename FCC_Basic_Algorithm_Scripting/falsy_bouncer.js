// Falsy Bouncer 


// Remove all the falsy values from an array - there are 6 falsy values in javascript: 0, null, false, '', NaN, undefined
function bouncer(arr) {
  return arr.filter(Boolean);  // see below... essentially calling Boolean returns only the true values and drops the false values
}

bouncer([1, null, NaN, 2, undefined, "", 0, false]) // => [1, 2].

/*
Boolean(0); // false
Boolean(true); // true
Boolean(1); // true
Boolean(""); // false
Boolean("false"); // true. "false" is a regular, non-empty string

Some examples of what comes back true when using Boolean. The filter function returns only true statements. When we call Boolean it scans the item and gives back its Boolean value filter then adds the true value and ignores the false values.
*/


/*
Falsy Bouncer 
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()


bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].

*/
