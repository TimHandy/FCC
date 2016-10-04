// Sum All Numbers in a Range

// My way:
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);   // find max in arr
  var min = Math.min(arr[0], arr[1]);   // find min in arr
  range = [];   // create the array outside of the for loop. I thought reduce required an array.
  for (var i = min; i <= max; i++) {    // create an array of numbers from min to max.
    range.push(i);
  }
  return range.reduce(function(a, b){   // sum all the numbers from min to max and return the total.
    return a + b;
  });
}

sumAll([1, 4]); // 10

// Same but simpler... just totals with += i
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);

// Advanced, using the spread operator ...arr which expancs an array
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){   // arr is used to expand arr to Math.min(1, 4)
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);



/*
Sum All Numbers in a Range 

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()


sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.


*/
