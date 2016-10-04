// Slasher Flick 

// Remove howMany items from the front of an array
function slasher(arr, howMany) {
	for (var i = 0; i < howMany; i++) {    // Loops through and removes one by one. I don't think this is a very efficient way to do this
		arr.shift();
	}
  return arr;
}

slasher([1, 2, 3], 2);

// Another way with the .slice function:
function slasher(arr, howMany) {
	return arr.slice(howMany);  // This doesn't 'remove' items from the array, just returns the first howMany items and leaves the original array in tact.
  }

slasher([1, 2, 3], 2);

// splice could also be used to remove the head of the array (splice can also insert)
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
slasher([1, 2, 3], 2);




/*
Slasher Flick 

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice()

slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].

*/

