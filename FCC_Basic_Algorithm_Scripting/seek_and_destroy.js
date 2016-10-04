// Seek and Destroy 


// Given an initial array (the first argument in the destroyer function), followed by one or more arguments, remove all elements from the initial array that are of the same value as these additional arguments.

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments).slice(1)  // make array of args from Arguments, but slice off the first arg which is the arr. Could also have used 'var args = Array.from(arguments)' and slice off the first arg, which seems to be a better option to me.
  return arr.filter(function(item) {    // filter the arr based on the items in args that return true, (leaving 2, and 3), however we want the inverse of this, so that 2, and 3, are filtered out, not in, so we use the bang.
    return !args.includes(item);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Arguments object. Like the splat thing in ruby, it will take and automatically accept multiple args, even if only one is specified in the function definition. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// Filter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


/*
Seek and Destroy 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()


destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

*/
