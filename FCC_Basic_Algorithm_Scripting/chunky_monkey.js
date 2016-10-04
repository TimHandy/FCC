// Chunky Monkey 

// break an array of many values into a new multi-dimensional array of smaller arrays of length 'size'
function chunkArrayInGroups(arr, size) {
	var newArray = [] // create a new holding array for the new arrays
	count = 0    // initiate a counter that will hold where we got to on each iteration through the original array
	while (count < arr.length) {  // will go up to the end of the arr and then stop
		newArray.push(arr.slice(count, count + size ))  // start at count and slice from there to 'size' steps ahead, push this subset of the array to newArray
		count += size // increment the count by the value of 'size'
	}
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// => [["a", "b"], ["c", "d"]]


/*
Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()




chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


*/
