// Return Largest Numbers in Arrays 


function largestOfFour(arr) {
	var largestArr = []  // declare an empty array to take the largest of each array
	for (var i = 0; i < arr.length; i++) {   // create a for loop that will iterate through each sub-array
  		var largest = Math.max.apply( Math, arr[i] );   // of each sub-array, assign the largest value to the 'largest' variable. 'apply' accepts an array and it applies the array as parameters to the actual function, like saying for example Math.max("12", "23", "100", "34", "56", "9", "233"). So, 'apply' is a convenient way to pass an array of data as parameters to a function. http://danicfilip.com/how-to-use-math-max-javascript-function/
      // I'm still not clear on why 'Math' is used as an arg in .apply ????
		 largestArr.push(largest);  // append the largest number to the largestArr array
		}
	return largestArr    // return the largestArr values
  }

//largestOfFour([4, 5, 1, 3])

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// => [ 5, 27, 39, 1001 ]



/*
Return Largest Numbers in Arrays 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Here are some helpful links:

Comparison Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

*/
