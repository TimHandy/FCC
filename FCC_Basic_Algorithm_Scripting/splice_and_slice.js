// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  array2 = arr2.slice();    //slice to copy arr2, keeping things Functional
  array1 = arr1.slice();

  array2.splice(n, 0, array1);		// we start at position n, remove 0 elements (i.e. a straight insert and push the other elements to the right), and we insert the array1, essentially putting an array into the existing array at position n.
  
  var flattenedArray2 = [].concat.apply([], array2);		// flatten the array. Don't know how this works!?

  return flattenedArray2;
  
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code.



frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.


*/
