// Finders Keepers

function findElement(arr, func) {
 return arr.find(func); // find expects a function and to return true in order to select the first item. As func is a function and returns true/false it can be directly passed into find as an arg. Not sure about the returning of undefined, but it passed the test!
  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()



findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.


*/
