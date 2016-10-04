// Where do I belong 

// You need to find where in the array a number should be inserted by order, and return the index where it should go.
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {   // have to supply the callback or just sort() will return the wrong kind of sort. Notice that .sort mutates the original array so you don't have to reapply it to another variable.
    return a - b;   // sorts in numerical order from smallest to largest
  });

  for (var i=0; i < arr.length; i++) {   // for loop through each el of sorted array
    if (arr[i] >= num ) {   // if the el of array is greater than or equal to the num...
      return i;   // ... return the index of where num should be slotted into
    }
  }
  return arr.length;  // if no position found, num must be the biggest val and should go at the end of the array
}

getIndexToIns([7, 5, 10, 3], 6); // => 2


/*
Where do I belong 

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.


*/
