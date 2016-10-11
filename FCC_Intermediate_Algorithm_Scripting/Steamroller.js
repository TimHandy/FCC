// Steamroller


function steamrollArray(array) {

  const flat = [];	//create empty array to hold the values extracted

  array.forEach(item => {  //for each item in the array...
    if (Array.isArray(item)) { 	// if the item is itself an array...
      flat.push(...steamrollArray(item));		// use recursion to go a level deeper into the item, flatten and push to flat. Do this for all the items in the array (by use of the spread operator).
    } else {	// if the item is not an array...
      flat.push(item);	// add it to flat
    }
  });

  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);




Basic Code Solution:

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

Code Explanation:

Create a new variable to keep flattened arrays.
Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
Invoke the function, the first time you will always pass it an array, so it always fall in to the isArray branch
Return the flattened array.




Intermediate Code Solution:

function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);

Code Explanation:

Use reduce to concatenate each element into the last element
If the new element is an Array itself call the function recursively to flatten it before merging it with the rest of result
Pass an empty array to reduce as initial value to make sure even the first element will be processed
Credit goes to
Relevant Links

http://stackoverflow.com/a/15030117/1075499
Array.reduce
Array.concat






/*
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()


steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

*/
